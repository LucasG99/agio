# ÁGIO TCC — LEVA 1

**Front matter + Executive Summary + Chapter 1 + Chapter 2**

Markdown limpo para Lucas colar no template ABNT. Inglês no corpo, resumo em PT obrigatório, abstract em EN obrigatório.

---

# FRONT MATTER

---

[INSERT: Inteli logo, centered]

**Lucas Oliveira de Medeiros Galvão**

**Ágio: A distribution-first fintech for payroll advances at small and medium Brazilian businesses**

SÃO PAULO
2026

---

[INSERT: Inteli logo, centered]

**Lucas Oliveira de Medeiros Galvão**

**Ágio: A distribution-first fintech for payroll advances at small and medium Brazilian businesses**

Final Course Project submitted to the Institute of Technology and Leadership (INTELI), to obtain a bachelor's degree in Information Systems.

Advisors: Prof. Rodolfo Riyoei Goya and Prof. Egon Daxbacher

SÃO PAULO
2026

---

**Cataloging in Publication**
Library and Documentation Service
Institute of Technology and Leadership (INTELI)
Data entered by the author.

---

G182  Galvão, Lucas Oliveira de Medeiros
        Ágio: a distribution-first fintech for payroll advances at small and medium Brazilian businesses / Lucas Oliveira de Medeiros Galvão; Rodolfo Riyoei Goya, Egon Daxbacher (advisors). – São Paulo, 2026.
        [N] p.

        Advisors: Rodolfo Riyoei Goya, Egon Daxbacher
        Final Course Project (Undergraduate degree in Information Systems)
        Institute of Technology and Leadership, São Paulo, 2026.

        1. Fintech. 2. Payroll advance. 3. Accounting offices as distribution channel. 4. Brazilian SMEs.
                                                                          005

---

## Acknowledgments

[PLACEHOLDER: Lucas escreve seus agradecimentos pessoais.]

---

## Epigraph

[PLACEHOLDER: Lucas escolhe a epígrafe.]

---

## Resumo

Galvão, Lucas Oliveira de Medeiros. **Ágio**. 2026. [N] folhas. TCC (Graduação) — Curso de Sistemas de Informação, Instituto de Tecnologia e Liderança, São Paulo, 2026.

Este trabalho apresenta o desenvolvimento do Ágio, uma plataforma de adiantamento salarial para trabalhadores CLT de pequenas e médias empresas brasileiras, distribuída por meio de escritórios de contabilidade. O projeto se situa na interseção entre serviços financeiros, infraestrutura tecnológica e estratégia de canal, atacando uma lacuna específica do sistema financeiro nacional: cerca de vinte milhões de brasileiros formalmente empregados que ganham até três salários mínimos não têm acesso a crédito de emergência em condições que não sejam punitivas. O cartão rotativo cobra 451,5% ao ano, financeiras informais cobram entre 10% e 15% ao mês, e o empregador, racionalmente, recusa o adiantamento por não ter estrutura para administrar risco de crédito. O diferencial do Ágio está no canal, não no produto. O adiantamento salarial com desconto automático em folha é um produto financeiro maduro, validado em escala pelo Mêntore Bank no Brasil e por DailyPay e EarnIn nos Estados Unidos. O que não existe é uma rede de escritórios de contabilidade distribuindo esse produto para PMEs de 10 a 100 funcionários. Esse segmento é estruturalmente ignorado: pequeno demais para o Mêntore, que exige a troca de banco como condição de entrada, e fragmentado demais para a venda direta da Xerpa, Creditas, Flash e Caju. O sistema desenvolvido permite ao escritório carregar a folha mensal, calcular o limite por funcionário, processar adiantamentos com dedução automática no próximo ciclo e gerar o relatório de desconto pronto para a folha. O MVP foi construído com Node.js, Express e SQLite, deployado em produção no Render, com três interfaces dedicadas aos três atores do modelo. A análise financeira projeta receita bruta de R$ 4,4 milhões no Ano 3, lucro operacional de R$ 1,3 milhão e break-even em torno do mês 12 com dez escritórios em operação plena. O documento conclui que a viabilidade do Ágio depende menos do produto financeiro em si e mais da velocidade com que o canal contábil se transforma em ativo defensável nos próximos dezoito meses, antes que players capitalizados percebam a janela.

**Palavras-Chave:** fintech; adiantamento salarial; escritórios de contabilidade; canal de distribuição; PME; crédito consignado; CLT.

---

## Abstract

Galvão, Lucas Oliveira de Medeiros. **Ágio**. 2026. [N] pages. Final course project (Bachelor) — Information Systems, Institute of Technology and Leadership, São Paulo, 2026.

This work presents the development of Ágio, a payroll advance platform for formally employed workers at Brazilian small and medium-sized businesses, distributed through accounting offices. The project sits at the intersection of financial services, technological infrastructure, and channel strategy, addressing a specific gap in the Brazilian financial system: approximately twenty million Brazilians under formal employment contracts who earn up to three minimum wages lack access to emergency credit on conditions that are not punitive. Revolving credit charges 451.5% per year, informal lenders charge between 10% and 15% per month, and employers rationally refuse to advance wages because the SME lacks the structure to manage credit risk. Ágio's differentiator lies in the channel, not in the product. Payroll advance with automatic deduction is a mature financial product, validated at scale by Mêntore Bank in Brazil and by DailyPay and EarnIn in the United States. What does not exist is a network of accounting offices distributing this product to SMEs of 10 to 100 employees. This segment is structurally ignored: too small for Mêntore, which requires switching banks as a precondition for entry, and too fragmented for the direct enterprise sales of Xerpa, Creditas, Flash, and Caju. The system developed allows the accounting office to upload the monthly payroll, calculate the advance limit per employee, process advances with automatic deduction in the next cycle, and generate the deduction report ready for payroll posting. The MVP was built with Node.js, Express, and SQLite, deployed in production on Render, with three interfaces dedicated to the three actors in the model. Financial analysis projects gross revenue of R$ 4.4 million in Year 3, operating profit of R$ 1.3 million, and break-even around month twelve with ten accounting offices in full operation. The document concludes that Ágio's viability depends less on the financial product itself and more on the speed at which the accounting channel transforms into a defensible asset over the next eighteen months, before capitalized players notice the window.

**Keywords:** fintech; payroll advance; accounting offices; distribution channel; SME; payroll-deducted credit; CLT.

---

## Summary

[Auto-generated table of contents — populated from heading styles after assembly in the ABNT template.]

---


# EXECUTIVE SUMMARY

Ágio is a payroll advance platform for formally employed workers at Brazilian small and medium-sized businesses, distributed through accounting offices. The product addresses a structural gap in the Brazilian financial system. Approximately twenty million CLT workers earning up to three minimum wages have no access to emergency credit on non-punitive terms. Revolving credit charges 451.5% per year according to the Brazilian Central Bank in September 2025. Informal lenders charge between 10% and 15% per month. The employer refuses to advance wages because the SME has neither the legal structure nor the financial capacity to manage credit risk. A R$ 300 emergency turns into a debt that erodes months of salary, less from financial irresponsibility than from the absence of any reasonable alternative.

The financial product Ágio offers is well established. Payroll advance with automatic deduction has been validated at scale by Mêntore Bank in Brazil, which is projected to generate R$ 1 billion in revenue during 2025 with a 0.2% default rate. DailyPay and EarnIn validated the same model in the United States. What does not exist in Brazil is the distribution channel that makes this product viable at the SME scale. Mapped competitors — Xerpa, Creditas, Flash, Caju, Sólides, Gibb — all sell directly to companies through enterprise sales motions. Mêntore Bank, the most relevant operator, requires a full bank switch as a precondition for entry. That requirement is an insurmountable barrier for a 30-employee SME.

The refined positioning that emerged from panel feedback during Sprint 4 of Module 2 organizes the project around the channel rather than the product. The asset Ágio builds over the next five years is not the advance product, which any capitalized fintech can replicate in three months. The asset is a network of accounting offices, each of which is the trusted intermediary for a portfolio of 50 to 200 SMEs. Four characteristics define the thesis: the accounting office network is the asset rather than the product, the accounting channel remains invisible to fintechs that attack SMEs directly, the product is structured as a hub with the salary advance as anchor and payroll services and insurance entering the roadmap in Years 2 and 3, and SMEs with 10 to 100 employees are the explicit sweet spot — too small for Mêntore's bank-switch model, too fragmented for direct enterprise outreach, and almost universally served by external accounting offices.

The unit economics support the model. A 9.99% fee on the advanced amount, an R$ 200 average ticket, a 35% commission paid to the accounting office, and direct costs of approximately R$ 4.66 per transaction produce a gross margin of R$ 8.33 per transaction, equivalent to 37% of net revenue. At an active user base generating 1.5 advances per month, the contribution is R$ 19.49 per active user per month and R$ 8,769 per fully operational accounting office. The financial projection reaches R$ 4.4 million in gross revenue by Year 3, R$ 1.3 million in operating profit, and break-even around month twelve with ten offices in full operation. The 13× return on investment over five years assumes a terminal value calculated as five times Year 3 EBITDA, a conservative posture relative to Gordon perpetuity, which would more than double the valuation.

The MVP is operational. Built with Node.js, Express, and SQLite, deployed in production on Render at `agio-2.onrender.com`, it implements the complete cycle: monthly CSV upload by the accounting office, per-employee advance limit calculation at 40% of net salary with reductions for tenure under 90 days, advance requests through a mobile-first employee page accessed by link and CPF, and a deduction report ready for payroll posting. Three interfaces handle the three actors: a desktop dashboard for the accounting office, a mobile-first page for the employee, and a login screen. The MVP runs with fictional data for demonstration purposes and is intended to support panel evaluation rather than production use. This scope was agreed with the advisors at the start of Module 2: given the time available in a solo final project, the priority was to build a working system that demonstrates the full operational cycle, while accepting that robustness for production-grade operation would be a subsequent step.

Field work in Module 2 followed two paths with markedly different efficiency. Cold outreach to twenty-one accounting offices via Google Maps produced a 9% response rate and zero confirmed meetings. Activation through the personal network produced a 57% response rate and two confirmed meetings: one in Ponta Grossa (PR) and one in the São Paulo metropolitan area. The contrast reinforces the strategic conclusion that the first ten accounting offices will need to be acquired through chain referral, not through direct prospecting.

Three central hypotheses remain unconfirmed. No CLT worker has been interviewed directly, and the activation rate of 30% used in projections derives from references to operations in companies with different profiles. The cost structure depends on QI Tech's pricing schedule, which has not yet been received in full detail. The 35% commission to accounting offices represents the upper bound tested during pricing analysis and may require recalibration based on real commercial conversations.

The next twelve months are governed by execution rather than strategy. Phase one (months one through four) closes the QI Tech contract and onboards the first pilot accounting office. Phase two (months five through eight) structures the FIDC capital vehicle and reaches four active offices. Phase three (months nine through twelve) scales to ten offices and opens preliminary seed conversations. The variable that determines the outcome is not the product. It is the speed at which the accounting channel becomes a defensible asset before any capitalized player notices the window is open.

---

# 1 INTRODUCTION

## 1.1 Context and Motivation

The Brazilian financial system operates in layers. At the top, abundant credit, competitive rates, and multiple products compete for the customer with a credit score and documented banking relationship. In the middle, moderate credit is accessible to those with collateral, formal documentation, and stable income. At the base, there is a void. Twenty million workers with formal employment contracts, garnishable salaries, and documented lives are pushed toward the informal market every time the month runs short. They pay 10% to 15% per month to informal lenders, borrow from relatives, or end up blacklisted at Serasa over an R$ 80 utility bill. Their financial life is organized around a scarcity that does not concern income. It concerns access.

The Brazilian Institute of Geography and Statistics (IBGE) estimates that more than 60% of formally employed workers in Brazil earn up to three minimum wages, approximately twenty million people. A 2024 survey by the National Confederation of Shopkeepers (CNDL) and SPC Brasil showed that six out of ten Brazilians would be unable to absorb a R$ 1,000 financial emergency without taking on debt. For this profile, rent, food, transportation, and dependents consume the salary before the end of the month. Any unexpected expense — a medication, a repair, a higher-than-usual utility bill — triggers one of three punitive paths: revolving credit at 451.5% per year, informal lending at 10% to 15% per month, or default at Serasa with the long-term costs to credit access and rental housing that default carries.

This work presents the design and development of Ágio, a payroll advance platform that addresses this gap through a specific go-to-market mechanism: distribution through accounting offices serving small and medium-sized businesses. The project sits at the intersection of three domains. Financial product engineering, in the form of a payroll advance with automatic deduction. Software systems development, in the form of a functional web platform integrating accounting offices and employees. Channel strategy, in the form of the accounting office network treated as the defensible distribution asset of the company.

The market opportunity emerged from the convergence of three conditions that did not exist together until late 2024. Provisional Measure 1.292, enacted in March 2025 and converted into Law 15.179 in September 2025, dismantled the bureaucratic barrier that previously required a formal agreement between each company and a specific bank to offer payroll-deducted credit. Any CLT worker can now contract such credit through CTPS Digital, with the company merely processing the deduction. Pix reduced the cost of money movement from approximately R$ 5 per wire transfer to between R$ 0.50 and R$ 1.50, the unit cost that separates a viable model from an unviable one when the average transaction ticket is R$ 200. Banking-as-a-service infrastructure matured to the point where a small fintech can obtain KYC, fraud prevention, and credit rights investment fund (FIDC) management without holding a bank's balance sheet. The combination reduced the minimum capital required to originate microadvances from tens of millions of reais to a few hundred thousand. Ágio would not have been buildable in 2022. It is buildable now. The window before capitalized players notice it has less than two years to run.

## 1.2 Problem Definition

The core problem is not the absence of credit products. Payroll-deducted credit exists, salary advance exists, and fintechs operate in the segment. The problem is the channel through which these products reach the workers who need them most. Mêntore Bank, the most relevant Brazilian player with R$ 1 billion in projected 2025 revenue and a 0.2% default rate, operates almost exclusively with large companies of 500 employees or more and requires a full bank switch as a precondition for entry. That model works at the scale Mêntore operates but is functionally inaccessible for SMEs of 10 to 100 employees. Xerpa, Flash, Caju, and Creditas sell directly to companies through enterprise sales motions. The per-company acquisition cost does not work for SMEs of this size because the salesperson's time spent closing a 30-employee operation costs the same as closing a 3,000-employee operation, and only the latter justifies the effort.

The segment is ignored by go-to-market structure, not by absence of pain. Workers at small SMEs face the same emergencies as workers at large companies, with worse alternatives because the corporate benefit infrastructure is thinner. When asked for an advance, the employer refuses. The refusal is not a matter of empathy. Lending money to employees creates legal and financial risks that a small business is not equipped to manage. The pain exists, the worker needs the product, the natural channel refuses to provide it, and the problem sits in a vacuum.

The pain has a second owner that pricing models routinely underestimate: the SME that employs the worker absorbs the cost of financial stress indirectly. Turnover in Brazil's operational base is high, ranging from 30% to 50% annually according to SEBRAE data from 2023. Each termination carries concrete costs: severance with notice period and 40% FGTS fine, proportional benefits, recruiting the replacement, and reduced productivity for one to two months until the new employee reaches operational maturity. For a position at one to two minimum wages, the cost easily reaches three to four monthly salaries per termination. When part of that turnover comes from employees who quit due to financial stress or who miss work because they are dealing with debt, the salary advance becomes a reduction in an expense the entrepreneur already pays. This argument is what opens the B2B side of the proposition. It is the difference between selling wellness, which is a weak argument with the SME owner, and selling turnover reduction, which is an argument that lands.

## 1.3 Refined Thesis and Value Proposition

The thesis presented in this work has been refined in response to feedback received during the Sprint 4 panel presentation of Module 2. The panel noted, correctly, that the framing carried over from Sprint 3 risked positioning Ágio as one more entrant in payroll-deducted credit, indistinguishable from QI Tech, Gibb, or Payssego in the eyes of a careful evaluator. The refinement does not change the product or the financial mechanism. It changes how the project positions itself, and through that, what is treated as the strategic asset of the company.

Ágio operates as a distribution channel that carries a financial product inside. Four characteristics define this positioning, and each is non-obvious in isolation but coherent when read together.

**The accounting office network is the asset.** The payroll advance product, with automatic deduction in the next payroll cycle, is well validated by five years of Mêntore Bank's operation, by international references such as DailyPay and EarnIn, and by the unit economics presented in Chapter 7 of this document. Any fintech with minimum capital can build it in three months. What does not exist in Brazil is a network of accounting offices distributing this product to SMEs of 10 to 100 employees. That network is the moat, and building it is the work. Capital and effort over the next eighteen months go to the channel rather than to technology. The backend remains lean — Node.js with SQLite migrating to PostgreSQL when transaction volume demands it, infrastructure through QI Tech — and most attention goes to understanding, approaching, integrating, and retaining accounting offices.

