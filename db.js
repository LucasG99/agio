const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

const DB_PATH = path.join(__dirname, 'agio.db');

const db = new Database(DB_PATH);

db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

db.exec(`
  CREATE TABLE IF NOT EXISTS escritorio (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    nome       TEXT NOT NULL,
    cnpj       TEXT NOT NULL,
    email      TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS empresa (
    id            INTEGER PRIMARY KEY AUTOINCREMENT,
    escritorio_id INTEGER NOT NULL REFERENCES escritorio(id),
    nome          TEXT NOT NULL,
    cnpj          TEXT NOT NULL,
    created_at    TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS funcionario (
    id              INTEGER PRIMARY KEY AUTOINCREMENT,
    empresa_id      INTEGER NOT NULL REFERENCES empresa(id),
    nome            TEXT NOT NULL,
    cpf             TEXT NOT NULL,
    salario_liquido REAL NOT NULL,
    data_admissao   TEXT NOT NULL,
    status          TEXT NOT NULL DEFAULT 'ativo',
    created_at      TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS ciclo_folha (
    id           INTEGER PRIMARY KEY AUTOINCREMENT,
    empresa_id   INTEGER NOT NULL REFERENCES empresa(id),
    competencia  TEXT NOT NULL,
    arquivo_nome TEXT,
    status       TEXT NOT NULL DEFAULT 'processada',
    created_at   TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS antecipacao (
    id               INTEGER PRIMARY KEY AUTOINCREMENT,
    funcionario_id   INTEGER NOT NULL REFERENCES funcionario(id),
    ciclo_folha_id   INTEGER NOT NULL REFERENCES ciclo_folha(id),
    valor            REAL NOT NULL,
    taxa             REAL NOT NULL DEFAULT 9.90,
    status           TEXT NOT NULL DEFAULT 'aprovada',
    data_solicitacao TEXT NOT NULL DEFAULT (datetime('now')),
    data_pagamento   TEXT
  );
`);

module.exports = db;