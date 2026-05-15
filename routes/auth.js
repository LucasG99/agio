const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/login', (req, res) => {
  try {
    const escritorio = db.prepare('SELECT * FROM escritorio LIMIT 1').get();
    if (!escritorio) return res.status(404).json({ erro: 'Nenhum escritório cadastrado' });
    res.json({ id: escritorio.id, nome: escritorio.nome, email: escritorio.email });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

module.exports = router;