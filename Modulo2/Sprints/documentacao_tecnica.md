# Technical Documentation — Ágio

## Overview

Ágio is a full-stack web application that simulates a salary advance product for accounting firms and their employees. The application has three main interfaces: an administrative dashboard for the accounting office, a mobile page where employees can request salary advances, and a login screen. The backend is a Node.js API built with Express serving data from a SQLite database, while the frontend uses plain HTML/CSS/JS without frameworks. The application is deployed to production on Render and can also run locally on Windows or Unix environments.

## Stack

| Layer       | Technology                                     | Version |
| ----------- | ---------------------------------------------- | ------- |
| Runtime     | Node.js                                        | 20.11.1 |
| Web server  | Express                                        | 4.x     |
| Database    | SQLite via `better-sqlite3`                    | 9.x     |
| Frontend    | HTML5 + CSS3 + Vanilla JS                      | —       |
| Fonts (CDN) | Bricolage Grotesque + DM Sans (Google Fonts)   | —       |
| CSV parser  | Custom implementation with delimiter detection | —       |
| Hosting     | Render (free tier)                             | —       |

The decision to use SQLite with `better-sqlite3` (instead of PostgreSQL or MongoDB) is deliberate for the MVP phase: single-file database, zero configuration, and synchronous performance sufficient for the projected operational volume during the first 12 months. Migration to PostgreSQL is planned for the expansion phase (Sprint 4 or later), once transaction volume justifies the additional infrastructure.

## File structure

```text
agio/
├── server.js                 # Entry point, configures Express and routes
├── db.js                     # SQLite connection + schema + automatic seed
├── package.json              # Dependencies and npm scripts
├── .node-version             # Node version pin for Render
├── .gitignore                # Ignores agio.db, node_modules, uploads, .env
│
├── routes/
│   ├── auth.js               # Accounting office login
│   ├── empresas.js           # Company CRUD
│   ├── funcionarios.js       # Employee CRUD, CPF lookup
│   ├── antecipacoes.js       # Salary advance requests
│   ├── ciclos.js             # Monthly payroll CSV upload
│   └── relatorio.js          # Discount report CSV generation
│
├── public/
│   ├── index.html            # Login screen
│   ├── painel.html           # Office dashboard (desktop)
│   ├── funcionario.html      # Employee page (mobile)
│   └── style.css             # Complete design system
│
├── uploads/                  # Temporary CSV directory (ignored by git)
└── agio.db                   # SQLite database (created at runtime, ignored by git)
```

## Database

The schema contains five entities linked in a top-down ownership hierarchy starting from the accounting office.

**escritorio** — root entity of the system. Every login belongs to an accounting office.

* `id` (PK), `nome`, `email`, `senha_hash`, `telefone`, `data_criacao`

**empresa** — companies whose payroll is managed by the office.

* `id` (PK), `escritorio_id` (FK), `razao_social`, `nome_fantasia`, `cnpj`, `data_criacao`

**funcionario** — company employees identified by CPF.

* `id` (PK), `empresa_id` (FK), `nome`, `cpf` (unique per company), `salario`, `data_admissao`, `ativo`

**ciclo** — every monthly payroll upload creates a cycle. Represents the payroll competency month of the advance.

* `id` (PK), `empresa_id` (FK), `mes`, `ano`, `data_upload`, `total_funcionarios`

**antecipacao** — individual salary advance request.

* `id` (PK), `funcionario_id` (FK), `ciclo_id` (FK), `valor`, `taxa`, `status`, `data_solicitacao`, `data_desconto`

The advance status has only three values: `aprovada` (created immediately upon request, with no manual approval flow), `descontada` (marked when the payroll deduction report is generated), and `cancelada` (if the office needs to reverse it). There is no `pendente` state in the current schema, a decision made to simplify the demo flow.

