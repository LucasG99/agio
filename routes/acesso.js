const express = require('express');
const router = express.Router();
const db = require('../db');

function calcularTeto(salario_liquido, data_admissao) {
  const admissao = new Date(data_admissao);
  const hoje = new Date();
  const dias = Math.floor((hoje - admissao) / (1000 * 60 * 60 * 24));
  return dias > 90 ? salario_liquido * 0.4 : salario_liquido * 0.2;
}

router.post('/', (req, res) => {
  try {
    const { cpf, empresa_id } = req.body;

    if (!cpf || !empresa_id)
      return res.status(400).json({ erro: 'cpf e empresa_id são obrigatórios' });

    const funcionario = db.prepare(`
      SELECT * FROM funcionario WHERE cpf = ? AND empresa_id = ?
    `).get(cpf, empresa_id);

    if (!funcionario)
      return res.status(404).json({ erro: 'CPF não encontrado. Verifique se você está usando o link correto.' });

    if (funcionario.status !== 'ativo')
      return res.status(403).json({ erro: 'Seu acesso está desativado. Entre em contato com o RH.' });

    const cicloAtivo = db.prepare(`
      SELECT id FROM ciclo_folha
      WHERE empresa_id = ? AND status = 'processada'
      ORDER BY id DESC LIMIT 1
    `).get(empresa_id);

    const teto = calcularTeto(funcionario.salario_liquido, funcionario.data_admissao);

    const emAberto = cicloAtivo
      ? db.prepare(`
          SELECT COALESCE(SUM(valor), 0) as total FROM antecipacao
          WHERE funcionario_id = ? AND ciclo_folha_id = ? AND status = 'aprovada'
        `).get(funcionario.id, cicloAtivo.id).total
      : 0;

    const saldo_disponivel = Math.round(Math.max(0, teto - emAberto) * 100) / 100;

    const ultimas = db.prepare(`
      SELECT a.*, c.competencia FROM antecipacao a
      JOIN ciclo_folha c ON c.id = a.ciclo_folha_id
      WHERE a.funcionario_id = ?
      ORDER BY a.data_solicitacao DESC
      LIMIT 5
    `).all(funcionario.id);

    res.json({
      id: funcionario.id,
      nome: funcionario.nome,
      cpf: funcionario.cpf,
      empresa_id: funcionario.empresa_id,
      teto: Math.round(teto * 100) / 100,
      saldo_disponivel,
      ultimas_antecipacoes: ultimas
    });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

router.get('/:funcionario_id', (req, res) => {
  try {
    const funcionario = db.prepare('SELECT * FROM funcionario WHERE id = ?').get(req.params.funcionario_id);
    if (!funcionario)
      return res.status(404).json({ erro: 'Funcionário não encontrado' });

    const cicloAtivo = db.prepare(`
      SELECT id FROM ciclo_folha
      WHERE empresa_id = ? AND status = 'processada'
      ORDER BY id DESC LIMIT 1
    `).get(funcionario.empresa_id);

    const teto = calcularTeto(funcionario.salario_liquido, funcionario.data_admissao);

    const emAberto = cicloAtivo
      ? db.prepare(`
          SELECT COALESCE(SUM(valor), 0) as total FROM antecipacao
          WHERE funcionario_id = ? AND ciclo_folha_id = ? AND status = 'aprovada'
        `).get(funcionario.id, cicloAtivo.id).total
      : 0;

    const saldo_disponivel = Math.round(Math.max(0, teto - emAberto) * 100) / 100;

    const antecipacoes = db.prepare(`
      SELECT a.*, c.competencia FROM antecipacao a
      JOIN ciclo_folha c ON c.id = a.ciclo_folha_id
      WHERE a.funcionario_id = ?
      ORDER BY a.data_solicitacao DESC
    `).all(funcionario.id);

    res.json({
      ...funcionario,
      teto: Math.round(teto * 100) / 100,
      saldo_disponivel,
      antecipacoes
    });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

module.exports = router;