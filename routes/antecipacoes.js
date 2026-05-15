const express = require('express');
const router = express.Router();
const db = require('../db');

const TAXA = 9.90;
const MINIMO = 50.00;

function calcularTeto(salario_liquido, data_admissao) {
  const admissao = new Date(data_admissao);
  const hoje = new Date();
  const dias = Math.floor((hoje - admissao) / (1000 * 60 * 60 * 24));
  return dias > 90 ? salario_liquido * 0.4 : salario_liquido * 0.2;
}

router.post('/', (req, res) => {
  try {
    const { funcionario_id, valor } = req.body;

    if (!funcionario_id || valor === undefined)
      return res.status(400).json({ erro: 'funcionario_id e valor são obrigatórios' });

    const valorNum = parseFloat(valor);
    if (isNaN(valorNum) || valorNum < MINIMO)
      return res.status(400).json({ erro: `Valor mínimo para antecipação é R$ ${MINIMO.toFixed(2)}` });

    const funcionario = db.prepare('SELECT * FROM funcionario WHERE id = ?').get(funcionario_id);
    if (!funcionario)
      return res.status(404).json({ erro: 'Funcionário não encontrado' });

    if (funcionario.status !== 'ativo')
      return res.status(403).json({ erro: 'Funcionário inativo' });

    const cicloAtivo = db.prepare(`
      SELECT id FROM ciclo_folha
      WHERE empresa_id = ? AND status = 'processada'
      ORDER BY id DESC LIMIT 1
    `).get(funcionario.empresa_id);

    if (!cicloAtivo)
      return res.status(400).json({ erro: 'Antecipações temporariamente indisponíveis. Aguarde o processamento da próxima folha.' });

    const teto = calcularTeto(funcionario.salario_liquido, funcionario.data_admissao);

    const emAberto = db.prepare(`
      SELECT COALESCE(SUM(valor), 0) as total FROM antecipacao
      WHERE funcionario_id = ? AND ciclo_folha_id = ? AND status = 'aprovada'
    `).get(funcionario_id, cicloAtivo.id).total;

    const saldo = Math.round((teto - emAberto) * 100) / 100;

    if (valorNum > saldo)
      return res.status(400).json({
        erro: `Valor acima do disponível. Seu saldo atual é R$ ${saldo.toFixed(2)}`
      });

    const result = db.prepare(`
      INSERT INTO antecipacao (funcionario_id, ciclo_folha_id, valor, taxa, status, data_solicitacao)
      VALUES (?, ?, ?, ?, 'aprovada', datetime('now'))
    `).run(funcionario_id, cicloAtivo.id, valorNum, TAXA);

    const antecipacao = db.prepare('SELECT * FROM antecipacao WHERE id = ?').get(result.lastInsertRowid);
    res.status(201).json(antecipacao);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

router.get('/', (req, res) => {
  try {
    const { funcionario_id } = req.query;
    if (!funcionario_id) return res.status(400).json({ erro: 'funcionario_id obrigatório' });

    const antecipacoes = db.prepare(`
      SELECT a.*, c.competencia FROM antecipacao a
      JOIN ciclo_folha c ON c.id = a.ciclo_folha_id
      WHERE a.funcionario_id = ?
      ORDER BY a.data_solicitacao DESC
    `).all(funcionario_id);

    res.json(antecipacoes);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

module.exports = router;