**The accounting channel remains invisible to capitalized competition.** The fintechs currently operating in payroll-deducted credit attack SMEs directly because that is how their growth playbooks are designed. The accounting office does not appear in their go-to-market because it does not fit their cost-to-acquire model. The invisibility is temporary and lasts until the channel becomes visible enough to copy. Execution speed in the next eighteen months matters more than any other variable.

**The product is structured as a hub.** The salary advance is the anchor that justifies the relationship with the accounting office. It is what opens the conversation, generates the first cycle of commission revenue, and demonstrates to the office that operational integration works without disrupting existing workflow. In Year 2, the platform expands to additional payroll-related services. In Year 3 and beyond, the platform can incorporate insurance products with low premiums discounted in payroll, simplified pensions, and partner-bank consumer credit, each one a separate decision made with real demand data rather than a roadmap commitment made in a pitch deck. The asset built in the first eighteen months enables this expansion. Trying to expand before consolidating the channel would dilute the effort the channel itself requires.

**The 10-to-100-employee SME is the explicit sweet spot.** Smaller companies do not generate the transaction volume to justify the office's operational effort. Larger companies fall within Mêntore's radar, where a bank-switch sale closes the deal. The 10-to-100 segment is where no one serves well, and it is also where employee pain is most evident. Benefits packages are thin, salaries are concentrated between one and three minimum wages, and base-level operational roles dominate the headcount.

The value proposition operates differently for each of the three actors. To the CLT worker, Ágio offers emergency credit access without a credit check, with a transparent fee charged once per transaction rather than compounding monthly interest, accessed through a link with CPF authentication that requires no installation, password, or registration. To the accounting office, Ágio offers a new recurring revenue stream of approximately R$ 8,769 per month at full operation per office, paid through a 35% commission on transaction revenue, with no operational load and no client switching cost. To the SME, Ágio offers a benefit that reduces turnover in base-level functions at no cost, no risk, and no change to the existing payroll process.

## 1.4 Objectives

The general objective of this work is to design, develop, and document a complete proposition for Ágio, including the financial product, the distribution channel strategy, the operational platform, and the business plan, and to validate the central hypothesis that accounting offices can function as a distribution channel for payroll-deducted financial products serving small and medium-sized Brazilian businesses.

The specific objectives are:

- To formalize the problem and the gap in the Brazilian financial system affecting formally employed workers earning up to three minimum wages, with quantitative grounding in public data;
- To analyze the addressable market through TAM, SAM, and SOM, with assumptions made explicit and defensible;
- To identify and analyze the competitive landscape, distinguishing direct and indirect competitors and locating Ágio's strategic position;
- To design and implement a functional MVP that demonstrates the complete operational cycle, from monthly payroll upload by the accounting office to the deduction report ready for posting;
- To build a financial model with explicit unit economics, twelve-month projection with realistic acquisition and activation curves, three-year extension, and viability indicators including break-even, NPV, and IRR;
- To structure a risk matrix with probability and impact dimensions and to formalize mitigation responses to each risk category, including the specific question of who absorbs default risk in the operation;
- To define a twelve-month execution plan with critical milestones, oriented around channel acquisition rather than product development.

## 1.5 Justification and Contributions

From a market perspective, this work documents a path to serve a segment that the Brazilian financial system has structurally ignored. The contribution is not the financial product itself, which is known and operational at scale through Mêntore Bank, but the channel mechanism that makes the product viable at the SME scale where it has not previously operated. If the accounting channel proves itself in execution, the same approach can extend to additional financial products in the same segment, multiplying the value of the network built.

From a technical perspective, the work demonstrates how a deliberately lean stack — Node.js, SQLite, plain HTML and CSS, no frontend framework — can implement the full operational cycle of a financial product MVP in a way that supports panel demonstration and early validation, while keeping development cost low enough to be sustainable for a solo founder with bootstrap capital. The architecture is designed for graceful evolution toward production-grade infrastructure (PostgreSQL, real authentication, BaaS integration) as transaction volume justifies the investment. This scope was agreed with the advisors at the start of Module 2 as the appropriate trade-off for a solo final project with finite time.

From a business perspective, the work integrates strategic analysis, financial modeling, and risk assessment in a way that allows the reader to follow the reasoning behind each decision, including the decisions that remain open and the assumptions that still require validation. The honesty about what is known and what is hypothesized is itself a contribution. It stands in contrast to the common practice in pitch documents of presenting all assumptions as facts and obscuring the structural fragilities of the model.

The work also contributes a documented case of how AI tooling was integrated into the development of a complete entrepreneurship project, from market analysis to financial modeling to MVP construction. The transparent recognition of where AI assistance was used and where it was not is part of the methodological record this document leaves behind.

## 1.6 Work Structure

This document is organized into nine chapters that progressively present the project from conception through validation to execution planning.

Chapter 1, the present chapter, sets the context, defines the problem, presents the refined thesis, and lists the objectives of the work.

Chapter 2 presents the regulatory window opened in 2025, the market sizing through TAM, SAM, and SOM, customer segmentation across the three actors in the model, and the competitive analysis with direct and indirect competitors.

Chapter 3 describes the technological solution: system architecture, UML modeling (entities and use cases), functional and non-functional requirements, backend API routes, frontend pages, user journey, and the eight wireframes that compose the interface design.

