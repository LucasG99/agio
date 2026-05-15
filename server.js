const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();

// Garante que a pasta uploads existe
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir);

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

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

const PORT = 3000;
app.listen(PORT, () => console.log(`Ágio rodando em http://localhost:${PORT}`));