const express = require('express');
const router = express.Router();
const db = require('../db');
const multer = require('multer');
const { parse } = require('csv-parse/sync');
const path = require('path');
const fs = require('fs');

const upload = multer({ dest: path.join(__dirname, '../uploads') });

router.get('/', (req, res) => {
  try {
    const { empresa_id } = req.query;
    if (!empresa_id) return res.status(400).json({ erro: 'empresa_id obrigatório' });

    const ciclos = db.prepare(`
      SELECT c.*, COUNT(a.id) as total_antecipacoes
      FROM ciclo_folha c
      LEFT JOIN antecipacao a ON a.ciclo_folha_id = c.id AND a.status = 'aprovada'
      WHERE c.empresa_id = ?
      GROUP BY c.id
      ORDER BY c.competencia DESC
    `).all(empresa_id);

    res.json(ciclos);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

router.post('/upload', upload.single('arquivo'), (req, res) => {
  try {
    const { empresa_id, competencia } = req.body;

    if (!empresa_id || !competencia)
      return res.status(400).json({ erro: 'empresa_id e competencia são obrigatórios' });

    if (!req.file)
      return res.status(400).json({ erro: 'Arquivo CSV obrigatório' });

    const ext = path.extname(req.file.originalname).toLowerCase();
    if (ext !== '.csv') {
      fs.unlinkSync(req.file.path);
      return res.status(400).json({ erro: 'Formato inválido. Envie um arquivo .csv' });
    }

    const conteudo = fs.readFileSync(req.file.path, 'utf8');
    fs.unlinkSync(req.file.path);

    let linhas;
    try {
      linhas = parse(conteudo, { columns: true, skip_empty_lines: true, trim: true });
    } catch (e) {
      return res.status(400).json({ erro: 'Erro ao processar CSV: ' + e.message });
    }

    if (linhas.length === 0)
      return res.status(400).json({ erro: 'O arquivo está vazio' });

    const primeiraLinha = linhas[0];
    const colunasObrigatorias = ['cpf', 'nome', 'salario_liquido', 'data_admissao'];
    const colunasFaltando = colunasObrigatorias.filter(c => !(c in primeiraLinha));
    if (colunasFaltando.length > 0)
      return res.status(400).json({ erro: `Colunas obrigatórias ausentes: ${colunasFaltando.join(', ')}` });

    // Desativa ciclo anterior da mesma competência se existir
    db.prepare(`
      UPDATE ciclo_folha SET status = 'inativa'
      WHERE empresa_id = ? AND competencia = ?
    `).run(empresa_id, competencia);

    const ciclo = db.prepare(`
      INSERT INTO ciclo_folha (empresa_id, competencia, arquivo_nome, status)
      VALUES (?, ?, ?, 'processada')
    `).run(empresa_id, competencia, req.file.originalname);

    const ciclo_id = ciclo.lastInsertRowid;

    const insFunc = db.prepare(`
      INSERT INTO funcionario (empresa_id, nome, cpf, salario_liquido, data_admissao)
      VALUES (?, ?, ?, ?, ?)
    `);
    const updFunc = db.prepare(`
      UPDATE funcionario SET salario_liquido = ?, data_admissao = ?
      WHERE cpf = ? AND empresa_id = ?
    `);

    function normalizarData(str) {
      if (!str) return null;
      if (/^\d{4}-\d{2}-\d{2}$/.test(str)) return str;
      const partes = str.split('/');
      if (partes.length === 3) return `${partes[2]}-${partes[1]}-${partes[0]}`;
      return str;
    }

    let novos = 0, atualizados = 0, ignorados = 0;

    const processarLinhas = db.transaction(() => {
      for (const linha of linhas) {
        const { cpf, nome, salario_liquido, data_admissao } = linha;

        if (!cpf || !salario_liquido) { ignorados++; continue; }

        const salario = parseFloat(String(salario_liquido).replace(',', '.'));
        if (isNaN(salario)) { ignorados++; continue; }

        const dataAdmissao = normalizarData(data_admissao);
        const existe = db.prepare(
          'SELECT id FROM funcionario WHERE cpf = ? AND empresa_id = ?'
        ).get(cpf, empresa_id);

        if (existe) {
          updFunc.run(salario, dataAdmissao, cpf, empresa_id);
          atualizados++;
        } else {
          insFunc.run(empresa_id, nome, cpf, salario, dataAdmissao);
          novos++;
        }
      }
    });

    processarLinhas();

    res.status(201).json({
      ciclo_id,
      competencia,
      total_importados: novos + atualizados,
      novos,
      atualizados,
      ignorados
    });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

module.exports = router;