The `db.js` file handles both schema creation (`CREATE TABLE IF NOT EXISTS`) and the automatic seed process executed whenever the database is empty. The seed creates 1 test office, 3 companies, and 18 employees distributed among them. This allows any freshly deployed instance to already contain demo data immediately after the first startup.

## Backend routes

The API follows a simple REST pattern without URL versioning, returning JSON responses.

| Method | Route                                | Description                                           |
| ------ | ------------------------------------ | ----------------------------------------------------- |
| POST   | `/api/login`                         | Office authentication, returns `escritorio_id`        |
| GET    | `/api/empresas`                      | Lists companies belonging to the authenticated office |
| POST   | `/api/empresas`                      | Creates a new company                                 |
| GET    | `/api/empresas/:id/funcionarios`     | Lists company employees                               |
| POST   | `/api/empresas/:id/ciclos`           | Uploads payroll CSV for the month                     |
| GET    | `/api/funcionarios/:empresa_id/:cpf` | Finds employee by CPF (used on mobile page)           |
| POST   | `/api/antecipacoes`                  | Creates salary advance request                        |
| GET    | `/api/funcionarios/:id/antecipacoes` | Employee advance history                              |
| GET    | `/api/empresas/:id/relatorio`        | Generates payroll deduction CSV                       |

Authentication is simplified for demonstration purposes: the `escritorio_id` is stored in the browser’s `sessionStorage` after login and sent in subsequent requests. There is no JWT, secure cookie, or refresh token. For production use, this layer must be replaced with proper authentication (JWT + httpOnly cookies, or a BaaS solution such as Auth0/Clerk).

## Frontend

The application has three pages, each with a clearly defined responsibility.

**index.html — Login.** Initial screen with a dark radial gradient and accounting office email/password form. The seeded credentials are `contato@escritorio.com.br` / `senha123`. After successful authentication, the user is redirected to `painel.html`.

**painel.html — Office dashboard (desktop).** Fixed left sidebar with inline SVG icons in a Lucide-style aesthetic. The main area displays company cards with colored avatars (deterministic color generated through a name hash, without external libraries). Clicking a company opens a detail view containing employee tables, payroll cycle status, CSV upload, and advance tables. Upload modal uses backdrop blur. Stat cards at the top display totals (active employees, monthly advances, total transaction volume, accumulated commission).

The upload CSV accepts two delimiters: comma (international standard) or semicolon (Brazilian Excel standard). Detection is automatic and based on the first line of the file:

```js
const delimiter = conteudo.split('\n')[0].includes(';') ? ';' : ',';
```

This simple logic avoids the friction of asking accounting offices to change Excel regional settings before exporting.

**funcionario.html — Employee page (mobile-first).** Vertical mobile-optimized layout with a hero gradient and curved white overlay at the bottom. Displays available balance (up to 40% of salary minus advances in the current cycle), a visual progress bar for the balance/limit ratio, and transaction history grouped by payroll cycle. Access happens through URL parameters: `?empresa_id=1&cpf=999.888.777-66`, avoiding the need for employee registration/login. The salary advance flow happens in three clicks: enter amount, confirm, receive Pix.

The design uses two token systems via CSS variables: `brand-*` color scale (green) and `neutral-*` (gray), with five shadow levels (`shadow-xs` to `shadow-xl`), five border radius levels, and two typography families (Bricolage for headings, DM Sans for body text).

## Running locally

Prerequisites:

* Node.js 20.11.1 or higher (versions 22+ may have compatibility issues with `better-sqlite3` v9; Node 20 is recommended)
* npm 9 or higher
* Git

Step-by-step in PowerShell (Windows) or Unix terminal:

```bash
# 1. Clone repository
git clone https://git.inteli.edu.br/lucas.galvao/agio.git
cd agio

# 2. Install dependencies (better-sqlite3 compiles native bindings)
npm install

# 3. Start server
node server.js
```

Expected output:

```text
Server running at http://localhost:3000
Empty database detected, running initial seed...
Seed complete: 1 office, 3 companies, 18 employees
```