Chapter 4 documents the development process: the methodology adopted (Inteli's Scrum-based framework), the evolution of the idea across Modules 1 and 2, the sprint-by-sprint breakdown, the technical decisions made during implementation, and the testing and evaluation results.

Chapter 5 presents the Business Model Canvas in summary form, the pricing strategy with 9.99% percentage-based fees and 35% commission to accounting offices, the go-to-market phases, and the hub roadmap that extends the proposition beyond the anchor product. The complete Business Plan, including detailed financial modeling and operational scripts, is provided as a separate document and referenced from this chapter.

Chapter 6 discusses the validation methodology, the interviews conducted in Module 1 that produced the central reframing of the project, the field work conducted in Module 2 with the contrast between cold outreach and personal network activation, the resulting two confirmed meetings, the key performance indicators framework, and the acknowledged gaps.

Chapter 7 presents the unit economics, the cost structure across phases, the twelve-month and thirty-six-month projections, the break-even analysis, the NPV and IRR with terminal value treatment, the sensitivity analysis, and the risk matrix with mitigations. The chapter includes the specific treatment of default risk through FIDC structuring, which responds directly to the question raised by the Sprint 4 panel.

Chapter 8 structures the path forward in three phases over twelve months with critical milestones, oriented around channel acquisition and the specific question of what success looks like at month twelve.

Chapter 9 evaluates the achievement of objectives, the limitations of the current work, and the future development paths that the platform and the business model can take.

---

\pagebreak

# 2 MARKET ANALYSIS AND BUSINESS CONTEXT

## 2.1 Market Assumptions and Hypotheses

This chapter rests on a set of explicit hypotheses about the market, the solution, and the value perceived by each actor in the model. The hypotheses are presented separately so that any reader can identify which assumption a given conclusion depends on, and so that, in a future iteration, hypotheses can be confirmed or invalidated without unraveling the rest of the document.

### 2.1.1 Problem Hypothesis

The central problem hypothesis is that formally employed Brazilian workers earning up to three minimum wages do not have access to short-term emergency credit on terms that are not punitive. The available options for this profile are limited to revolving credit card debt at approximately 451.5% per year (Brazilian Central Bank, September 2025), informal lending at 10% to 15% per month, family loans (which carry social cost rather than financial cost), or default at Serasa with utility bills, store credit, and small obligations. The salary itself, fully earned but not yet paid, sits inaccessible until the end of the cycle. The result is a structural asymmetry: the worker has the income capacity to cover the emergency but cannot access it, and is pushed toward instruments that destroy financial health over time.

A secondary problem hypothesis concerns the SME employing the worker. The SME absorbs the cost of employee financial stress through turnover, absenteeism, and lower productivity, without recognizing this cost as financial because it does not appear on a dedicated line of the income statement. SMEs would benefit from a salary advance product offered to their employees but do not actively seek such a product because they do not see the connection between the financial stress of the operational base and their own operating costs.

### 2.1.2 Solution Hypothesis

The solution hypothesis is that a payroll advance product, with deduction automated in the next payroll cycle and operated by a third party rather than by the SME itself, can solve the worker's problem at unit economics that close the model. The product is well established. Mêntore Bank operates it at scale in Brazil and DailyPay and EarnIn operate equivalent products in the United States. What does not currently exist in any commercially viable form is the distribution of this product to SMEs of 10 to 100 employees. Mêntore requires a bank switch, Xerpa and Creditas target larger companies, and the cost-to-serve in cold direct sales to small SMEs is prohibitive at the per-company economics.

A secondary solution hypothesis is that accounting offices, which already manage the payroll of approximately 5.7 million Brazilian SMEs and maintain a trusted advisory relationship with the SME owner, can function as the distribution channel that makes the product viable at this scale. The accounting office concentrates access (one office reaches dozens to hundreds of companies), already has the operational integration with payroll (it knows the salaries, the dates, the deductions), and earns the SME owner's confidence by default of being the person who handles their tax obligations.

### 2.1.3 Value Hypothesis

The value hypothesis operates on three levels, one for each actor in the model.

For the worker, the hypothesis is that a transparent, one-time fee of 9.99% on the advanced amount, equivalent to R$ 19.98 on an R$ 200 advance, is perceived as fair even though the equivalent annualized cost is high in nominal terms. The reason is that the alternative — revolving credit, informal lending, family loans, late payments at Serasa — is worse on every dimension the worker actually values: speed of access, absence of credit check, predictability of obligation, and dignity. The hypothesis assumes that the worker, when presented with a clear comparison, chooses the transparent fee over compounding interest, and that the transaction structure itself reduces the risk of misuse without requiring financial education on the user's part.

For the accounting office, the hypothesis is that a recurring revenue stream of approximately R$ 8,769 per month at full operation, paid as a 35% commission on the transaction revenue Ágio earns from the office's portfolio, is large enough relative to typical office margins to motivate active distribution, and small enough relative to Ágio's unit economics to remain viable. The recurring nature of the revenue is the key element. Brazilian accounting offices operate at thin margins on low-value compliance services and have limited paths to upsell. A new revenue stream that arrives every month without requiring additional headcount is, at the scale of a mid-sized office, a meaningful addition to the bottom line.

For the SME, the hypothesis is that the benefit can be framed as a turnover-reduction lever, not as a wellness add-on. The SME owner who hears "free benefit that reduces operational turnover" responds differently from the SME owner who hears "give your employees access to a financial app." The framing is the value, even when the underlying product is the same.

## 2.2 The 2025 Regulatory and Infrastructure Window

The window that makes Ágio viable today did not exist eighteen months ago. Three independent changes converged between late 2024 and mid-2025, each important on its own, transformative when combined.

### 2.2.1 Provisional Measure 1.292 and Law 15.179

In March 2025, Provisional Measure 1.292 was enacted with the purpose of regulating payroll-deducted credit for private-sector workers. The measure dismantled the bureaucratic barrier that had historically required a formal partnership agreement between each company and a specific bank to enable payroll-deducted credit for that company's employees. Under the previous model, a 30-employee SME had effectively no path to offer such a benefit because no bank found the contract worth negotiating individually.

In September 2025, Provisional Measure 1.292 was converted into Law 15.179. Under the new framework, any worker with a formal employment contract can contract payroll-deducted credit through CTPS Digital, a public-facing system maintained by the federal government. The employer is no longer a negotiator or partner; the employer's only obligation is to process the deduction when ordered to do so via the system. This change unlocked an addressable population of approximately 50 million CLT workers nationally, of which roughly 30 million had no realistic access to consigned credit under the old model.

The law also assigns legal priority to consigned deductions. When a worker has multiple deductions in a single payroll cycle, the consigned deduction is processed first, ahead of other debits. For Ágio, this is the legal mechanism that gives the salary advance its character of low-risk credit. The deduction is enforceable through the same legal infrastructure that enforces tax and pension obligations, and it sits at the top of the deduction stack.

### 2.2.2 Pix and the Cost of Money Movement

Pix has continued to reduce the per-transaction cost of moving money in Brazil. A wire transfer, the previous standard, cost approximately R$ 5 per transaction. Pix transactions for low-value transfers, when intermediated by BaaS providers serving fintech operations, currently cost between R$ 0.50 and R$ 1.50. For a product where the average ticket is R$ 200 and the gross revenue per transaction is approximately R$ 20, the difference between R$ 5 and R$ 1 in money-movement cost separates a viable unit economics from an unviable one. Without Pix at its current price, the model does not close at this ticket size.

### 2.2.3 Banking-as-a-Service Maturity

The third leg of the window is the maturity of banking-as-a-service providers in Brazil. By 2025, fintechs such as QI Tech, Dock, and Pier offer modular banking infrastructure — Pix transactions, KYC, fraud prevention, FIDC management, escrow accounts — at unit costs that small operations can absorb. The minimum capital required to originate microadvances has fallen from the tens of millions of reais (the order of magnitude required either for bank-grade authorization or for partnership with a large institution) to a few hundred thousand. Ágio uses the BaaS layer of QI Tech for KYC, Pix transactions, and FIDC structuring in its operational architecture. Building this infrastructure in-house would be prohibitive at the scale of this project; renting it is now feasible.

The implication of the three changes converging is not that the product becomes easy to build (it remains operationally complex) but that the entry capital and time to market have fallen far enough for a solo founder with bootstrap capital to credibly enter the space. The same window exists for any capitalized fintech that decides to enter, which is why the strategic priority for Ágio over the next eighteen months is channel acquisition before the window is widely recognized.

## 2.3 Market Sizing

Market sizing for Ágio is presented at three levels: TAM, SAM, and SOM. The assumptions for each level are made explicit. The numbers are deliberately calibrated to the SME segment of 10 to 100 employees and to the accounting-office distribution channel, rather than to the full CLT population that the regulatory framework now reaches. Sizing the full population would produce a TAM in the order of tens of billions of reais, which would be theoretically defensible but operationally meaningless for a project at this stage.

### 2.3.1 Total Addressable Market (TAM)

The Total Addressable Market is defined as the total annual revenue that could theoretically be generated if every SME of 10 to 100 employees in Brazil were served by a payroll advance product distributed through their accounting office, with the unit economics described in Chapter 7.

Brazil has approximately 6.4 million active companies, of which roughly 4.8 million have employees registered under the CLT regime according to IBGE 2023 data. The 10-to-100-employee bracket concentrates approximately 320,000 companies nationally, accounting for approximately 9 million workers. Of these, approximately 65% earn up to three minimum wages, the income range where the salary advance creates direct value.

Applying the unit economics — R$ 200 average ticket, 9.99% fee, 1.5 monthly transactions per active user, 30% activation rate — the TAM reaches approximately R$ 5.6 billion per year. This figure represents the upper bound of the opportunity and serves as a reference for the order of magnitude of the market.

### 2.3.2 Serviceable Addressable Market (SAM)

The Serviceable Addressable Market is the portion of the TAM that Ágio can reach through the accounting-office channel, given the structural characteristics of how SMEs of this size organize their payroll operations.

In Brazil, approximately 5.7 million SMEs maintain their payroll, tax obligations, and labor compliance through external accounting offices rather than through in-house finance teams. This proportion is overwhelming in the 10-to-100-employee bracket, where close to 95% of companies use external accounting offices because the cost of an internal finance employee is not justified by the operational volume. The country has approximately 80,000 active accounting offices, with the largest 5,000 concentrating roughly 60% of the SMEs served, according to data from the Brazilian Federal Accounting Council (CFC) in 2024.

If Ágio reaches the top 5,000 offices and each office maintains an average of 50 clients in the target bracket, the addressable channel covers approximately 250,000 SMEs. The SAM ranges from R$ 1.8 billion to R$ 2.5 billion per year, depending on the activation and frequency assumptions applied within the channel.

### 2.3.3 Serviceable Obtainable Market (SOM)

The Serviceable Obtainable Market is the portion of the SAM that Ágio can realistically capture in the first five years of operation, given the channel acquisition rate, the activation curve, and the absence of competitors operating through the same channel at this time.

The acquisition rate is conservatively set at one new accounting office every four to six weeks during Year 1, accelerating modestly in Years 2 and 3 as referral networks compound. At the end of Year 5, the projection contemplates approximately 80 accounting offices in active operation, serving approximately 4,000 SMEs and reaching approximately 36,000 active CLT workers. The SOM at this scale is approximately R$ 6.4 million in gross revenue annually, equivalent to R$ 4.8 million in net revenue to Ágio after the 35% commission paid to accounting offices.

The SOM figure represents a market-penetration milestone, not a scale milestone. The model becomes operationally and financially robust at this scale (break-even is reached far earlier, at approximately 10 offices), but the strategic optionality opens at this scale. A network of 80 offices distributing a financial product to 36,000 workers becomes interesting to capitalized players as an acquisition target, as a partnership vehicle, or as the foundation for the hub expansion described in Chapter 5.

## 2.4 Customer Segmentation and Persona

The Ágio business model has three distinct customer segments, each with its own pain, its own perceived value, and its own role in the operational cycle. The three segments interact in a sequential chain: Ágio sells to the accounting office, the accounting office presents the product to the SME, and the SME makes the product available to the CLT worker. The financial transaction happens between Ágio and the worker, but the commercial transaction that enables it happens between Ágio and the accounting office.

![Value Proposition Canvas](https://res.cloudinary.com/dloj4cl3v/image/upload/v1777553071/poster_Value_proposition_canvas_simple_white_yomsdd.png)

*Figure 1. Value Proposition Canvas mapping the three actors of the Ágio model. Pains, gains, and value proposition for each actor occupy a separate column, with the connections between segments highlighting where value flows from one to the next.*

### 2.4.1 The CLT Worker (End User)

The end user is the formally employed worker who experiences the cash-flow gap during the month and needs access to credit before the next payroll cycle. The demographic profile of this segment, based on IBGE data and the calibration of the SOM model, has the following characteristics:

- Age: 20 to 50 years, concentrated in the 25-to-45 bracket;
- Income: 1 to 3 minimum wages, predominantly 1.5 to 2.5 minimum wages;
- Employment status: formal contract (CLT) in operational, administrative, or service roles;
- Banking relationship: digital bank account (Nubank, Inter, Banco do Brasil app), Pix as primary payment method;
- Education: complete high school, some technical training;
- Family structure: married or in stable union, often with one or two dependents.

The pain is concrete. The salary covers the recurring obligations of the month and leaves no buffer for the unexpected. When the unexpected arrives — a medication, a school fee, a repair, a utility bill higher than expected — the worker has three options that all destroy value: revolving credit card debt, informal lending, or default at Serasa. The fourth option, asking the employer for an advance, results in refusal in the overwhelming majority of cases at SMEs of this size, for reasons documented in Chapter 6 through the Module 1 interviews.

The value Ágio offers is access. The fee of 9.99% on the advanced amount is significantly higher in nominal annualized terms than what a worker with a credit score and a banking relationship would pay, but it is dramatically lower than what this specific worker, in this specific situation, currently pays. The product is honest about the fee at the moment of the transaction: a single deduction in the next payroll cycle, no compounding, no surprises, no late-payment trap.

### 2.4.2 The Accounting Office (Channel and Partner)

The accounting office is the channel partner. Brazilian accounting offices range from individual professionals serving fewer than 20 clients to mid-sized firms with 50 to 500 client companies. The target for Ágio is the mid-sized office, which has the operational scale to make the partnership meaningful and the proximity to clients to make the distribution work.

The accounting office faces three pains that Ágio addresses. Accounting offices in Brazil operate at thin margins, with revenue largely locked into low-value compliance services and limited paths to upsell. A recurring revenue stream that does not require additional headcount is, in itself, a strategic offering. Accounting offices compete on retention and on the perceived breadth of services they can offer to their clients. A new product that the office can present (without being responsible for its operational delivery) strengthens the office's position against competing offices. Payroll-related products are within the domain of expertise of the accounting office, so the cognitive cost of incorporating Ágio into the office's standard client conversations is low.

The value Ágio offers is operational: a 35% commission on the net revenue Ágio earns from the SMEs served by the office, paid monthly, with no minimum volume requirement, and with all operational delivery (the platform, the worker interaction, the financial transaction, the regulatory compliance) handled by Ágio. At the office's level of effort to incorporate Ágio into existing client conversations, the recurring revenue at full operation is approximately R$ 8,769 per month per office, a figure meaningful at any mid-sized office's revenue scale.

### 2.4.3 The SME (Intermediary Channel)

The SME is the intermediary channel. The SME has the legal authority to authorize the salary advance product for its employees and to process the deduction, but it does not bear the credit risk and does not handle the financial transaction. The SME's role is to authorize and to communicate.

The pain Ágio addresses for the SME is turnover. Brazilian SMEs in the 10-to-100-employee bracket lose approximately 30% to 50% of their operational base annually according to SEBRAE 2023 data, and the cost of each termination — severance, replacement recruiting, productivity loss during onboarding — ranges from three to four monthly salaries for low-wage roles. Reducing even a fraction of this turnover, attributable to lower financial stress among employees, represents direct savings.

The value Ágio offers the SME is a benefit it can provide to its employees at no cost, no operational risk, and no integration burden. The integration happens between Ágio and the accounting office, not between Ágio and the SME. The SME signs an authorization document and continues normal operation; the deduction appears in the payroll report that the accounting office already produces every month.

### 2.4.4 Core Persona of the MVP

For the MVP and the panel demonstrations, the core persona is the CLT worker described in section 2.4.1, in the specific situation of having just experienced an unexpected R$ 200 to R$ 400 expense in the middle of the month, with the next salary cycle still ten to fifteen days away. The worker accesses Ágio through a link sent by the employer's HR via WhatsApp, enters their CPF, sees their available balance (40% of net salary minus advances already taken in the current cycle), enters the amount needed, confirms, and receives the Pix transfer within minutes. In the next payroll cycle, the deduction appears in the payslip, identified by line item.

This persona reflects the segment that the current version of the system serves directly and demonstrates the core hypothesis of the work: that the value of the product is the speed and simplicity of access, more than any other characteristic of the financial mechanism itself.

## 2.5 Competitive Analysis and Differentiators

The competitive analysis distinguishes between direct competitors (companies offering equivalent or adjacent salary advance products) and indirect competitors (other instruments the target worker uses today to bridge the same cash-flow gap). The two groups operate on different planes and require different competitive responses.

### 2.5.1 Direct Competitors

The direct competitive landscape in Brazil contains a handful of relevant players, each operating with a distinct go-to-market and a distinct definition of the target customer.

Mêntore Bank is the dominant operator in the segment. Founded in 2019 in Ceará by Vanderson Aquino, projecting approximately R$ 1 billion in revenue in 2025 with a reported default rate of 0.2%, Mêntore operates almost exclusively with large companies (typically 500 or more employees) and requires the worker to switch their primary banking relationship to Mêntore as a precondition for accessing the advance. The model works for Mêntore at the scale it operates: the company's first client had 8,000 employees, and the operation today focuses on enterprise contracts where the per-employee acquisition cost amortizes. The same model is functionally inaccessible for SMEs of 10 to 100 employees and unattractive to workers who do not want to switch banks.

Sólides operates a broad people-management platform for SMEs and offers salary advance as one of several modules. The differentiator of Sólides is the platform breadth, not the advance product itself. The channel is direct sales to the SME's HR or owner.

Gibb is a fintech focused on consigned credit products, operating through partnerships with banks and BaaS providers. Gibb does not distribute directly to SMEs at this scale and is, in some configurations, more of an infrastructure layer than a competitor.

Xerpa, Creditas, Flash, and Caju offer salary advance as part of broader employee benefit suites, sold directly to mid-sized and large companies through enterprise sales motions. The economics of enterprise sales do not work for SMEs of 30 employees, so this segment is structurally outside their target. Bullla, a smaller player, operates a salary advance card focused on classes C and D, but reaches its customers directly through companies rather than through accounting offices.

The international reference is the DailyPay and EarnIn pair in the United States. DailyPay charges a fee per instant transfer (up to USD 3.49) and integrates with company payroll, operating as a corporate benefit. EarnIn operates with voluntary tipping and access of up to USD 150 per day, with no employer relationship. Both operate under the Earned Wage Access (EWA) concept of accessing already-earned salary without classification as a loan, and both have been instrumental in popularizing the model at scale. Neither operates in Brazil at this time.

### 2.5.2 Indirect Competitors

The indirect competitive landscape is the most important set of comparisons for the CLT worker because it represents what the worker actually uses today.

Revolving credit card debt, at approximately 451.5% per year according to the Brazilian Central Bank in September 2025, is the most accessible and the most punitive alternative. For a worker with a credit card and a typical limit of R$ 1,000 to R$ 3,000, revolving debt is the path of least resistance for an emergency. The compounding interest within 60 to 90 days transforms a R$ 300 expense into a R$ 600 to R$ 800 obligation, often crossing the worker's monthly disposable income threshold and triggering default.

Bank overdraft (cheque especial) operates at approximately 130% to 180% per year depending on the institution, and is structurally similar to revolving credit in its destructive trajectory.

Informal lending, including agiotas and the semi-formal lending apps that target low-income borrowers without consumer protection oversight, charges 10% to 15% per month, with social and legal risks attached.

Family loans and borrowing from peers carry social cost rather than financial cost, but the social cost is real and is itself a reason workers describe in interviews for preferring to pay a transparent fee to an external operator.

Default at Serasa, by skipping a bill, is the option of last resort for workers without access to any of the above. The cost is structural and long-term: degraded credit access, rejection from rental housing applications, and limited access to formal employment in certain sectors.

The combination of these alternatives defines the value of Ágio. The 9.99% fee for a one-time transparent deduction is materially less destructive than any of the above alternatives, and the access — through a link with CPF, with no installation, no credit check, no manual approval — is far simpler.

### 2.5.3 Comparative Positioning

The comparative table below summarizes the positioning of the main players against Ágio on the dimensions that matter for the 10-to-100-employee SME segment.

| Solution            | Target SME size      | Channel              | Bank switch | Effective cost to worker        |
|---------------------|----------------------|----------------------|-------------|---------------------------------|
| Ágio                | 10 to 100 employees  | Accounting offices   | No          | 9.99% one-time fee              |
| Mêntore Bank        | 500+ employees       | Direct B2B sales     | Yes         | Variable, salary-cycle-based    |
| Sólides             | 50 to 500 employees  | HR platform sale     | No          | Module of broader platform      |
| Xerpa / Creditas    | 200+ employees       | Direct B2B sales     | No          | Variable, fee + interest        |
| Flash / Caju        | 200+ employees       | Benefits platform    | No          | Module of benefits suite        |
| Revolving credit    | Universal            | Card issuer          | No          | 451.5% per year                 |
| Bank overdraft      | Universal            | Bank                 | No          | 130–180% per year               |
| Informal lending    | Universal            | Personal network     | No          | 10–15% per month                |

*Table 1. Competitive positioning across the dimensions relevant to the 10-to-100-employee SME segment.*

### 2.5.4 Competitive Advantage and the Channel as the Asset

The competitive advantage of Ágio resides in the channel rather than in the product. Any capitalized fintech can build a salary advance product in three to six months. The defensible asset is the network of accounting offices. By the time a player such as Mêntore or Creditas notices the 10-to-100-employee SME segment and decides to enter it, Ágio will have built a network of accounting offices that does not exist anywhere else, with switching costs that compound over time. The office has integrated Ágio into its standard client conversation, the offices' clients have employees actively using the product, and the operational habit is set.

The advantage is temporary by nature. It lasts as long as the window remains open, which is until a capitalized player publicly enters the segment and the conversation among SME accounting offices begins to involve choice between alternatives. The defensive depth that Ágio builds in the next eighteen months determines whether the company exists as an independent operation at the end of Year 3 or becomes an acquisition target along the way. Either outcome is acceptable. The worst outcome is to enter the window and fail to build defensive depth before it closes.

### 2.5.5 What Ágio Refuses to Be

Strategic clarity comes partly from the products the company chooses to build and partly from the products the company chooses not to build. Ágio explicitly refuses three adjacent positionings.

Ágio refuses to be a financial superapp for low-income workers. The temptation to add a digital wallet, a savings product, a payment account, and a marketplace of services exists in every fintech operating in this segment. Adding these would dilute the focus on the channel asset that is the actual basis of the business. The financial relationship with the worker is mediated by a single product and a single transaction type.

Ágio refuses to be a B2B SaaS for accounting offices. Office productivity tools (document management, client portals, automated tax filings) constitute a separate business with a separate market and separate unit economics. Ágio could in principle build them, but doing so would convert the channel partner into a customer and dilute the alignment of incentives that the current commission model creates.

Ágio refuses to be a competitor to Mêntore Bank in the large-enterprise segment. The temptation to move upmarket once the SME segment is proven will exist, but the operational requirements of serving large enterprises (custom contracts, dedicated account management, enterprise integrations) do not match the operational model of distributing through accounting offices. Ágio that grows upmarket becomes a different company, and the dilution of focus during that transition is the moment the original channel asset becomes vulnerable.

These refusals are not permanent. They are strategic for the current phase and will be revisited at Year 3, when the channel asset is consolidated, the financials are stable, and the optionality created by the asset can be exercised in a deliberate way rather than as a reaction to opportunistic adjacencies.

---


# 3 TECHNOLOGICAL SOLUTION

## 3.1 System Overview

The Ágio platform implements a salary advance product for accounting firms and the workers of their client SMEs. The system operates as a full-stack web application with three interfaces dedicated to the three actors in the model: a login screen, a desktop dashboard for the accounting office, and a mobile-first page for the employee. The backend is a Node.js API built with Express, serving data from a SQLite database, and the frontend uses plain HTML, CSS, and JavaScript with no frontend framework. The application is deployed to production on Render at `agio-2.onrender.com` and can also run locally on Windows or Unix environments.

The system runs with fictional data for demonstration purposes. There is no real financial integration: Pix transactions are simulated, KYC is bypassed, and no payments are processed against actual bank accounts. The MVP is intended to support panel evaluation and operational validation of the full cycle, from monthly payroll upload through advance request to deduction report generation. Production deployment with real money movement requires the migration steps documented in section 4.6.

## 3.2 Architectural Style

The system follows a cloud-based client-server architecture with service-oriented components, designed to support a web-based user experience while keeping the backend modular and scalable. The MVP focuses on the three core flows (office onboarding, employee advance request, deduction report generation), and the architecture is defined to enable future expansion without major redesign.

From a software architecture perspective, the solution can be classified along three dimensions. As a client-server architecture, the browser acts as client and the Node.js process on Render handles server-side logic and persistence. As a cloud architecture, all components run on managed cloud platforms (Render for the application, Cloudinary for static asset hosting, GitHub for source mirroring), providing availability and scalability with reduced infrastructure management overhead. As a service-oriented and modular architecture, system capabilities are distributed across specialized components: web server, database, authentication, business logic, and external services (when integrated). Each component has a clear responsibility and interacts through APIs.

The MVP is not implemented as a microservices architecture. The complexity of the project does not justify the operational overhead of running multiple deployable services, and the deliberately lean stack favors a single Node.js process with internal modular separation. The modular design supports gradual evolution toward finer-grained services if scaling or complexity requires it later.

## 3.3 Technology Stack

The stack was selected to minimize operational overhead while delivering a functional end-to-end cycle suitable for panel demonstration. Each choice was made consciously against the alternative and is justified in section 4.4.

| Layer       | Technology                                     | Version  |
|-------------|------------------------------------------------|----------|
| Runtime     | Node.js                                        | 20.11.1  |
| Web server  | Express                                        | 4.x      |
| Database    | SQLite via `better-sqlite3`                    | 9.x      |
| Frontend    | HTML5 + CSS3 + Vanilla JavaScript              | —        |
| Fonts (CDN) | Bricolage Grotesque + DM Sans (Google Fonts)   | —        |
| Hosting     | Render (free tier)                             | —        |
| Repository  | git.inteli.edu.br/lucas.galvao/agio            | —        |
| Mirror      | github.com/LucasG99/agio                       | —        |
| Production  | agio-2.onrender.com                            | —        |

*Table 2. Technology stack adopted for the MVP.*

The decision to use SQLite with `better-sqlite3` instead of PostgreSQL or MongoDB was deliberate for the MVP phase: single-file database, zero configuration, synchronous performance sufficient for the projected operational volume during the first twelve months. Migration to PostgreSQL is planned for the expansion phase, once transaction volume justifies the additional infrastructure complexity and the deduction-on-redeploy behavior of the Render free tier becomes unacceptable.

Node.js was pinned at version 20.11.1 because `better-sqlite3` v9 does not compile cleanly on Node 22+ due to ABI incompatibility. The pin appears in three places: the `engines` field in `package.json`, the `.node-version` file at the project root, and the `NODE_VERSION` environment variable on Render. Node 20.11.1 is under LTS support until 2026 and is the defensive choice for the MVP horizon.

## 3.4 Database Modeling

The data model contains five entities organized in a hierarchical ownership chain that starts at the accounting office and descends to the individual advance transaction. Every entity below `escritorio` is owned, directly or indirectly, by an accounting office, which mirrors the business reality: the office is the channel partner, and its clients (the SMEs) and their employees inherit from that relationship.

![Entity-Relationship Diagram](https://res.cloudinary.com/dloj4cl3v/image/upload/v1778868096/diagrama-entidades_o5fd42.jpg)

*Figure 2. Entity-Relationship Diagram of the Ágio data model. Five entities are organized in a top-down ownership chain: `escritorio` → `empresa` → `funcionario`; `empresa` → `ciclo`; and `funcionario` + `ciclo` → `antecipacao`.*

The five entities are:

**escritorio** — the root entity. Every login in the system belongs to an accounting office. Fields: `id`, `nome`, `email`, `senha_hash`, `telefone`, `data_criacao`.

**empresa** — the SMEs whose payroll is managed by the office. Fields: `id`, `escritorio_id` (FK), `razao_social`, `nome_fantasia`, `cnpj`, `data_criacao`.

**funcionario** — the CLT workers of a given SME, identified by CPF. Fields: `id`, `empresa_id` (FK), `nome`, `cpf` (unique per company), `salario`, `data_admissao`, `ativo`.

**ciclo** — the monthly payroll cycle. Each upload of a payroll CSV creates a new cycle for the corresponding SME and month. Fields: `id`, `empresa_id` (FK), `mes`, `ano`, `data_upload`, `total_funcionarios`.

**antecipacao** — the individual advance request. Fields: `id`, `funcionario_id` (FK), `ciclo_id` (FK), `valor`, `taxa`, `status`, `data_solicitacao`, `data_desconto`.

The `antecipacao.status` field accepts three values: `aprovada` (the advance is created immediately upon request, with no manual approval flow), `descontada` (set when the office generates the deduction report at the end of the cycle), and `cancelada` (set if the office needs to reverse the operation before the cycle closes). The model deliberately omits a `pendente` state to simplify the demo flow; the moment the employee submits the request, the system writes `aprovada` and triggers the simulated Pix.

The `db.js` file handles schema creation (`CREATE TABLE IF NOT EXISTS`) and the automatic seed process that runs when the database is empty. The seed creates one test office, three SMEs, and eighteen employees distributed across them. Any freshly deployed instance contains demonstration data immediately after first startup, which simplifies the panel demonstration flow.

## 3.5 Use Case Modeling

The system supports eight primary use cases, each tied to one of the two principal actors (the accounting office user and the CLT worker). The use cases are presented below at three levels of detail: the complete list, the four critical cases described in flow form, and the four supporting cases summarized in two lines each.

![Use Case Diagram](https://res.cloudinary.com/dloj4cl3v/image/upload/v1778868198/diagrama-casos-de-uso_bwt879.jpg)

*Figure 3. Use Case Diagram of the Ágio MVP. The accounting office actor interacts with five use cases (UC01, UC02, UC03, UC04, UC07), and the CLT worker actor interacts with three use cases (UC05, UC06, UC08).*

The complete list of use cases is summarized below.

| UC   | Name                          | Actor              |
|------|-------------------------------|--------------------|
| UC01 | Office login                  | Accounting office  |
| UC02 | Register SME                  | Accounting office  |
| UC03 | Upload monthly payroll        | Accounting office  |
| UC04 | List employees                | Accounting office  |
| UC05 | Employee access via link      | CLT worker         |
| UC06 | Request salary advance        | CLT worker         |
| UC07 | Generate deduction report     | Accounting office  |
| UC08 | View advance history          | CLT worker         |

*Table 3. Use cases supported by the Ágio MVP.*

The four critical use cases (UC01, UC03, UC06, UC07) are described in detail below. They constitute the operational backbone of the system: without any one of them, the cycle does not close.

### UC01 — Office Login

The accounting office accesses the system through the login screen. The office user enters email and password. The backend validates the credentials against the `escritorio` table and, on success, returns the `escritorio_id`, which the frontend stores in `sessionStorage`. All subsequent API calls include this identifier as a header. On failure, the system returns an error message and no session is created. The flow has no second factor and no password recovery in the MVP.

### UC03 — Upload Monthly Payroll

The office user, having authenticated and selected an SME from the dashboard, opens the upload modal and selects a CSV file containing the payroll for the current month. The backend reads the first line of the file to detect the delimiter (comma or semicolon) and parses the rows. Each row is mapped to a `funcionario` record by CPF. New CPFs are inserted as new employees; existing CPFs have their salary and active status updated. A `ciclo` record is created for the month and year, with the count of employees included. On success, the system confirms the upload and updates the dashboard. On failure (malformed CSV, mismatched columns, encoding errors), the system rolls back the transaction and returns a descriptive error.

### UC06 — Request Salary Advance

The CLT worker accesses the employee page through a URL that contains the SME identifier and the worker's CPF as query parameters. The backend retrieves the worker's record, computes the available balance (40% of net salary, reduced for tenure under 90 days, minus advances already taken in the current cycle), and renders the page with the balance and the worker's history. The worker enters the desired amount, confirms, and submits. The backend validates the amount against the available balance, creates the `antecipacao` record with status `aprovada`, simulates the Pix transfer (no real money moves in the MVP), and returns a confirmation. The new advance appears in the worker's history.

### UC07 — Generate Deduction Report

At the end of the cycle, the office user, having selected the SME, clicks the report generation button. The backend queries all `antecipacao` records linked to the current `ciclo` with status `aprovada`, marks each one as `descontada`, and generates a CSV with one row per worker who took advances during the cycle. Each row includes the worker's name, CPF, the total advanced amount, the fee, and the total to deduct from the next payslip. The CSV is delivered to the browser as a download.

The four supporting use cases — UC02 (register SME), UC04 (list employees), UC05 (employee access via link), UC08 (view advance history) — are standard CRUD or read operations that complete the system but do not require detailed specification. UC02 creates an `empresa` record linked to the office. UC04 lists the employees of an SME and shows current advance volumes. UC05 is the entry point of UC06: the link plus CPF together constitute the worker's authentication. UC08 lists the worker's advances across cycles.

## 3.6 Functional Requirements

The system implements nine functional requirements, each tied to one or more of the use cases above.

- **FR1**: The system shall allow the accounting office to log in with email and password.
- **FR2**: The system shall allow the office to register new SMEs (companies) under its portfolio.
- **FR3**: The system shall allow the office to upload monthly payroll data via CSV.
- **FR4**: The system shall list employees of a selected SME, with current advance volumes.
- **FR5**: The system shall allow CLT workers to access their employee page via a URL with CPF authentication.
- **FR6**: The system shall allow workers to request advances within their available balance.
- **FR7**: The system shall calculate the available balance as 40% of net salary, reduced for tenure under 90 days, minus advances taken in the current cycle.
- **FR8**: The system shall generate a deduction report (CSV) at the end of the cycle for each SME.
- **FR9**: The system shall persist all entities (offices, SMEs, employees, cycles, advances) in a structured database for retrieval and reporting.

## 3.7 Non-Functional Requirements

The system meets eight non-functional requirements relevant to the MVP scope.

- **NFR1 — Usability**: The system prioritizes minimal cognitive load. The employee flow happens in three clicks (enter amount, confirm, see receipt). The office flow uses standard dashboard patterns with no specialized training required.
- **NFR2 — Availability**: The system targets continuous availability subject to Render's free-tier characteristics. Scheduled redeploys reset the SQLite database, which is an accepted limitation of the MVP scope.
- **NFR3 — Performance**: The system processes user requests and returns responses within acceptable time frames (sub-second for the typical interaction) under the projected MVP load.
- **NFR4 — Scalability**: The architecture supports growth in users and transactions through migration paths documented in section 4.6, without requiring redesign.
- **NFR5 — Security**: The system uses HTTPS for all communication, hashes passwords with bcrypt, and isolates business logic from direct database access through API endpoints. The MVP authentication (sessionStorage) is acknowledged as not production-grade.
- **NFR6 — Privacy and LGPD**: The system implements basic LGPD compliance: explicit consent flow at the employee's first access, encrypted storage of personal data, and a documented deletion-on-request path (not yet implemented as a self-service feature).
- **NFR7 — Maintainability**: The codebase follows a modular structure with clear separation between routes, database access, and frontend assets. The decision to use vanilla JavaScript reduces dependency surface area.
- **NFR8 — Reliability**: The system ensures data consistency through SQLite transactions for multi-step operations (advance creation, report generation) and avoids loss of advance records during normal processing.

## 3.8 Backend API Routes

The API follows a simple REST pattern without URL versioning, returning JSON responses. Nine endpoints constitute the complete interface between frontend and backend.

| Method | Route                                | Description                                           |
|--------|--------------------------------------|-------------------------------------------------------|
| POST   | `/api/login`                         | Office authentication, returns `escritorio_id`        |
| GET    | `/api/empresas`                      | Lists SMEs of the authenticated office                |
| POST   | `/api/empresas`                      | Creates a new SME                                     |
| GET    | `/api/empresas/:id/funcionarios`     | Lists employees of an SME                             |
| POST   | `/api/empresas/:id/ciclos`           | Uploads monthly payroll CSV                           |
| GET    | `/api/funcionarios/:empresa_id/:cpf` | Retrieves an employee by CPF                          |
| POST   | `/api/antecipacoes`                  | Creates an advance request                            |
| GET    | `/api/funcionarios/:id/antecipacoes` | Lists an employee's advance history                   |
| GET    | `/api/empresas/:id/relatorio`        | Generates the deduction CSV for the SME's cycle       |

*Table 4. Backend API routes implemented in the MVP.*

Authentication is simplified for demonstration purposes. The office's identifier is stored in the browser's `sessionStorage` after login and included as a header in subsequent requests. There is no JWT, secure cookie, or refresh token. For production deployment, this layer is replaced with proper authentication (JWT plus httpOnly cookies, or a BaaS solution such as Auth0 or Clerk), as documented in section 4.6.

## 3.9 Frontend Pages

The application has three pages, each with a clearly scoped responsibility tied to one of the three actors.

**`index.html` — Login.** The entry screen presents a dark radial gradient background and a single form with email and password fields. The seeded test credentials are `contato@escritorio.com.br` and `senha123`. On successful authentication, the user is redirected to `painel.html`.

**`painel.html` — Office Dashboard (desktop).** The dashboard presents a fixed left sidebar with inline SVG icons in a Lucide-style aesthetic. The main area displays SME cards with colored avatars (a deterministic color generated through a name hash, with no external library dependency). Clicking an SME opens a detail view containing the employee table, the payroll cycle status, the CSV upload control, and the advance tables. The upload modal uses backdrop blur. Stat cards at the top of the dashboard display aggregate metrics: active employees, monthly advances, total transaction volume, and accumulated commission.

The CSV upload accepts two delimiters: comma (international standard) or semicolon (Brazilian Excel default under pt-BR regional settings). Detection happens automatically by inspecting the first line of the file. This avoids the friction of asking accounting offices to change Excel settings before exporting.

**`funcionario.html` — Employee Page (mobile-first).** The employee page uses a vertical layout optimized for mobile, with a hero gradient and a curved white overlay at the bottom. It displays the available balance (up to 40% of net salary minus advances in the current cycle), a visual progress bar for the balance-to-limit ratio, and the transaction history grouped by payroll cycle. Access happens through URL parameters: `?empresa_id=1&cpf=999.888.777-66`. The link plus CPF together constitute authentication, eliminating the need for employee registration, password creation, or app installation. The advance flow happens in three taps: enter amount, confirm, receive Pix.

The design uses two token systems via CSS variables: `brand-*` (a green color scale anchored at the primary brand color) and `neutral-*` (a gray scale for backgrounds, borders, and text). Five shadow levels (`shadow-xs` through `shadow-xl`), five border radius values, and two typography families (Bricolage Grotesque for headings, DM Sans for body text) complete the system. The token-based approach keeps the codebase small and the visual language consistent across the three pages.

## 3.10 User Journey

The end-to-end journey of the system involves three actors and unfolds across three phases.

**Setup phase.** The accounting office logs in, registers an SME, and uploads the SME's payroll for the current month. The system creates the records for the SME, its employees, and the monthly cycle. The office shares the employee access link with the SME's HR contact, typically via WhatsApp or email.

**Operation phase.** The CLT worker receives the link from the employer, opens it, and enters their CPF. The system displays the employee dashboard with the available balance and the history. When the worker needs an advance, they enter the amount, confirm, and receive the Pix (simulated in the MVP) within seconds. The advance is recorded against the current cycle.

**Closing phase.** At the end of the payroll cycle, the office user opens the dashboard, navigates to the SME, and clicks the report generation button. The system marks all advances of the cycle as `descontada` and downloads a CSV with the deductions to apply in the next payroll. The office incorporates the deductions into the payroll posting, and the cycle closes.

## 3.11 Wireframes

The interface design is documented in eight wireframes that cover the full operational cycle across the three actors. The wireframes were developed during Sprint 2 of Module 2 and informed the implementation of the production interfaces.

![Wireframe 1 — Login](https://res.cloudinary.com/dloj4cl3v/image/upload/v1778871026/wireframe-tela-1-login_ekvixi.jpg)

*Figure 4. Wireframe 1 — Login screen. Single-form entry point for the accounting office user.*

![Wireframe 2 — Companies](https://res.cloudinary.com/dloj4cl3v/image/upload/v1778871043/wireframe-tela-2-empresas_pspdtd.jpg)

*Figure 5. Wireframe 2 — Companies list. SME cards with summary metrics for the accounting office user.*

![Wireframe 3 — Employees](https://res.cloudinary.com/dloj4cl3v/image/upload/v1778871050/wireframe-tela-3-funcionarios_jm75sn.jpg)

*Figure 6. Wireframe 3 — Employees list. Per-SME view showing employees with their current advance status.*

![Wireframe 4 — Detail](https://res.cloudinary.com/dloj4cl3v/image/upload/v1778871056/wireframe-tela-4-detalhe_tz7fqd.jpg)

*Figure 7. Wireframe 4 — SME detail view. Aggregated information per company, with upload control and cycle status.*

![Wireframe 5 — CPF Access](https://res.cloudinary.com/dloj4cl3v/image/upload/v1778871170/wireframe-tela-5-acesso-cpf_xhybgt.jpg)

*Figure 8. Wireframe 5 — CPF access. Entry point for the CLT worker, accessed through a link.*

![Wireframe 6 — Dashboard](https://res.cloudinary.com/dloj4cl3v/image/upload/v1778871162/wireframe-tela-6-dashboard_wduo3p.jpg)

*Figure 9. Wireframe 6 — Employee dashboard. Mobile-first view showing available balance and transaction history.*

![Wireframe 7 — Request](https://res.cloudinary.com/dloj4cl3v/image/upload/v1778871156/wireframe-tela-7-solicitar_rnmb1n.jpg)

*Figure 10. Wireframe 7 — Advance request form. Amount entry and confirmation.*

![Wireframe 8 — History](https://res.cloudinary.com/dloj4cl3v/image/upload/v1778871150/wireframe-tela-8-historico_s4yjmp.jpg)

*Figure 11. Wireframe 8 — Transaction history. Worker's complete advance history grouped by payroll cycle.*

## 3.12 Security, Privacy, and LGPD Compliance

The system handles personal financial information and therefore treats privacy and compliance as core requirements, even at the MVP stage where production-grade implementation is not yet in place.

The MVP includes the following measures:

- All communication uses HTTPS, enforced by Render's default configuration;
- User passwords are hashed with bcrypt before storage;
- Employee personal data (name, CPF, salary) is stored in the SQLite database with no external sharing;
- Access to the employee page requires both the SME identifier and the worker's CPF, which together constitute a minimal authentication barrier appropriate for the MVP context;
- Database access is restricted to the application process; no public-facing database connection exists.

The MVP does not yet implement the following features required for production deployment:

- Self-service data deletion in compliance with the LGPD's right to be forgotten;
- Formal consent flow at the employee's first access (the MVP assumes consent through the employer's authorization);
- Audit logs for sensitive operations;
- Row-level security policies;
- Rate limiting on authentication and advance request endpoints;
- Two-factor authentication for office users.

These gaps are documented in section 4.6 and are part of the migration path to production-grade operation.

---


# 4 DEVELOPMENT AND IMPLEMENTATION

## 4.1 Idea Evolution Across Modules

This work spans two academic modules of ten weeks each. Module 1 was a discovery and validation phase, organized around four sprints. Module 2 was a construction and refinement phase, organized around five sprints, the last of which is the consolidation work presented in this document. The Ágio project of Sprint 5 of Module 2 is not the same project that started Sprint 1 of Module 1. The evolution happened in three identifiable inflection points, each of which is documented below.

### 4.1.1 The Original Premise (Sprint 1, Module 1)

The project began as a dual offering: a payroll management software for SMEs combined with a financial product (salary advance and consigned credit) for the workers of those SMEs. The logic was straightforward at the time: monetize a SaaS subscription on the software side, and capture credit revenue on the financial side, both serving the same customer base. The target customer was the HR or DP manager of SMEs with 20 to 100 employees, in sectors with operational base labor (retail, logistics, services). The average ticket assumed was R$ 500 and the take rate on advances was 2.5%. Projected revenue for the first 24 months reached approximately R$ 90,000 per month, split roughly evenly between software subscriptions and credit revenue.

The original thesis carried two embedded assumptions. The first was that SME managers were dissatisfied with their existing payroll process and willing to migrate to a better solution. The second was that the SME owner would view the financial product as a benefit to offer employees without taking on operational complexity. Both assumptions failed validation in Sprint 2.

### 4.1.2 The Reframing Forced by the Interviews (Sprint 2, Module 1)

The plan for Sprint 2 was to conduct 15 to 25 interviews across two profiles: SME managers and CLT workers earning up to three minimum wages. The execution fell short of the plan. I conducted three interviews, all with managers and owners, none with CLT workers. The shortfall was a real limitation of an individual project with restricted access to business networks. Yet the three conversations produced something that was not in the plan: rather than confirming the original hypothesis, they refuted it, and the refutation pointed clearly to where the pain actually lives.

The three interviewees were a senior analyst at a franchisor handling acquisitions, a co-founder of a 50-person infrastructure technology company, and the owner of a small-to-mid-sized steel parts manufacturer. None of the three demonstrated meaningful pain in payroll management. In every case, an external accounting office handled the process, and the relationship with that office was deeper than a simple software dependency. The accounting office provided tax consulting, labor compliance, and fiscal advisory in a single bundle, built over years of trust. Replacing the office's software meant unwinding a relationship that resolved a problem the manager did not perceive as a problem.

The owner of the steel parts manufacturer made the most consequential observation. He confirmed that his employees had asked for salary advances and that he had refused. His justification was honest: lending money to employees was not his business and he did not want to take on the risk. He did not refuse out of indifference; he refused because the SME owner is not equipped to manage credit risk. When I asked what those employees did after hearing no, he did not know. The episode closed for him at the moment of refusal. For the employee, the episode started there.

The reframing happened during the writeup. The managers did not feel pain in payroll because the pain was not theirs. The pain belonged to the employee, who had no place to turn. I was interviewing the wrong people.

A personal parallel helped me see this with clarity. During the two years I studied full-time at Inteli, I could not work. I received only a small stipend from the school, which often did not cover all my expenses for the month. The credit card statement would sometimes close before my next stipend payment, and I needed to ask my parents to cover the gap. I had that safety net. My parents could help. But the experience gave me a concrete sense of what it means to depend on someone else to close the month, and of how that dependency weighs, even when it works. For a worker earning one or two minimum wages, blacklisted at Serasa and without a relative with the slack to help, the same gap at the end of the month has no easy resolution. It has an expensive resolution, or no resolution at all.

The reframing repositioned the project. Ágio was no longer a payroll management tool for dissatisfied SME owners. It became a credit access product for CLT workers at the base of the income pyramid, with the SME serving as the distribution channel and the payroll deduction serving as the collateral that makes the credit risk structurally low.

### 4.1.3 The Channel Structuring (Sprint 3, Module 1)

Sprint 3 took the reframing of Sprint 2 and formalized it as a four-layer distribution model: Ágio → accounting office → SME → CLT worker. The accounting office, which Sprint 1 had treated as a potential referral source, emerged as the strategic channel asset of the entire model.

The reasoning behind the channel choice rested on three observations from the Sprint 2 interviews. The accounting office already held the trust of the SME owner. The office already processed the payroll and had the salary data needed to operate the product. A mid-sized office served between 50 and 200 SMEs, which meant that signing one office gave access to an entire portfolio of companies rather than to a single client. The accounting office concentrated access in a way that no direct sales motion could match at the SME scale.

The software-of-payroll component was eliminated from the thesis. Selling software to managers who did not have the pain was a losing proposition. The remaining product was a single financial offering: salary advance with automatic deduction in the next payroll cycle. The average ticket dropped from R$ 500 to a range of R$ 150 to R$ 300, reflecting the lower-value, higher-frequency emergency credit need that the target worker actually had.

Sprint 3 also made a deliberate choice about the MVP scope. The most visible product (the employee app) was deprioritized in favor of the less visible but more critical infrastructure (the accounting office dashboard). The reasoning: without the dashboard, the cycle does not close, and the employee app reduces to a beautiful interface connected to nothing. The MVP would build the dashboard first, paired with a minimal employee page accessed by link and CPF, sufficient to demonstrate the full cycle.

### 4.1.4 Business Model Formalization (Sprint 4, Module 1)

Sprint 4 of Module 1 took the structured channel model and converted it into a full Business Model Canvas with pricing, cost structure, competitive analysis, and break-even projection. The pricing model in this version of the project was a hybrid: R$ 8 fixed per advance, or 3.5% of the advance amount, whichever was higher. The commission paid to the accounting office was 20% of the gross revenue generated from the office's portfolio. The break-even projection placed the operation at approximately 4,800 active users, equivalent to roughly six accounting offices in full operation. The cost structure at the MVP phase ranged from R$ 50,000 to R$ 65,000 per month, anchored by a small team for development, infrastructure, and commercial outreach.

This version of the project was internally coherent and represented the consolidated thesis at the end of Module 1. It carried, however, three weaknesses that became visible during Module 2: the hybrid pricing was operationally clean but harder to communicate than a single percentage; the 20% commission did not yet reflect the bargaining position of an accounting office that would need to actively distribute the product; and the strategic positioning, while sound, was framed in a way that did not clearly differentiate Ágio from any other entrant in the payroll-deducted credit space.

### 4.1.5 Refinements Throughout Module 2

Module 2 took the consolidated thesis from Sprint 4 of Module 1 and refined it through five sprints of construction and field validation. The refinements happened on three planes: numerical, structural, and strategic.

The numerical refinements adjusted the pricing model to a single percentage of 9.99% (replacing the hybrid R$ 8 / 3.5%), raised the commission to the accounting office from 20% to 35% (reflecting the bargaining position the office actually holds), and recalibrated the break-even projection to approximately ten accounting offices in full operation by month twelve, with the cost structure rebuilt to accommodate the FIDC capital structure documented in Chapter 7.

The structural refinements built the MVP as a functional system rather than a wireframe. The platform, the database, the three interfaces, the deployment pipeline, the API endpoints, the CSV processing — all were implemented during Sprints 2 and 3 of Module 2. The field work in Sprint 3 of Module 2 (twenty-one cold outreach attempts plus seven personal-network activations) produced two confirmed accounting office meetings and the strategic conclusion that the first ten offices would need to be acquired through referral chain rather than direct prospecting.

The strategic refinements emerged from the Sprint 4 panel presentation of Module 2. The panel raised two questions that the project had not yet answered with rigor. The first was the question of who absorbs the default risk in the operation. The answer presented in Chapter 7 of this work — a FIDC structured with senior and subordinated quotas, where the subordinated quota absorbs first loss — was developed in direct response to that panel question. The second was the question of what makes Ágio truly differentiated from any other payroll-deducted credit entrant. The answer is the four-pillar refined thesis presented in section 1.3 of this work: the network of accounting offices as the asset, the invisibility of the accounting channel to capitalized competition, the hub structure of the product portfolio over time, and the explicit positioning at the 10-to-100-employee SME segment.

The thesis at Sprint 5 of Module 2 is, in substance, the thesis the project carried since Sprint 3 of Module 1: distribute a salary advance product to workers at small SMEs through the accounting offices that already serve those SMEs. The substance has held. What changed across the two modules is the articulation, the rigor of the numbers, the existence of a functional MVP, and the strategic framing that allows the project to be discussed without confusion with adjacent fintech operations.

## 4.2 Development Methodology

The project followed Inteli's Scrum-based framework, with iterative sprints organized around clearly defined objectives and deliverables. Each module spans ten weeks and contains either four sprints (Module 1) or five sprints (Module 2). Each sprint has a defined scope, a delivery date, and a panel presentation at the end where advisors and external evaluators provide structured feedback.

The framework supports projects with high uncertainty and evolving requirements: hypotheses are tested through sprint deliverables, feedback feeds the next sprint, and the scope of later sprints depends on what the earlier sprints uncovered. The choice of Scrum is appropriate for an entrepreneurship project, where the business hypothesis is itself the most volatile element and needs continuous testing.

## 4.3 Sprint Breakdown

### 4.3.1 Module 1 — Discovery and Validation (4 Sprints)

**Sprint 1 — Problem and Opportunity Mapping.** This sprint established the initial problem statement, the stakeholder map, and the market sizing through TAM, SAM, and SOM. Six critical hypotheses were articulated as testable propositions for Sprint 2.

**Sprint 2 — Pain Validation.** Three interviews were conducted (the plan called for 15 to 25). The interviews refuted the central hypothesis that SME managers carried meaningful pain in payroll management, and reframed the project around the worker as the customer with the actual pain. This sprint produced the most significant inflection in the project's history.

**Sprint 3 — Value Proposition Structuring.** The four-layer distribution model emerged in this sprint. The accounting office was formalized as the strategic channel. The product simplified to a single financial offering (salary advance). The MVP scope was defined as the office dashboard first, followed by a minimal employee page.

**Sprint 4 — Business Model.** The complete Business Model Canvas was structured, with pricing (R$ 8 or 3.5%), cost structure, competitive analysis, and break-even projection. This sprint closed Module 1 with a coherent business model ready for construction in Module 2.

### 4.3.2 Module 2 — Construction and Refinement (5 Sprints)

**Sprint 1 — Foundation and Refinement of the Module 1 Thesis.** This sprint took the consolidated business model from Module 1 and adjusted it for the construction phase: customer segmentation refined into three personas (CLT worker, accounting office, SME), value proposition canvas built for each segment, and updated business model elements reflecting the new pricing direction.

**Sprint 2 — UML, Wireframes, and MVP Foundation.** The five core entities were modeled (escritorio, empresa, funcionario, ciclo, antecipacao), eight use cases were specified with formal flows in Given/When/Then style, eight wireframes were produced (one per screen of the application), the user journey was mapped across three phases, and the MVP backend was implemented in Node.js with SQLite. The three frontend interfaces (login, dashboard, employee page) were built and connected to the backend.

**Sprint 3 — Market Analysis, Financial Model, and Field Work.** TAM, SAM, and SOM were calculated with the methodology presented in section 2.3 of this work. The full competitive landscape was mapped against nine direct and indirect competitors. The financial model was built across five spreadsheet tabs, including unit economics, three-year projection, cost structure, sensitivity analysis, and NPV/IRR calculation. The field work consisted of twenty-one cold outreach attempts to accounting offices in São Paulo and seven activations through the personal network, producing two confirmed meetings.

**Sprint 4 — Pitch, Deployment, and Panel Presentation.** The pitch deck was refined to fifteen slides in version five, the pricing model was migrated to the current 9.99% / 35% structure, and the MVP was deployed to production on Render. The panel presentation on June 12, 2026 produced two pieces of feedback that reshaped the project: a question about default absorption (who pays in case of non-payment), which the candidate could not answer in real time, and a request to refine the thesis so that the product would be perceived as genuinely differentiated rather than as one more entrant in payroll-deducted credit.

**Sprint 5 — Consolidation and Final Document.** The current sprint, which produces this Final Course Project document, the standalone Business Plan referenced in Chapter 5, the twelve-month execution plan in Chapter 8, the risk matrix in Chapter 7 (including the response to the panel's default risk question), and the refined thesis articulated in section 1.3.

## 4.4 Technical Decisions and Rationale

The MVP's technical choices were made against alternatives and are documented here with their justification, so that future iterations can revisit them when the constraints change.

**SQLite versus PostgreSQL for the MVP.** SQLite was chosen for zero configuration, single-file portability, and sufficient performance for the projected volume in the first twelve months. PostgreSQL was deferred to the production migration step because the operational overhead of managing a separate database service was not justified at the validation stage. The cost is that SQLite resets on every Render redeploy in the free tier, which is acceptable for demonstration purposes but unacceptable for any real operation.

**Vanilla JavaScript versus React or Vue.** The frontend uses plain JavaScript with no framework. The complexity of the three interfaces does not justify the bundle size, build tooling, and learning surface area of a frontend framework. The token-based CSS system handles visual consistency without requiring a component library.

**SessionStorage authentication versus JWT.** The MVP stores the office's identifier in `sessionStorage` after login. JWT with httpOnly cookies is the production-grade alternative and is part of the migration path documented in section 4.6. The choice for the MVP prioritizes implementation simplicity at the cost of security depth, with the explicit understanding that the MVP does not handle real money.

**CSV delimiter detection for compatibility.** Brazilian Excel under pt-BR regional settings exports CSVs using semicolons. International Excel uses commas. The system inspects the first line of the uploaded file to detect the delimiter and parses accordingly. This avoids the friction of asking accounting offices to change their Excel settings before uploading.

**Render plus GitHub mirror for deployment.** Render cannot directly access Inteli's GitLab instance, so the application uses a public GitHub mirror as the deployment source. A `github` remote was added to the local repository, and pushes to that remote trigger Render's automatic redeploy. The primary repository remains on Inteli's GitLab for academic purposes.

**UTF-8 encoding for Portuguese characters.** Express's default static file middleware does not inject charset information into the `Content-Type` header of `.html` and `.css` files, which causes some browsers to interpret the content as Latin-1 and break Portuguese accents. The fix uses Express's `setHeaders` option to force the UTF-8 charset on every static response.

**Node version pinned at 20.11.1.** The `better-sqlite3` v9 library does not compile cleanly on Node 22 or later due to ABI incompatibility. Pinning happens in three places (package.json engines, .node-version file, NODE_VERSION on Render) to defend against accidental upgrades that would break the build.

## 4.5 Testing and Technical Evaluation

The testing strategy for the MVP focused on validating the end-to-end flows rather than on exhaustive low-level automated testing. Given the MVP-oriented scope and the use of managed platforms, this approach is consistent with the project's stage and time constraints.

Integration testing validated the communication between the frontend, the API, and the database across the four critical use cases (login, payroll upload, advance request, deduction report). Each flow was executed manually with the seeded test data and inspected for correctness of state transitions, data persistence, and feedback to the user.

Acceptance testing followed the Given/When/Then scenarios documented for each use case during Sprint 2 of Module 2. The scenarios cover the happy path, the most common alternative flows, and the typical exception conditions (insufficient balance, malformed CSV, invalid CPF, expired session). All scenarios passed in the final MVP build deployed for the Sprint 4 panel presentation.

The MVP does not implement automated unit or integration tests. The decision to omit automated testing was made consciously, in alignment with the scope agreed with the advisors at the start of Module 2: time was prioritized for building a functional system that demonstrates the full operational cycle, rather than for building the testing infrastructure that production deployment would require. Automated testing is part of the migration path documented in section 4.6.

## 4.6 Known Limitations

The scope of the MVP was defined at the start of Module 2 in alignment with the advisors. Given the time available in a solo final project and the goal of demonstrating the full operational cycle of a salary advance product, the priority was to build a working system rather than a robust one. The MVP supports panel demonstration and early validation of the business model. It does not support production deployment with real money movement. The limitations below are consequences of that scope decision and are documented honestly here so that the path to production-grade operation is explicit.

**Authentication.** The MVP uses `sessionStorage` to track the authenticated office. Production deployment requires JWT with httpOnly cookies or a managed authentication service.

**Database persistence on Render free tier.** SQLite runs as a single file inside the Render container's filesystem. Every redeploy resets the file and loses all data. The seed runs again on first request to restore the demonstration data. For real operation, the system must migrate to PostgreSQL (or another managed database) hosted independently of the application container.

**Pix integration is simulated.** No real money moves in the MVP. The `antecipacao` record is created and marked as approved, but no API call is made to QI Tech or any BaaS provider to execute the actual transfer. Real Pix integration requires a contracted QI Tech account and the corresponding KYC and compliance steps.

**LGPD compliance is partial.** Basic encryption and access control are in place, but the formal consent flow, the self-service deletion path, and the audit logs required for full LGPD compliance are not yet implemented.

**No automated tests.** Manual testing covers the critical flows, but there is no automated test suite. Production deployment requires unit tests for business logic, integration tests for the API, and end-to-end tests for the user flows.

**No rate limiting.** The API endpoints have no rate limiting. A malicious actor could trivially flood the login or advance request endpoints. Rate limiting via a middleware such as `express-rate-limit` is part of the production migration step.

**No structured logging.** The application uses `console.log` for debugging. Production deployment requires a structured logging library (Winston, Pino) integrated with a log aggregation service (CloudWatch, Datadog, Logtail).

**Password recovery is not implemented.** Passwords are hashed with bcrypt at creation, but there is no flow for recovering a forgotten password. Office users in the MVP rely on the seeded credentials or on manual database updates.

These limitations do not invalidate the MVP. They are scoped consequences of building a demonstration system in limited time. The migration path to production-grade operation is documented as one of the critical milestones of Phase 1 of the twelve-month execution plan in Chapter 8.

---

# 5 BUSINESS MODEL AND GO-TO-MARKET STRATEGY

This chapter presents the Ágio business model in summary form. The complete Business Plan, including the detailed Business Model Canvas, the five-tab financial model, monthly Year 1 projections, sensitivity analysis with three scenarios, the full FIDC structuring, the go-to-market playbook with sales scripts and materials, the customer acquisition cost analysis, and the team hiring plan, is provided as a standalone document and is the natural complement to this chapter.

## 5.1 Business Model in One Sentence

Ágio operates as a distribution channel for a salary advance product, where the channel itself (the network of accounting offices) is the defensible asset of the company and the financial product is the anchor that monetizes the channel.

## 5.2 Business Model Canvas Summary

The Business Model Canvas of Ágio is structured around nine standard blocks. The summary below presents one paragraph per block, capturing the strategic choice in each area. The detailed canvas with operational depth lives in the standalone Business Plan.

**Key Partners.** QI Tech provides the banking-as-a-service infrastructure (KYC, Pix, FIDC management). Accounting offices serve as the distribution channel and operate as commercial partners under a commission model. SMEs participate as authorizers of the benefit and processors of the payroll deduction. Future partners include FIDC investors (senior quota holders) and ERP integration partners for accounting offices (Thomson Reuters Domínio, Senior, Totvs).

**Key Activities.** The activities cluster into three groups. Channel acquisition: identifying, approaching, integrating, and retaining accounting offices. Operational delivery: processing payroll uploads, calculating advance limits, executing transfers, generating deduction reports, monitoring default. Product development: maintaining the platform, evolving the system toward production-grade infrastructure, and incrementally expanding the product surface as defined in the hub roadmap.

**Key Resources.** Three resources sustain the operation. The platform itself (codebase, deployment, data model). The capital that funds advances before deductions arrive (initially bootstrap, later structured through the FIDC documented in Chapter 7). The relationships with accounting offices, which compound over time and become the core defensible asset of the company.

**Value Propositions.** One product, three perceived values, each calibrated to one of the three actors as documented in section 2.4 of this work. To the CLT worker, access to emergency credit on transparent terms. To the accounting office, recurring revenue without operational load. To the SME, a turnover-reduction lever at zero cost.

**Customer Relationships.** With the accounting office, an active commercial relationship: regular communication, dashboard with revenue visibility, support for client conversations. With the SME, a one-time onboarding followed by minimal ongoing contact. With the CLT worker, an automated self-service product with no human interaction in the normal flow.

**Channels.** The accounting office serves as the primary distribution channel for the financial product. The platform serves as the delivery channel: the office's dashboard for the operational interface, the employee page for the worker's interaction. Future channels for the hub expansion (payroll services, insurance products) reuse the accounting office relationship rather than build new commercial structures.

**Customer Segments.** Three segments, detailed in section 2.4. The CLT worker at the base of the income pyramid in SMEs of 10 to 100 employees in operational-labor sectors. The mid-sized accounting office serving 50 to 500 SMEs. The SME owner in retail, logistics, manufacturing, and service sectors with high concentration of base-level labor.

**Cost Structure.** Fixed costs cluster around platform infrastructure (Render, QI Tech BaaS, database), founder compensation, and limited operational support. Variable costs cluster around per-transaction costs (Pix transfer, KYC verification) and the 35% commission paid to the accounting office on transaction revenue. The complete cost structure across the three operational phases is documented in section 7.2 of this work.

**Revenue Streams.** Single primary stream in Year 1: the 9.99% fee on each advance, of which 35% is paid to the accounting office as commission and 65% is retained by Ágio. Secondary streams enter the model in Years 2 and 3 as the hub expansion described in section 5.5 unfolds.

## 5.3 Pricing Strategy

The pricing model is a single percentage fee of 9.99% applied to the advance amount. The choice of a percentage-only structure replaces the hybrid R$ 8-or-3.5% model used in Module 1. A pure percentage is operationally cleaner, easier to communicate to the worker, and scales naturally with the ticket size.

The unit economics at the assumed parameters are summarized in the table below.

| Item                                    | Value         |
|-----------------------------------------|---------------|
| Average ticket                          | R$ 200.00     |
| Gross fee (9.99%)                       | R$ 19.98      |
| Commission to accounting office (35%)   | R$ 6.99       |
| Net revenue to Ágio                     | R$ 12.99      |
| Pix + KYC + processing cost             | R$ 1.80       |
| Cost of capital (CDI proxy)             | R$ 2.16       |
| Default reserve (0.2%)                  | R$ 0.40       |
| **Contribution margin per transaction** | **R$ 8.33**   |
| Margin on net revenue                   | 37%           |
| Margin on gross revenue                 | 28%           |

*Table 5. Unit economics per transaction.*

At an active user generating 1.5 transactions per month, the contribution per user reaches R$ 19.49 per month. At an accounting office with approximately 450 active users at full operation (the steady state after the activation curve described in section 7.3 stabilizes), the office generates approximately R$ 13,487 in gross revenue per month for Ágio, R$ 8,766 in net revenue after the office's commission, and R$ 5,625 in contribution margin.

The 35% commission to the accounting office represents the upper bound tested during pricing analysis in Module 2. The bound was set against three reference points: the typical margin of Brazilian accounting offices on compliance services (10% to 15%), the threshold below which the commission becomes too small to motivate active distribution effort, and the threshold above which Ágio's unit economics cease to scale. The midpoint of these constraints sits between 25% and 35%, and the choice of the upper bound reflects the bargaining position the office holds when no comparable product exists in the market. The bound may need to be recalibrated downward as the operation matures and the commission becomes commoditized.

## 5.4 Three-Actor Value Proposition

The value proposition was articulated in detail in section 2.4 of this work, where each actor was described with demographic profile, pain map, and value Ágio delivers. The chapter does not repeat that description.

The strategic implication relevant to this chapter is that the three values must be communicated through three different channels and three different vocabularies. The CLT worker experiences the value through the product itself: speed, simplicity, transparency, dignity. The accounting office experiences the value through the dashboard and the monthly commission report: visibility, recurring income, no operational load. The SME experiences the value through a single conversation with the accountant: a benefit to offer employees, no cost, no risk, no change to the existing process. The go-to-market materials, the sales script, and the onboarding flow each have to address the right actor with the right vocabulary, and a confusion of audiences would dilute every conversation.

## 5.5 Hub Roadmap

The product surface of Ágio is structured as a hub: a single anchor product in Year 1, with deliberate expansion into adjacent products in Years 2 and beyond. The expansion logic is not the result of an opportunistic add-on roadmap. It is the result of the channel asset itself: every accounting office that operates Ágio as a salary advance distributor becomes the natural distributor for additional payroll-related financial products, and the marginal cost of adding a new product through the existing channel is far lower than the cost of building a comparable channel from scratch.

**Year 1 — Anchor.** The salary advance is the only product. The work concentrates on validating the channel, the operational flow, and the unit economics. Expansion is explicitly refused during this period because the channel asset is not yet consolidated.

**Year 2 — Payroll-Adjacent Services.** With the channel proven and operating, the platform expands to additional payroll-related services. The exact set of services depends on what the first ten accounting offices request and what the FIDC structure can accommodate. Candidates include consigned credit (the same payroll-deduction mechanism applied to longer-term credit), payroll services for SMEs that want to outsource their payroll execution to Ágio rather than to a traditional accounting office, and integration with existing ERP systems for offices that want a deeper operational tie.

**Year 3 and Beyond — Optionality.** With two years of channel operation and a network of accounting offices that distributes products at scale, Ágio can incorporate adjacent financial products that benefit from the same distribution mechanism: insurance with low premiums discounted in payroll, simplified private pensions, partner-bank consumer credit. Each expansion is a separate decision made with real demand data from the existing user base, rather than a roadmap commitment made in a pitch deck.

The strategic point is that the asset built in the first eighteen months is what enables this expansion. An attempt to expand the product surface before consolidating the channel would dilute the effort the channel itself requires, with no guarantee of operational success in any of the new products.

## 5.6 Reference to the Standalone Business Plan

The Business Plan accompanying this work is a separate document that complements this chapter with the operational depth the academic format here cannot accommodate. It includes the complete Business Model Canvas with detailed breakdown of each block, the full five-tab financial model in spreadsheet form, monthly Year 1 projections with acquisition and activation curves, sensitivity analysis across pessimistic, base, and optimistic scenarios, the detailed FIDC structuring (senior and subordinated quotas, returns, governance, investor profile), the complete go-to-market playbook with sales scripts and onboarding materials, the customer acquisition cost analysis with payback calculation, the marketing and acquisition strategy, the team structure with the hiring plan for Years 1 and 2, and the appendices with model contracts, LGPD policies, and operational procedures.

The summary in this chapter focuses on the strategic posture necessary to understand the rest of this work. The operational depth required to execute the strategy belongs in the Business Plan.

---


# 6 VALIDATION AND RESULTS

## 6.1 Validation Methodology

The validation methodology was qualitative and exploratory, appropriate for the stage of the project. Three modes of validation were conducted across the two modules: structured interviews with potential customers and stakeholders (Module 1), field work with the actual channel partners (Module 2), and a functional MVP demonstration with the supervising panel (end of Module 2). Each mode produced a different kind of evidence, and each contributed to a different layer of the project's confidence.

The interviews of Module 1 were intended to validate the problem hypothesis. The field work of Module 2 was intended to validate the channel hypothesis with the partners who would distribute the product. The MVP demonstration was intended to validate the operational feasibility of the cycle. None of these validations is sufficient on its own to declare the project validated. Taken together, they raise the confidence in the central hypotheses from speculative to plausible. The hypotheses that remain unconfirmed are documented in section 6.8.

## 6.2 Module 1 — Interviews

The plan for Sprint 2 of Module 1 was to conduct 15 to 25 interviews across two profiles: SME managers and CLT workers earning up to three minimum wages. Three interviews were conducted in practice, all with managers and owners, none with workers. The shortfall reflected a real limitation of an individual project with restricted access to business networks, and it is acknowledged here rather than minimized. The three conversations, however, produced the most consequential reframing in the project's history.

The interviews were semi-structured, conducted by video call or in person, with an average duration of forty minutes. The interviewees were selected by convenience from the personal network, an approach that limits the generalizability of the conclusions but allowed the conversations to happen at a depth that cold outreach would not have permitted at this stage.

### Interviewee 1 — Enzo Andrade (Franchisor)

Enzo Andrade is a senior analyst at a Brazilian franchisor, twenty-seven years old at the time of the interview, with high operational autonomy in his role and experience in mergers and acquisitions. The franchisor delegates payroll processing to an external accounting office that uses an ERP from Thomson Reuters Domínio. When asked whether he would consider switching to an alternative solution, his answer was that the accounting office did much more than payroll. It also provided tax consulting, labor compliance advisory, and fiscal consultation, all bundled in a relationship of trust built over years. Replacing the accounting office's software would mean undoing a complex relationship to solve a problem the manager did not perceive as a problem.

The most consequential observation in the interview emerged when the conversation shifted to the team. Enzo described turnover at the franchisor as extremely high and concentrated in the operational base positions. The causes he identified were low salaries, the absence of a clear career path, and accelerated hiring growth without a corresponding retention structure. The connection to Ágio became clear in the writeup: the workers who feed that turnover are precisely the workers earning between two and three minimum wages, the people who reach the second half of the month without money and without decent credit options. Leaving the company in that scenario is often not a career decision. It is an exit from financial pressure that has no other visible exit.

### Interviewee 2 — Giorgio Roman (MyBestUse)

Giorgio Roman is the co-founder of MyBestUse, a technology company in Ponta Grossa (PR) operating in SMS infrastructure with approximately fifty employees. The team profile is predominantly technical, with higher salaries than the operational base, and the benefit package includes meal vouchers, transportation, and health insurance. Payroll is also managed by an external accounting office. Salary advance has never been raised as a need at the company.

This interview was useful for what it ruled out rather than for what it confirmed. Ágio's product is not for every company with CLT employees. It is for companies with a high concentration of operational base labor, where the typical worker earns up to three minimum wages and lacks financial reserves. A technology company with a qualified team is not the primary market. The segment definition sharpened as the interviews progressed.

### Interviewee 3 — Fernando Samogin (Steel Parts Manufacturer)

Fernando Samogin is the owner of a small-to-mid-sized steel parts manufacturer with a classic industrial profile and operational-base labor. The conversation with Fernando was the most direct about the problem Ágio seeks to solve. The company employs workers who earn up to three minimum wages. Fernando confirmed that employees had requested salary advances. He had refused.

His justification was straightforward: lending money to employees was not his business and he did not want to take on the risk. The refusal was not driven by lack of empathy. It was the position of a business owner who understood that lending to employees creates a labor and financial problem he was not equipped to manage. The pain exists, the worker needs the product, and the natural channel (the employer) refuses to provide it. The problem sits in a vacuum.

When asked what the employees did after hearing the refusal, Fernando did not know with precision. The episode closed for him at the moment of the refusal. For the worker, the episode started there.

Fernando also mentioned, in passing, that the accounting office occasionally missed deadlines. This was the only complaint about the payroll process across the three interviews — a punctual friction, not a structural pain.

### Implications for the Project

The interviews refuted the original hypothesis that SME managers carry meaningful pain in payroll management. Across three conversations spanning a franchisor, a technology company, and an industrial operation, no manager demonstrated dissatisfaction sufficient to motivate switching their existing setup. The pain is real, but it does not belong to the SME owner. It belongs to the worker, and the SME owner is the natural channel that has so far refused to deliver any solution. This reframing repositioned the entire project, as documented in detail in section 4.1.2.

## 6.3 Module 2 — Field Work

The field work conducted during Sprint 3 of Module 2 tested two channels for acquiring the first accounting offices: cold outreach via Google Maps and activation through the personal network. The contrast between the two channels produced a clear strategic conclusion.

### Cold Outreach via Google Maps

Twenty-one accounting offices in the São Paulo metropolitan area (concentrated in Faria Lima, Pinheiros, and Vila Olímpia) were contacted through publicly available channels found via Google Maps. The contact attempts used a combination of phone calls, emails, and WhatsApp messages with a brief introduction and a request for a fifteen-minute conversation.

The response rate was 9%, with two offices providing any response and the remaining nineteen producing no engagement. Among the two responses, neither converted into a confirmed meeting. The total time invested in cold outreach was approximately twelve hours over two weeks.

### Personal Network Activation

Seven personal contacts with relationships in the accounting world were activated through direct messages. The contacts had varying degrees of proximity to the project, ranging from family friends to professional acquaintances. The response rate was 57%, with four contacts replying within forty-eight hours. Of those four, two confirmed meetings with the offices they were connected to.

### Two Confirmed Meetings

The two confirmed meetings happened with:

An accounting office in Ponta Grossa (PR), a mid-sized operation with approximately 80 SMEs in its portfolio. The partner who attended the meeting showed interest in the commission model and asked detailed questions about the operational integration. The office's portfolio includes several companies in retail and manufacturing that fit the Ágio target segment.

An accounting office in the São Paulo metropolitan area, a smaller operation with approximately 30 SMEs. The conversation surfaced concerns about the operational load of integrating a new product, concerns that were partially resolved by a live demonstration of the dashboard but that remain a real obstacle for offices with smaller teams.

### Strategic Conclusion

The 6.3-to-1 efficiency ratio between personal network and cold outreach (57% vs 9% response rate) leads to a strategic conclusion that informs the twelve-month execution plan in Chapter 8: the first ten accounting offices will need to be acquired through chain referral, not through direct prospecting. Cold outreach as a channel is not viable at this stage and will not be revisited until the operation has enough referrals from existing partner offices to make warm introductions the default mode of acquisition.

## 6.4 MVP Demonstration

The MVP was demonstrated during the Sprint 4 panel presentation on June 12, 2026. The demonstration covered the full operational cycle: login as the accounting office, registration of a sample SME, upload of a payroll CSV, generation of the employee access link, simulated employee request for an advance, and generation of the deduction report at the end of the cycle.

The demonstration ran without operational failure. All flows completed as designed. The panel feedback focused on the business model rather than on the technical implementation, as documented in section 4.1.5. The MVP supported the business conversation rather than being the subject of the conversation, which is the appropriate outcome for an entrepreneurship project at this stage.

## 6.5 Key Findings

The validation work across the two modules produced four findings that inform the next phase of the project.

The pain is real and concentrated in the worker, not in the manager. The Module 1 interviews refuted the original hypothesis about managerial pain in payroll and confirmed, indirectly through Fernando's account of the refused advance requests, that the worker has no decent path to emergency credit.

The accounting office is the right channel, but cold outreach does not work. The Module 2 field work demonstrated that the channel hypothesis is viable (offices respond positively to the commission model), but that the path to the office must come through trust, not through prospecting.

The MVP demonstrates the cycle, but production deployment requires the migration steps documented in section 4.6. The cycle works in principle. Real money movement requires QI Tech contracting, real authentication, and the operational scaffolding that the MVP deliberately omits.

The thesis required refinement to be perceived as differentiated. The Sprint 4 panel of Module 2 made clear that the project needed sharper articulation of what makes Ágio different from any other entrant in payroll-deducted credit. The four-pillar thesis presented in section 1.3 of this work is the response to that feedback.

## 6.6 Pivoting and Persisting Decisions

The validation work produced three persisting decisions and three pivots, each documented here for transparency.

**Persisted: the channel via accounting offices.** Module 1 identified the channel, Module 2 confirmed its viability through field work, and the project has not deviated from this strategic choice. The channel remains the defensible asset and the operational backbone of the model.

**Persisted: the focus on SMEs of 10 to 100 employees.** The segment definition has held since Sprint 3 of Module 1. The Module 2 field work and the competitive analysis in Chapter 2 confirmed that no other player serves this segment well.

**Persisted: the salary advance as the anchor product.** The financial mechanism has remained the same throughout both modules. What changed was how it was priced and how it was positioned.

**Pivoted: the customer.** Module 1 began with the SME manager as the customer. Sprint 2 of Module 1 repositioned the worker as the customer with the pain and the manager as the channel. The pivot was driven by the interview data and has not been reversed.

**Pivoted: the product surface.** Module 1 began with a dual product (payroll software plus financial product). Sprint 3 of Module 1 eliminated the payroll software from the thesis. The hub roadmap in section 5.5 reintroduces an expanded product surface in Years 2 and 3, but as additions on top of a consolidated anchor rather than as a simultaneous launch.

**Pivoted: the pricing model.** The pricing evolved from a fixed-and-percentage hybrid (Sprint 4 of Module 1) to a single percentage of 9.99% (Module 2). The commission to the accounting office evolved from 20% to 35%. The break-even projection evolved from approximately 4,800 active users to approximately 4,500 users across 10 fully operational offices by month twelve.

## 6.7 Key Performance Indicators Framework

The KPI framework for the operation is organized in three groups: market metrics, financial metrics, and operational metrics. The framework is presented here at the level of definition. The targets and the early measurement results live in the standalone Business Plan, as they depend on operational data that the MVP cannot yet produce.

**Market metrics.** Number of active accounting offices, where active means at least one SME with five or more employees actively using the product. Number of CLT workers with at least one advance per month, the actual active user count. Monthly reuse rate per active user, measuring whether the product creates habit (target of 1.5 advances per active user per month, in line with the financial model assumption).

**Financial metrics.** Net revenue per active user per month, the unit-level LTV of the product. Default rate of the portfolio, with a target of 0.2% (the rate observed by Mêntore Bank with the same deduction mechanism). Gross margin per transaction, with a target consistent with the unit economics in section 5.3 of this work.

**Operational metrics.** Onboarding time for a new SME, measured from contract signing by the accounting office to the first advance executed by an employee, with a target of less than twenty-four hours. NPS of the CLT worker measured after the first or second advance, with a target above 50.

## 6.8 Acknowledged Gaps

The validation work has not closed several important gaps. The honesty about these gaps is intentional and follows from the editorial posture of this work: a project that pretends its assumptions have been validated when they have not is more fragile than a project that documents what remains uncertain.

No CLT worker has been interviewed directly. The pain has been confirmed through interviews with their employers (Fernando) and through secondary data (IBGE, CNDL, SPC Brasil), but the worker's own voice has not yet entered the project. This is the most consequential gap. It is documented in Sprint 3 of Module 1 as the priority that the next phase must address.

The 30% activation rate assumed in the financial projections is a premise, not a measurement. It derives from references to operations in companies with different profiles (notably the 68% adherence reported by Xerpa at a single corporate client). The number may be optimistic, pessimistic, or correct; only operation with real data will tell.

The QI Tech pricing schedule has not been received in full detail. The cost-per-transaction assumptions in the unit economics depend on this schedule, and a real contract may shift the margin in either direction.

The 35% commission to the accounting office is the upper bound tested in pricing analysis. Real commercial conversations may require recalibration downward. The first ten offices, in particular, may negotiate from a position of relative strength because they are the offices Ágio most needs.

Only two accounting offices have heard the proposal in formal meeting form. Two data points are insufficient to validate the channel hypothesis at scale. The validation here is qualitative rather than statistical, and the strategic conclusions drawn from the two meetings are appropriately tentative.

None of these gaps invalidates the project. They determine the priorities for the next twelve months and inform the execution plan in Chapter 8.

---


# 7 FINANCIAL VIABILITY AND RISK ANALYSIS

This chapter presents the financial analysis and risk assessment in summary form. The complete financial model with monthly Year 1 projections, full sensitivity analysis across three scenarios, detailed FIDC structuring with quota returns and governance, and the complete operational cost breakdown lives in the standalone Business Plan.

## 7.1 Unit Economics Summary

The unit economics of Ágio were detailed in section 5.3 of this work. The contribution margin per transaction is R$ 8.33, equivalent to 37% of net revenue and 28% of gross revenue. At an average user generating 1.5 transactions per month, the contribution per user reaches R$ 19.49. At a fully operational accounting office with approximately 450 active users, the office generates approximately R$ 8,766 in net revenue and R$ 5,625 in contribution margin per month for Ágio.

The unit economics are positive from the first transaction. The challenge is not whether each transaction generates margin (it does) but whether the volume of transactions reaches the level needed to cover the fixed cost structure documented in the next section.

## 7.2 Cost Structure Across Phases

The cost structure evolves across three operational phases, each calibrated to the volume the operation handles at that point.

**Phase 1 — Validation (Months 1 to 4).** Fixed costs of approximately R$ 200 per month, covering only the platform infrastructure (Render free tier, Cloudinary, the personal cost of the founder's time treated as bootstrap rather than as expense). The QI Tech relationship is being contracted but is not yet generating variable costs at this stage.

**Phase 2 — Initial Operation (Months 5 to 8).** Fixed costs rise to approximately R$ 9,500 per month, covering the migration to PostgreSQL on a managed database service, QI Tech minimum fees, basic operational support, and the marginal cost of the FIDC structuring fees. The first transactions begin to generate variable revenue, but the volume is still below the level required to cover fixed costs.

**Phase 3 — Scale (Months 9 to 12).** Fixed costs reach approximately R$ 18,500 per month, covering the full operational infrastructure (production database, QI Tech full pricing, FIDC management fees, the first operational hire beyond the founder, legal and compliance support). The operation reaches break-even within this phase, at approximately month twelve, with ten accounting offices in full operation.

## 7.3 Twelve-Month and Three-Year Projection

The financial projection for the first three years is summarized in the table below. The monthly detail for Year 1 lives in the standalone Business Plan, as does the methodology for the acquisition curve, the activation curve, and the FIDC capital flows.

| Year | Active offices | Active users | Gross revenue | Operating profit | EBITDA   |
|------|----------------|--------------|----------------|-------------------|----------|
| 1    | 4 (ramp)       | ~600         | ~R$ 291k       | -R$ 58k          | Negative |
| 2    | 10             | ~2,500       | ~R$ 1.6M       | ~R$ 280k         | Positive |
| 3    | 25             | ~7,000       | **R$ 4.4M**    | **R$ 1.3M**      | Solid    |
| 5    | 80             | ~36,000      | ~R$ 17M        | ~R$ 6.5M         | Mature   |

*Table 6. Three-year and five-year financial projection.*

Year 1 closes with negative operating profit by design. The acquisition and activation curves do not reach the level required for break-even within the first twelve months on average, but the operation crosses break-even within the year (around month twelve) and exits Year 1 with positive monthly cash generation. The cumulative profitability arrives in Year 2.

## 7.4 Break-Even Analysis

The break-even point of the operation is reached around month twelve at approximately ten accounting offices in full operation, corresponding to approximately 4,460 active CLT workers generating an average of 1.5 transactions per month. At this volume, the contribution margin covers the Phase 3 fixed cost structure of approximately R$ 18,500 per month.

The first positive monthly EBITDA arrives one to two months after the break-even point, around month fourteen to sixteen, once the activation curve stabilizes at each newly onboarded office and the working capital requirements normalize.

## 7.5 NPV, IRR, and Terminal Value

The Net Present Value of the operational cash flows alone (Years 1 through 5, no terminal value) is negative. This is the honest baseline: a five-year window with negative cumulative cash flow during the first year and positive cumulative cash flow from Year 2 onward, discounted at the cost of capital appropriate to the operation, does not yet produce a positive NPV without a terminal value assumption.

With a terminal value calculated as five times Year 3 EBITDA (the conservative posture relative to Gordon perpetuity, which would more than double the valuation), the NPV reaches approximately R$ 118,838 and the Internal Rate of Return reaches 41%. The choice of five times EBITDA as the terminal multiple is a deliberate conservatism: comparable fintech operations in early-stage exits trade at higher multiples, and a Gordon perpetuity with reasonable growth assumptions would produce a substantially higher terminal value. The five-times multiple was chosen to keep the headline number defensible under skeptical scrutiny rather than to maximize the projected return.

The implication is that the financial case for Ágio rests on the strategic optionality created by the channel asset, monetized at the terminal moment (acquisition, partnership, or continuation), rather than on the operating cash flows alone. This is consistent with the strategic posture documented in the refined thesis: the channel is the asset, the product is the anchor, and the value of the asset compounds beyond the cash flows of the anchor product.

## 7.6 Sensitivity Analysis

The sensitivity analysis tests the operation across three scenarios: pessimistic, base, and optimistic. The detailed analysis lives in the standalone Business Plan. The variables tested include the acquisition rate of new accounting offices, the activation rate within each office, the average transaction frequency per active user, the average ticket size, the commission to the office, and the cost of capital.

The variable to which the operation is most sensitive is the transaction frequency per active user. A reduction from 1.5 to 1.0 transactions per month shifts the break-even point by approximately four months and the Year 3 EBITDA by approximately 25%. The variable to which the operation is least sensitive is the average ticket size, because the per-transaction margin scales with the ticket and the fee structure adjusts proportionally.

The sensitivity analysis reinforces the strategic conclusion of section 6.8: the gaps in the validation are concentrated precisely on the variables to which the model is most sensitive (activation rate, frequency). Closing these gaps in the operational phase is the priority for the first twelve months.

## 7.7 Risk Matrix and Mitigations

The risk matrix below identifies twelve risks across six categories, scored on probability (1 to 5) and impact (1 to 5), with the product giving the priority score. The matrix is presented as the consolidated view of where the operation is most vulnerable and what specific mitigations are in place or planned.

| # | Category       | Risk                                              | P | I | Score | Mitigation                                                                                  |
|---|----------------|---------------------------------------------------|---|---|-------|---------------------------------------------------------------------------------------------|
| 1 | Credit         | Default above the assumed rate                    | 3 | 5 | 15    | FIDC with subordinated quota absorbing first loss (detailed below)                          |
| 2 | Regulatory     | Changes to Law 15.179 or Central Bank rules       | 2 | 5 | 10    | Legal advisory, active monitoring, modular contract structure                               |
| 3 | Commercial     | Slower-than-projected office acquisition          | 4 | 4 | 16    | Referral-chain strategy, conservative Year 1 targets, multi-region prospecting              |
| 4 | Commercial     | Office loses interest after signing               | 3 | 4 | 12    | Short onboarding, dashboard with revenue visibility, monthly check-in                       |
| 5 | Operational    | Pix or BaaS QI Tech failure                       | 2 | 4 | 8     | SLA contracts, documented fallback, proactive user communication                            |
| 6 | Technological  | Vulnerability in MVP exposed in production        | 3 | 4 | 12    | Migration to JWT, rate limiting, audit logs, security review before production              |
| 7 | Technological  | Data loss (SQLite or Render)                      | 4 | 4 | 16    | Mandatory migration to PostgreSQL before any real operation                                 |
| 8 | Capital        | Failure to raise R$ 100k in time                  | 3 | 5 | 15    | Bootstrap operational scope, angel relationships, reduced-scope plan B                      |
| 9 | Competitive    | Capitalized player enters the segment             | 3 | 5 | 15    | Execution speed (18 months), switching cost within the accounting office                    |
| 10| Personal       | Solo founder (bus factor)                         | 4 | 5 | 20    | Complete documentation, planned co-founder/CTO by month 6                                   |
| 11| LGPD           | Compliance failure in personal data handling      | 2 | 5 | 10    | Explicit consent, encryption at rest, LGPD audit before production                          |
| 12| Reputational   | Inappropriate use (worker spiraling into debt)    | 3 | 4 | 12    | Financial education in the flow, 40% balance limit, monthly cap per user                    |

*Table 7. Risk matrix with twelve risks across six categories.*

The three highest-priority risks (score 16 and above) are the founder being solo (score 20), commercial acquisition being slower than projected (score 16), and data loss in the current MVP infrastructure (score 16). The mitigations for these three risks are concrete and actionable within the first six to twelve months: hiring a co-founder or technical lead, scaling the referral-chain prospecting, and migrating off SQLite onto a managed database service.

### The Default Risk Question: Who Pays in Case of Non-Payment

The risk matrix lists default risk as priority 15 (probability 3, impact 5). This subsection expands the mitigation for that specific risk in detail, because the question — who absorbs the loss when a default occurs — was raised by the Sprint 4 panel of Module 2 and was not answered at the time of the presentation. The treatment here is the considered response.

The default scenarios in the operation fall into three categories.

**Termination between the advance and the payroll cycle.** A worker takes an R$ 200 advance and is terminated three days later, before the next payroll cycle closes. The severance pay does not cover the advanced amount, or the worker's net severance is insufficient after other deductions.

**Insufficient net salary at payroll close.** Absences, garnishments, other consigned deductions, or other debits consume the legal deduction limit before the Ágio deduction is processed. Although Law 15.179 grants priority to consigned deductions, edge cases can produce insufficient remaining net salary.

**Fraud at the SME or accounting office level.** The SME receives the deduction information but does not actually deduct the amount from the payroll, or the accounting office misreports the deduction status.

The mitigations operate on two layers: ex-ante measures that reduce the probability of default events, and ex-post structures that absorb the loss when default events occur.

**Ex-ante mitigation.** The advance limit is set at 40% of the net salary, well below the legal ceiling, leaving room for other obligations. Workers with less than 90 days of tenure are subject to a reduced limit, reflecting the higher risk of termination during the probationary period. The average ticket of R$ 200 limits the per-transaction exposure. Law 15.179 grants consigned deductions priority in the payroll processing stack, which structurally protects the Ágio deduction against being crowded out by other debits.

**Ex-post mitigation through the FIDC structure.** The capital that funds advances is structured through a Credit Rights Investment Fund (Fundo de Investimento em Direitos Creditórios). The FIDC is divided into senior quotas held by external investors at CDI plus 2% to 3% per year, and subordinated quotas held by Ágio and the originating accounting offices. The subordinated quotas absorb first loss in the FIDC waterfall. When a default occurs, the loss is taken against the subordinated quota up to the limit of that quota, and only after the subordinated quota is exhausted does the loss reach the senior investors.

This structure is the standard mechanism in Brazilian private consigned credit operations. Comparable operators (QI Tech in its own portfolio, Gibb in its FIDC structures, Mêntore Bank in its operation) use the same model. The 0.2% default rate observed by Mêntore Bank with the same payroll-deduction mechanism fits comfortably within a typical subordinated quota of 10% to 15% of the total fund, with substantial cushion remaining.

The subordinated quota represents Ágio's skin in the game and is the structural reason the senior investors accept the operation at CDI plus 2% to 3% rather than at the higher rates that an uncollateralized lending operation would require. The investor in the senior quota is exposed to the worker's salary as the underlying credit, mediated through the priority deduction mechanism of Law 15.179 and protected by the first-loss absorption of the subordinated quota.

The honest answer to the panel's question is therefore not "the worker pays" (which is technically true at the deduction moment but does not capture the credit risk question) and not "the SME pays" (which is false, because the SME bears no credit risk). The answer is "the subordinated quota of the FIDC absorbs the first loss, and Ágio holds the subordinated quota." Ágio carries the credit risk, but in a structured way that the FIDC mechanism allows the operation to scale beyond Ágio's own balance sheet.

## 7.8 Initial Investment and Capital Requirements

The total initial investment required to reach the break-even point at month twelve is approximately R$ 103,000. Of this, R$ 3,000 is the founder's own bootstrap contribution covering the first months of platform infrastructure. The remaining R$ 100,000 corresponds to a planned angel investment in the first six months, covering the operational scaling from validation to initial operation (the Phase 2 cost structure documented in section 7.2). The capital from the angel investment funds the migration to production infrastructure, the QI Tech relationship, the FIDC structuring fees, and the first operational hire beyond the founder.

The FIDC capital that funds the advances themselves is structured separately and does not come from the equity investment. The FIDC quotas (senior and subordinated) are raised as part of the Phase 2 work, with the subordinated quota funded partially by Ágio (using equity capital) and partially by the originating accounting offices, and the senior quota raised from external investors.

---


# 8 EXECUTION PLAN: NEXT 12 MONTHS

The execution plan for the twelve months following the conclusion of this work follows a conservative philosophy. The principle is to do a small number of things well rather than a large number of things adequately. The variable that determines success at month twelve is not the breadth of the operation but the depth of the channel asset. The plan is organized in three phases of four months each, with concrete milestones in each phase and explicit refusals about what the operation will not do during this period.

## 8.1 Strategic Principles

Three principles govern the plan.

**Channel first, product later.** Capital, attention, and time go to acquiring and retaining accounting offices rather than to expanding the product surface. The salary advance is the only product during these twelve months, and the platform changes only what is necessary to support the operation rather than to expand the feature set.

**Execution speed over breadth.** The window before capitalized players enter the segment lasts approximately eighteen months. The first twelve months of operation determine whether Ágio enters the next phase as an established channel partner network or as one more entrant in a contested market. Speed in onboarding the first ten offices matters more than perfection at any single dimension.

**Honest milestones over ambitious projections.** The plan sets targets that the operation can plausibly reach with the resources available. Ambitious projections that the operation will miss damage the credibility of the project with investors, partners, and the founder's own decision-making. The targets below are calibrated to be uncomfortable but plausible.

## 8.2 Phase 1 — Foundation (Months 1 to 4)

The objective of Phase 1 is to transition the operation from academic demonstration to technical reality. The MVP runs with fictional data on Render's free tier. Phase 1 closes with a real accounting office serving real SMEs whose real workers can take real advances.

The critical milestones for Phase 1 are:

- QI Tech contract signed (target: month 2)
- Migration from SQLite to PostgreSQL on a managed service (target: month 2)
- First pilot accounting office onboarded — either Ponta Grossa or São Paulo (target: month 3)
- First real transaction with actual money movement (target: month 3)
- Fifty active CLT workers using the product (target: month 4)

The risks specific to this phase concentrate on the operational scaffolding: the QI Tech contract is the gating dependency, the database migration is technically straightforward but requires careful data handling, and the first pilot office requires patient negotiation about commission terms and operational integration.

## 8.3 Phase 2 — Structuring (Months 5 to 8)

The objective of Phase 2 is to structure the financial operation and validate the channel hypothesis at small but real scale. The angel investment, if it is to happen, closes during this phase. The FIDC structuring begins in earnest, and the first cohort of accounting offices generates measurable data.

The critical milestones for Phase 2 are:

- FIDC structured with senior and subordinated quotas (target: month 5)
- Angel investment of R$ 100k closed (target: month 6)
- Four accounting offices in active operation (target: month 7)
- First default report with real data, validating the 0.2% assumption (target: month 8)
- Five hundred active CLT workers (target: month 8)

The risks specific to this phase concentrate on capital (the angel investment may take longer than planned, or may not close at the projected terms) and on the validation of the default assumption (real data may diverge from the Mêntore benchmark, requiring recalibration of the FIDC quota structure).

## 8.4 Phase 3 — Scale (Months 9 to 12)

The objective of Phase 3 is to reach the break-even point and to open the conversation about a seed round for the next phase of growth. Phase 3 closes with the operation cash-flow positive on a monthly basis and with the founding team in a position to evaluate the next strategic decision (continue bootstrapped, raise seed, pursue acquisition conversations).

The critical milestones for Phase 3 are:

- Ten accounting offices in active operation (target: month 11)
- Operational break-even reached (target: month 12)
- First exploratory conversations with angels and seed funds (target: month 11)
- At least 1,500 active CLT workers (target: month 12)

The risks specific to this phase concentrate on commercial acquisition (the referral chain may saturate before reaching ten offices, requiring new channel strategies) and on the timing of the seed conversation (raising too early gives away equity at low valuation; raising too late risks the operation running out of capital before reaching the break-even point).

## 8.5 What Success Looks Like at Month 12

At the end of the twelve months, a successful outcome is characterized by four observable conditions. Ten accounting offices are in active operation, distributing the product to a portfolio of SMEs in their networks. At least 1,500 CLT workers have used the product, with reuse rates approaching the 1.5-transactions-per-month assumption. The operation has reached break-even and generates positive cash flow on a monthly basis. The conversation with the seed market has started, with at least two engaged investor relationships even if no term sheet has been signed.

This outcome is plausible but not guaranteed. The operation may reach month twelve with five offices instead of ten, with break-even projected for month sixteen rather than month twelve, and with no seed conversation yet. That outcome would not be a failure. It would be a slower trajectory that requires extension of the runway and adjustment of the Phase 4 plan that lies beyond the horizon of this document.

## 8.6 Explicit Refusals

The plan refuses, deliberately, several adjacencies that will be tempting during the twelve-month window.

The plan refuses to launch a second product. The hub roadmap in section 5.5 places product expansion in Year 2 at the earliest. Any attempt to launch payroll services, insurance products, or expanded credit products during the first twelve months would dilute the channel work that the channel itself requires.

The plan refuses to target SMEs with more than 100 employees. The temptation to move upmarket exists because the per-SME revenue is higher and the per-acquisition cost amortizes. The refusal is documented in the refined thesis (section 1.3, the sweet-spot pillar) and remains binding for the twelve-month window.

The plan refuses to build a large commercial team. The operation runs with the founder plus one operational hire during Phase 3. A heavier commercial structure would consume capital that the channel acquisition does not require and would not produce proportional acceleration.

The plan refuses to raise a Series A. The seed conversation begins during Phase 3, but the actual round, if it happens, closes after month twelve. Raising a larger round before the channel asset is consolidated would set valuation expectations that the operation cannot meet at the next round.

The plan refuses to internationalize. Brazil is the entire market for the twelve-month window. Latin American expansion is a Year 3 or later question, when the model is mature and the optionality of the channel can be exercised deliberately.

These refusals are not statements of permanent strategic choice. They are statements of focus for the specific window in which channel acquisition is the binding constraint. The strategy will be re-evaluated at month twelve.

---


# 9 CONCLUSION AND FUTURE WORK

## 9.1 Achievement of Objectives

The seven specific objectives listed in section 1.4 of this work were addressed across the chapters that followed.

The problem and the gap in the Brazilian financial system were formalized in Chapters 1 and 2, with quantitative grounding in IBGE, CNDL/SPC Brasil, and Brazilian Central Bank data.

The addressable market was analyzed through TAM, SAM, and SOM in section 2.3, with the assumptions made explicit and the calibration deliberately scoped to the SME segment that the project targets.

The competitive landscape was identified and analyzed in section 2.5, distinguishing direct competitors (Mêntore Bank, Sólides, Gibb, Xerpa, Creditas, Flash, Caju, Bullla, DailyPay, EarnIn) from indirect competitors (revolving credit, overdraft, informal lending, family loans, default) and locating Ágio's position in the comparative table.

The functional MVP was designed and implemented as documented in Chapters 3 and 4, demonstrating the complete operational cycle from monthly payroll upload to deduction report generation, deployed in production on Render.

The financial model was built with unit economics in section 5.3, the three-year projection in section 7.3, the break-even analysis in section 7.4, and the NPV and IRR with terminal value in section 7.5.

The risk matrix was structured in section 7.7 with twelve risks across six categories, with mitigations specified for each risk and with the default risk question (the question raised by the Sprint 4 panel) treated in detail through the FIDC structuring.

The twelve-month execution plan was defined in Chapter 8 with three phases, critical milestones in each phase, and explicit refusals about what the operation will not do during the window.

The objective that remains partially achieved rather than fully achieved is the validation objective. The qualitative validation through interviews and field work documented in Chapter 6 raises the confidence in the central hypotheses from speculative to plausible, but does not constitute statistical validation. The acknowledged gaps in section 6.8 are the items that the next twelve months must close through real operation.

## 9.2 Limitations of the Current Work

The work carries three limitations that the reader should hold in mind when interpreting the conclusions.

The MVP runs with fictional data. The cycle has been demonstrated end-to-end, but no real worker has taken a real advance and no real default has occurred. The operational behavior of the system under real-world conditions is, at the moment, an extrapolation.

The validation does not yet reach the worker. The Module 1 interviews validated the pain at the employer's perspective (Fernando refusing the advance request) and the secondary data confirms the structural conditions, but the worker's own voice has not entered the project. The thirty percent activation rate is an assumption, not a measurement.

The financial projection rests on three numbers (transaction frequency, activation rate, ticket size) that are calibrated against external references rather than against internal measurement. The sensitivity analysis indicates that the operation is most exposed to the frequency assumption, and the validation work has not yet produced data on that specific variable.

These limitations are characteristic of an entrepreneurship project at the conclusion of the academic phase rather than at the conclusion of the validation phase. They define the priorities for the next twelve months as documented in Chapter 8.

## 9.3 Future Development Paths

The platform and the business model open several development paths beyond the twelve-month horizon of this work.

In the short term, the path is operational. The execution plan in Chapter 8 covers the first twelve months. Months thirteen through twenty-four extend the same logic: scale from ten offices to thirty, from fifteen hundred users to ten thousand, from a single product to the first hub adjacency. The pacing is determined by the operational data that the first twelve months produce.

In the medium term, the path is strategic. The hub roadmap in section 5.5 introduces payroll-adjacent services in Year 2 and insurance, simplified pension, and partner-bank consumer credit in Year 3 and beyond. Each expansion is a separate decision made with real demand data from the existing user base, rather than a roadmap commitment made today.

In the long term, the path is optional. The channel asset at five years of operation, with eighty accounting offices distributing financial products to thirty-six thousand active workers, opens three outcomes that are not mutually exclusive. The operation can continue as an independent company, raising larger rounds and expanding the product surface. The operation can become an acquisition target for a larger financial institution that values the channel asset. The operation can serve as the foundation for the founder's longer-term ambition of building an independent asset management firm, where the operational and capital-raising experience of running Ágio compounds into the next venture.

## 9.4 Final Reflection

This work documents a project that began as a payroll software with a financial product attached and concluded as a distribution operation with a financial product as its anchor. The reframing happened in three interviews during Sprint 2 of Module 1, and the consequence of that reframing organized everything that followed. The honest record of how the project changed across the two modules is itself one of the contributions of this work, alongside the substantive content of the business plan, the technical implementation, and the execution path forward.

The variable that determines whether Ágio exists as a meaningful operation at the end of Year 3 is execution speed in the channel. The product is well understood, the regulatory window is open, the unit economics close, and the strategic positioning is clear. What remains is the work of acquiring and retaining the first ten accounting offices, demonstrating the operational cycle under real conditions, and building the defensive depth that capitalized competition will not be able to replicate when it arrives. The next twelve months will tell whether the thesis presented in this work survives contact with the market.

---

\pagebreak

# REFERENCES

ANATEL. **Relatórios de telefonia móvel e penetração de smartphones no Brasil**. Brasília: Agência Nacional de Telecomunicações, 2024. Available at: <https://www.gov.br/anatel>. Accessed: June 2026.

BANCO CENTRAL DO BRASIL. **Relatório de taxas de juros do crédito rotativo**. Brasília: Banco Central do Brasil, September 2025. Available at: <https://www.bcb.gov.br>. Accessed: June 2026.

BANCO CENTRAL DO BRASIL. **Manual do crédito consignado privado: Programa Crédito do Trabalhador**. Brasília: Banco Central do Brasil, 2025. Available at: <https://www.bcb.gov.br>. Accessed: June 2026.

BRASIL. **Lei nº 15.179, de 9 de setembro de 2025**. Dispõe sobre o crédito consignado para trabalhadores da iniciativa privada. Brasília: Diário Oficial da União, 2025.

BRASIL. **Medida Provisória nº 1.292, de 12 de março de 2025**. Brasília: Diário Oficial da União, 2025.

BRAZIL JOURNAL. **Mêntore Bank: a fintech que cresce 380% emprestando para o trabalhador da base**. São Paulo: Brazil Journal, 2025. Available at: <https://braziljournal.com>. Accessed: June 2026.

CFC — CONSELHO FEDERAL DE CONTABILIDADE. **Panorama do empreendedorismo contábil no Brasil**. Brasília: CFC, 2024.

CNDL — CONFEDERAÇÃO NACIONAL DE DIRIGENTES LOJISTAS; SPC BRASIL. **Pesquisa sobre comportamento financeiro do consumidor brasileiro**. Brasília: CNDL/SPC Brasil, 2024.

CORA. **Mapa dos contadores 2023: o perfil das empresas de contabilidade no Brasil**. São Paulo: Cora, 2023.

CRESWELL, John W. **Research design: qualitative, quantitative, and mixed methods approaches**. 5. ed. Thousand Oaks: SAGE Publications, 2018.

DAILYPAY. **Earned Wage Access: corporate platform documentation**. New York: DailyPay, 2024. Available at: <https://www.dailypay.com>. Accessed: June 2026.

EARNIN. **Earned Wage Access: product documentation**. Palo Alto: EarnIn, 2024. Available at: <https://www.earnin.com>. Accessed: June 2026.

EXPRESS. **Express.js documentation**. OpenJS Foundation, 2024. Available at: <https://expressjs.com>. Accessed: June 2026.

FOWLER, Martin. **Patterns of enterprise application architecture**. Boston: Addison-Wesley, 2003.

IBGE — INSTITUTO BRASILEIRO DE GEOGRAFIA E ESTATÍSTICA. **PNAD Contínua: Pesquisa Nacional por Amostra de Domicílios Contínua — 2023**. Rio de Janeiro: IBGE, 2023.

LARMAN, Craig. **Applying UML and patterns: an introduction to object-oriented analysis and design and iterative development**. 3. ed. Upper Saddle River: Prentice Hall, 2004.

MÊNTORE BANK. **Institutional report and earned wage access methodology**. Fortaleza: Mêntore Bank, 2025.

NODE.JS FOUNDATION. **Node.js documentation v20.x**. OpenJS Foundation, 2024. Available at: <https://nodejs.org/docs/latest-v20.x/api/>. Accessed: June 2026.

OSTERWALDER, Alexander; PIGNEUR, Yves. **Business model generation: a handbook for visionaries, game changers, and challengers**. Hoboken: John Wiley & Sons, 2010.

OSTERWALDER, Alexander et al. **Value proposition design: how to create products and services customers want**. Hoboken: John Wiley & Sons, 2014.

PAYTIME. **Pricing report: cost of Pix transactions for BaaS-mediated fintech operations**. São Paulo: Paytime, March 2026.

PRESSMAN, Roger S.; MAXIM, Bruce R. **Software engineering: a practitioner's approach**. 9. ed. New York: McGraw-Hill, 2019.

QI TECH. **Banking-as-a-Service: documentation for fintech partners**. São Paulo: QI Tech, 2024. Available at: <https://www.qitech.com.br>. Accessed: June 2026.

REIS, Eric. **The lean startup: how today's entrepreneurs use continuous innovation to create radically successful businesses**. New York: Crown Business, 2011.

RENDER. **Render documentation: deployment and configuration guide**. San Francisco: Render, 2024. Available at: <https://render.com/docs>. Accessed: June 2026.

SCHWABER, Ken; SUTHERLAND, Jeff. **The Scrum Guide**. Scrum.org, 2020. Available at: <https://scrumguides.org>. Accessed: June 2026.

SEBRAE — SERVIÇO BRASILEIRO DE APOIO ÀS MICRO E PEQUENAS EMPRESAS. **Painel das pequenas e médias empresas brasileiras: rotatividade, produtividade e custos operacionais**. Brasília: SEBRAE, 2023.

SERASA EXPERIAN. **Mapa da inadimplência no Brasil: relatório anual**. São Paulo: Serasa Experian, 2024.

SQLITE. **SQLite documentation: language reference and library guide**. SQLite Consortium, 2024. Available at: <https://www.sqlite.org/docs.html>. Accessed: June 2026.

THIEL, Peter; MASTERS, Blake. **Zero to one: notes on startups, or how to build the future**. New York: Crown Business, 2014.
