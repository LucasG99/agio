const express = require('express');
const router = express.Router();
const db = require('../db');

function calcularTeto(salario_liquido, data_admissao) {
  const admissao = new Date(data_admissao);
  const hoje = new Date();
  const diasDeGasa = Math.floor((hoje - admissao) / (1000 * 60 * 60 * 24));
  return diasDeGasa > 90 ? salario_liquido * 0.4 : salario_liquido * 0.2;
}

function calcularSaldo(funcionario_id, ciclo_folha_id, teto) {
  const emAberto = db.prepare(`
    SELECT COALESCE(SUM(valor), 0) as total FROM antecipacao
    WHERE funcionario_id = ? AND ciclo_folha_id = ? AND status = 'aprovada'
  `).get(funcionario_id, ciclo_folha_id).total;
  return Math.max(0, teto - emAberto);
}

function statusAntecipacao(saldo, teto, total_antecipado) {
  if (total_antecipado === 0) return 'sem_antecipacao';
  if (saldo === 0) return 'limite_esgotado';
  return 'com_antecipacao';
}

router.get('/', (req, res) => {
  try {
    const { empresa_id } = req.query;
    if (!empresa_id) return res.status(400).json({ erro: 'empresa_id obrigatório' });

    const cicloAtivo = db.prepare(`
      SELECT id FROM ciclo_folha
      WHERE empresa_id = ? AND status = 'processada'
      ORDER BY id DESC LIMIT 1
    `).get(empresa_id);

    const funcionarios = db.prepare(`
      SELECT * FROM funcionario WHERE empresa_id = ? AND status = 'ativo'
      ORDER BY nome ASC
    `).all(empresa_id);

    const result = funcionarios.map(f => {
      const teto = calcularTeto(f.salario_liquido, f.data_admissao);
      const total_antecipado_ciclo_atual = cicloAtivo
        ? db.prepare(`
            SELECT COALESCE(SUM(valor), 0) as total FROM antecipacao
            WHERE funcionario_id = ? AND ciclo_folha_id = ? AND status = 'aprovada'
          `).get(f.id, cicloAtivo.id).total
        : 0;
      const saldo_disponivel = cicloAtivo
        ? calcularSaldo(f.id, cicloAtivo.id, teto)
        : teto;

      return {
        ...f,
        teto: Math.round(teto * 100) / 100,
        saldo_disponivel: Math.round(saldo_disponivel * 100) / 100,
        total_antecipado_ciclo_atual: Math.round(total_antecipado_ciclo_atual * 100) / 100,
        status_antecipacao: statusAntecipacao(saldo_disponivel, teto, total_antecipado_ciclo_atual)
      };
    });

    res.json(result);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

router.get('/:id', (req, res) => {
  try {
    const f = db.prepare('SELECT * FROM funcionario WHERE id = ?').get(req.params.id);
    if (!f) return res.status(404).json({ erro: 'Funcionário não encontrado' });

    const cicloAtivo = db.prepare(`
      SELECT id FROM ciclo_folha
      WHERE empresa_id = ? AND status = 'processada'
      ORDER BY id DESC LIMIT 1
    `).get(f.empresa_id);

    const teto = calcularTeto(f.salario_liquido, f.data_admissao);
    const total_antecipado_ciclo_atual = cicloAtivo
      ? db.prepare(`
          SELECT COALESCE(SUM(valor), 0) as total FROM antecipacao
          WHERE funcionario_id = ? AND ciclo_folha_id = ? AND status = 'aprovada'
        `).get(f.id, cicloAtivo.id).total
      : 0;
    const saldo_disponivel = cicloAtivo
      ? calcularSaldo(f.id, cicloAtivo.id, teto)
      : teto;

    const antecipacoes = db.prepare(`
      SELECT a.*, c.competencia FROM antecipacao a
      JOIN ciclo_folha c ON c.id = a.ciclo_folha_id
      WHERE a.funcionario_id = ?
      ORDER BY a.data_solicitacao DESC
    `).all(f.id);

    res.json({
      ...f,
      teto: Math.round(teto * 100) / 100,
      saldo_disponivel: Math.round(saldo_disponivel * 100) / 100,
      total_antecipado_ciclo_atual: Math.round(total_antecipado_ciclo_atual * 100) / 100,
      antecipacoes
    });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

module.exports = router;