After the first startup, the `agio.db` file is created at the project root. This file is not versioned in git (it is included in `.gitignore`), so every environment has its own database instance. To reset application state, simply delete the file: on the next execution, the seed runs automatically.

Access in browser:

* Office dashboard: `http://localhost:3000`
* Employee page (example): `http://localhost:3000/funcionario.html?empresa_id=1&cpf=111.222.333-44`

Office login credentials:

* Email: `contato@escritorio.com.br`
* Password: `senha123`

## Render deployment

The application is live at `https://agio-2.onrender.com`, hosted on Render’s free tier. Required Render configuration:

```yaml
Build Command:   npm install --build-from-source
Start Command:   node server.js
Environment:     NODE_VERSION=20.11.1
                 PORT (auto-injected by Render)
```

The `--build-from-source` flag in `npm install` is required because `better-sqlite3` distributes precompiled binaries only for specific Node versions, and Render uses Linux images that do not always match available binaries. Forcing source compilation resolves compatibility issues at the cost of roughly 30 extra seconds during the initial build.

Render injects the `PORT` environment variable at runtime, and `server.js` consumes it with a fallback to 3000 in local environments:

```js
const PORT = process.env.PORT || 3000;
```

Render cannot directly access Inteli’s GitLab instance, so deployment uses a public GitHub mirror (`https://github.com/LucasG99/agio.git`). A `github` remote was added to the local repository:

```bash
git remote add github https://github.com/LucasG99/agio.git
git push github main
```

Every push to `github` triggers an automatic redeploy on Render.

## Technical notes worth documenting

Three implementation details deserve documentation because they consumed debugging time and may reappear later.

**UTF-8 encoding in served pages.** By default, `express.static` does not inject charset information into the `Content-Type` header of `.html` and `.css` files, which can cause some browsers to interpret content as Latin-1 and break Portuguese accent characters. The fix was to force charset through `setHeaders`:

```js
app.use(express.static('public', {
  setHeaders: (res, path) => {
    if (path.endsWith('.html') || path.endsWith('.css')) {
      res.setHeader('Content-Type', `${res.getHeader('Content-Type')}; charset=utf-8`);
    }
  }
}));
```

**Node version pinned to 20.** `better-sqlite3` v9, the version currently used, does not compile on Node 24 due to ABI incompatibility. Attempts to move to Node 22 also produced isolated issues. Version 20.11.1 is stable and supported under LTS until 2026, making it the defensive choice. Pinning happens in three places: the `engines` field in `package.json`, the `.node-version` file at the project root, and the `NODE_VERSION` environment variable in Render.

**Comma vs semicolon CSVs.** Brazilian Excel under pt-BR regional settings exports CSVs using semicolons instead of commas (to avoid conflicts with decimal commas). International Excel uses commas. The application accepts both formats through automatic detection during upload, but the payroll deduction report generated by the backend still uses commas as delimiters, causing Brazilian Excel to open the file in a single column unless the user manually applies “Text to Columns”. This behavior is pending correction in the next sprint: switching separators to semicolons and decimal notation from periods to commas inside `routes/relatorio.js`.

## Known limitations of the current implementation

The current implementation is a functional MVP suitable for demonstrations and early validation, not for real-world production use at commercial scale. The following issues must be addressed before operating with real accounting offices charging salary advance fees:

* `sessionStorage`-based authentication must be replaced with JWT + httpOnly cookies or a managed authentication solution
* Passwords are hashed with bcrypt, but password recovery flow has not yet been implemented
* There is no rate limiting on login or advance request routes
* There are no structured logs (only `console.log` debugging)
* There are no automated tests
* SQLite runs as a single file inside the Render container filesystem, meaning every redeploy resets data (acceptable for demos, unacceptable for production)
* Pix integration is simulated — there are no real calls to QI Tech or another BaaS provider
* LGPD compliance is partial: personal data is stored, but there is no deletion-on-request flow or formal consent mechanism during registration
