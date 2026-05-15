const db = require('./db');

// Limpa na ordem inversa de dependência
db.exec(`
  DELETE FROM antecipacao;
  DELETE FROM ciclo_folha;
  DELETE FROM funcionario;
  DELETE FROM empresa;
  DELETE FROM escritorio;
`);

// Escritório
const escritorio = db.prepare(`
  INSERT INTO escritorio (nome, cnpj, email) VALUES (?, ?, ?)
`).run('Escritório Contábil Omega', '11.111.111/0001-11', 'contador@omega.com.br');

const eid = escritorio.lastInsertRowid;

// Empresas
const insEmpresa = db.prepare(`INSERT INTO empresa (escritorio_id, nome, cnpj) VALUES (?, ?, ?)`);

const e1 = insEmpresa.run(eid, 'Padaria Flores Ltda.', '12.345.678/0001-99').lastInsertRowid;
const e2 = insEmpresa.run(eid, 'Auto Peças Vitória', '98.765.432/0001-11').lastInsertRowid;
const e3 = insEmpresa.run(eid, 'Mercadinho Belo Ltda.', '55.444.333/0001-22').lastInsertRowid;

// Funcionários
const insFunc = db.prepare(`
  INSERT INTO funcionario (empresa_id, nome, cpf, salario_liquido, data_admissao)
  VALUES (?, ?, ?, ?, ?)
`);

// Padaria Flores
const f1  = insFunc.run(e1, 'Ana Silva',       '111.222.333-44', 2200.00, '2024-01-10').lastInsertRowid;
const f2  = insFunc.run(e1, 'Carlos Mota',     '222.333.444-55', 1800.00, '2024-03-10').lastInsertRowid;
const f3  = insFunc.run(e1, 'Maria Souza',     '333.444.555-66', 2500.00, '2023-08-15').lastInsertRowid;
const f4  = insFunc.run(e1, 'João Ferreira',   '444.555.666-77', 1600.00, '2025-11-01').lastInsertRowid;
const f5  = insFunc.run(e1, 'Luciana Ramos',   '555.666.777-88', 2100.00, '2024-06-20').lastInsertRowid;
const f6  = insFunc.run(e1, 'Pedro Alves',     '666.777.888-99', 1750.00, '2025-03-05').lastInsertRowid;
const f7  = insFunc.run(e1, 'Fernanda Lima',   '777.888.999-00', 2000.00, '2024-09-12').lastInsertRowid;
const f8  = insFunc.run(e1, 'Roberto Costa',   '888.999.000-11', 1900.00, '2026-04-01').lastInsertRowid;

// Auto Peças Vitória
const f9  = insFunc.run(e2, 'Marcos Oliveira', '101.202.303-44', 2300.00, '2023-05-20').lastInsertRowid;
const f10 = insFunc.run(e2, 'Sandra Pinto',    '202.303.404-55', 1950.00, '2024-02-14').lastInsertRowid;
const f11 = insFunc.run(e2, 'Antônio Barbosa', '303.404.505-66', 2150.00, '2025-01-08').lastInsertRowid;
const f12 = insFunc.run(e2, 'Cristiane Nunes', '404.505.606-77', 1700.00, '2026-03-15').lastInsertRowid;

// Mercadinho Belo
const f13 = insFunc.run(e3, 'Juliana Carvalho',  '505.606.707-88', 1850.00, '2023-11-10').lastInsertRowid;
const f14 = insFunc.run(e3, 'Ricardo Santos',    '606.707.808-99', 2050.00, '2024-07-22').lastInsertRowid;
const f15 = insFunc.run(e3, 'Patrícia Moreira',  '707.808.909-00', 1650.00, '2025-06-30').lastInsertRowid;
const f16 = insFunc.run(e3, 'Thiago Mendes',     '808.909.010-11', 2200.00, '2024-04-05').lastInsertRowid;
const f17 = insFunc.run(e3, 'Camila Rodrigues',  '909.010.111-22', 1800.00, '2025-09-18').lastInsertRowid;
const f18 = insFunc.run(e3, 'Eduardo Gomes',     '010.111.222-33', 2400.00, '2023-12-01').lastInsertRowid;

// Ciclos de folha
const insCiclo = db.prepare(`
  INSERT INTO ciclo_folha (empresa_id, competencia, arquivo_nome, status) VALUES (?, ?, ?, ?)
`);

// Ciclos anteriores (inativo) para suportar antecipações de abril
const c1_abril = insCiclo.run(e1, '2026-04', 'folha-abril.csv', 'inativa').lastInsertRowid;
const c2_abril = insCiclo.run(e2, '2026-04', 'folha-abril.csv', 'inativa').lastInsertRowid;

// Ciclos ativos (maio)
const c1 = insCiclo.run(e1, '2026-05', 'folha-maio.csv', 'processada').lastInsertRowid;
const c2 = insCiclo.run(e2, '2026-05', 'folha-maio.csv', 'processada').lastInsertRowid;
const c3 = insCiclo.run(e3, '2026-05', 'folha-maio.csv', 'processada').lastInsertRowid;

// Antecipações
const insAnt = db.prepare(`
  INSERT INTO antecipacao (funcionario_id, ciclo_folha_id, valor, taxa, status, data_solicitacao)
  VALUES (?, ?, ?, 9.90, ?, ?)
`);

// Padaria Flores — ciclo maio
insAnt.run(f2, c1, 420.00, 'aprovada',   '2026-05-08');
insAnt.run(f2, c1, 200.00, 'aprovada',   '2026-05-21');
insAnt.run(f3, c1, 500.00, 'aprovada',   '2026-05-03');
insAnt.run(f3, c1, 500.00, 'aprovada',   '2026-05-10');

// Ana Silva — ciclo abril (descontada)
insAnt.run(f1, c1_abril, 300.00, 'descontada', '2026-04-10');

// Auto Peças — maio
insAnt.run(f9,  c2, 350.00, 'aprovada',   '2026-05-12');
// Sandra Pinto — abril (descontada)
insAnt.run(f10, c2_abril, 200.00, 'descontada', '2026-04-20');

// Mercadinho Belo — maio
insAnt.run(f13, c3, 250.00, 'aprovada', '2026-05-07');
insAnt.run(f14, c3, 400.00, 'aprovada', '2026-05-15');
insAnt.run(f18, c3, 600.00, 'aprovada', '2026-05-02');

console.log('Seed concluído.');
console.log(`Escritório: ${eid} | Empresas: ${e1}, ${e2}, ${e3}`);
console.log(`Funcionários: ${[f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11,f12,f13,f14,f15,f16,f17,f18].join(', ')}`);
console.log(`Ciclos ativos: ${c1} (Padaria), ${c2} (Auto Peças), ${c3} (Mercadinho)`);