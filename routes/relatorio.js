const express = require('express');
const router = express.Router();
const db = require('../db');

const COMISSAO_ESCRITORIO = 0.35;

router.get('/', (req, res) => {
  try {
    const { empresa_id, ciclo_id } = req.query;

    if (!empresa_id || !ciclo_id)
      return res.status(400).json({ erro: 'empresa_id e ciclo_id são obrigatórios' });

    const ciclo = db.prepare('SELECT * FROM ciclo_folha WHERE id = ? AND empresa_id = ?').get(ciclo_id, empresa_id);
    if (!ciclo)
      return res.status(404).json({ erro: 'Ciclo não encontrado para esta empresa' });

    const antecipacoes = db.prepare(`
      SELECT f.nome, f.cpf, a.valor, a.taxa,
             (a.valor + a.taxa) as total_a_descontar,
             a.data_solicitacao
      FROM antecipacao a
      JOIN funcionario f ON f.id = a.funcionario_id
      WHERE a.ciclo_folha_id = ? AND a.status = 'aprovada'
      ORDER BY f.nome ASC
    `).all(ciclo_id);

    if (antecipacoes.length === 0)
      return res.status(404).json({ erro: 'Nenhuma antecipação aprovada neste ciclo' });

    const total_taxas = antecipacoes.reduce((acc, a) => acc + a.taxa, 0);
    const comissao_escritorio = parseFloat((total_taxas * COMISSAO_ESCRITORIO).toFixed(2));
    const receita_agio = parseFloat((total_taxas - comissao_escritorio).toFixed(2));

    const linhas = [
      'nome,cpf,valor,taxa,comissao_escritorio,receita_agio,total_a_descontar,data_solicitacao',
      ...antecipacoes.map(a => {
        const comissao = parseFloat((a.taxa * COMISSAO_ESCRITORIO).toFixed(2));
        const receita = parseFloat((a.taxa - comissao).toFixed(2));
        return `"${a.nome}","${a.cpf}",${a.valor.toFixed(2)},${a.taxa.toFixed(2)},${comissao.toFixed(2)},${receita.toFixed(2)},${a.total_a_descontar.toFixed(2)},"${a.data_solicitacao}"`;
      }),
      `,,,,,,`,
      `TOTAIS,,${antecipacoes.reduce((acc,a) => acc+a.valor,0).toFixed(2)},${total_taxas.toFixed(2)},${comissao_escritorio.toFixed(2)},${receita_agio.toFixed(2)},${antecipacoes.reduce((acc,a) => acc+a.total_a_descontar,0).toFixed(2)},`
    ];

    const csv = linhas.join('\n');
    const filename = `relatorio-${ciclo.competencia}.csv`;

    res.setHeader('Content-Type', 'text/csv; charset=utf-8');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.send(csv);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

module.exports = router;