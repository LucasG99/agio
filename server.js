const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

// Roda seed automaticamente se o banco estiver vazio
const db = require('./db');
const count = db.prepare('SELECT COUNT(*) as n FROM escritorio').get();
if (count.n === 0) {
  console.log('Banco vazio — rodando seed...');
  require('./seed');
}

const app = express();

// Garante que a pasta uploads existe
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir);

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public'), {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.html')) {
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
    }
    if (filePath.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css; charset=utf-8');
    }
  }
}));

// Rotas
app.use('/api/auth',          require('./routes/auth'));
app.use('/api/empresas',      require('./routes/empresas'));
app.use('/api/funcionarios',  require('./routes/funcionarios'));
app.use('/api/ciclos',        require('./routes/ciclos'));
app.use('/api/antecipacoes',  require('./routes/antecipacoes'));
app.use('/api/relatorio',     require('./routes/relatorio'));
app.use('/api/acesso',        require('./routes/acesso'));

// Health check
app.get('/api/health', (req, res) => res.json({ ok: true }));

// 404
app.use((req, res) => res.status(404).json({ erro: 'Rota não encontrada' }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Ágio rodando na porta ${PORT}`));