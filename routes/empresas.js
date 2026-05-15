const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
  try {
    const { escritorio_id } = req.query;
    if (!escritorio_id) return res.status(400).json({ erro: 'escritorio_id obrigatório' });

    const empresas = db.prepare('SELECT * FROM empresa WHERE escritorio_id = ?').all(escritorio_id);

    const result = empresas.map(emp => {
      const cicloAtivo = db.prepare(`
        SELECT id FROM ciclo_folha
        WHERE empresa_id = ? AND status = 'processada'
        ORDER BY id DESC LIMIT 1
      `).get(emp.id);

      const total_funcionarios = db.prepare(`
        SELECT COUNT(*) as count FROM funcionario
        WHERE empresa_id = ? AND status = 'ativo'
      `).get(emp.id).count;

      const total_antecipado_mes = cicloAtivo
        ? db.prepare(`
            SELECT COALESCE(SUM(valor), 0) as total FROM antecipacao
            WHERE ciclo_folha_id = ? AND status = 'aprovada'
          `).get(cicloAtivo.id).total
        : 0;

      return { ...emp, total_funcionarios, total_antecipado_mes };
    });

    res.json(result);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

router.post('/', (req, res) => {
  try {
    const { escritorio_id, nome, cnpj } = req.body;
    if (!escritorio_id || !nome || !cnpj)
      return res.status(400).json({ erro: 'escritorio_id, nome e cnpj são obrigatórios' });

    const existe = db.prepare(`
      SELECT id FROM empresa WHERE cnpj = ? AND escritorio_id = ?
    `).get(cnpj, escritorio_id);
    if (existe) return res.status(409).json({ erro: 'Empresa com este CNPJ já cadastrada neste escritório' });

    const result = db.prepare(`
      INSERT INTO empresa (escritorio_id, nome, cnpj) VALUES (?, ?, ?)
    `).run(escritorio_id, nome, cnpj);

    const empresa = db.prepare('SELECT * FROM empresa WHERE id = ?').get(result.lastInsertRowid);
    res.status(201).json(empresa);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

router.get('/:id', (req, res) => {
  try {
    const empresa = db.prepare('SELECT * FROM empresa WHERE id = ?').get(req.params.id);
    if (!empresa) return res.status(404).json({ erro: 'Empresa não encontrada' });

    const cicloAtivo = db.prepare(`
      SELECT id FROM ciclo_folha
      WHERE empresa_id = ? AND status = 'processada'
      ORDER BY id DESC LIMIT 1
    `).get(empresa.id);

    const total_funcionarios = db.prepare(`
      SELECT COUNT(*) as count FROM funcionario
      WHERE empresa_id = ? AND status = 'ativo'
    `).get(empresa.id).count;

    const total_antecipado_mes = cicloAtivo
      ? db.prepare(`
          SELECT COALESCE(SUM(valor), 0) as total FROM antecipacao
          WHERE ciclo_folha_id = ? AND status = 'aprovada'
        `).get(cicloAtivo.id).total
      : 0;

    res.json({ ...empresa, total_funcionarios, total_antecipado_mes });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

module.exports = router;