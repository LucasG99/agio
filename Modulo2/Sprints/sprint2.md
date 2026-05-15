# Visão e missão

O sistema financeiro brasileiro funciona em camadas. No topo, existe crédito barato, abundante, com várias opções competindo entre si. No meio, existe crédito médio, acessível para quem tem score, garantia, comprovação. Na base, existe um vazio. Vinte milhões de trabalhadores com carteira assinada, salário descontável, vida formal, são empurrados para o mercado paralelo toda vez que o mês não fecha. Pagam 10% a 15% ao mês em financeira informal. Pegam empréstimo com cunhado. Ficam negativados por uma conta de luz de R$ 80. A vida financeira deles é organizada em torno de uma escassez que não está na renda, está no acesso.

O Ágio existe porque essa configuração não é inevitável.

## Visão

**Que o trabalhador brasileiro de baixa renda, com carteira assinada, deixe de ser tratado como invisível pelo sistema financeiro.**

Não é sobre democratizar crédito, frase gasta que perdeu sentido depois de uma década de fintechs prometendo isso. É sobre uma mudança específica e mensurável na vida concreta de quem ganha entre 1 e 3 salários mínimos no Brasil. Esse trabalhador deveria conseguir cobrir uma emergência de R$ 300 sem que isso comprometa o salário seguinte, sem que precise expor sua situação financeira ao chefe, sem que precise procurar uma agência de financeira informal no centro da cidade. Deveria conseguir pelo celular, em poucos cliques, pagando uma taxa justa que ele consegue ler antes de aceitar. Essa cena, hoje, não existe para 20 milhões de pessoas. 

O motivo para acreditar que isso é alcançável não é otimismo. É evidência. O Mêntore Bank prova que o produto funciona quando opera em empresa grande. A regulação de 2024 do Crédito do Trabalhador abriu o caminho legal. Os escritórios de contabilidade do Brasil já têm os dados, a confiança das empresas e a estrutura para distribuir. O que falta é alguém conectar essas peças no porte de empresa onde está o segmento que ninguém quer atender. Esse é o trabalho do Ágio.

## Missão

**Levar antecipação salarial transparente e descontada em folha ao trabalhador CLT de PMEs brasileiras, por meio dos escritórios de contabilidade que já atendem essas empresas.**

Cada parte da frase responde a uma fricção específica. Antecipação salarial em vez de empréstimo, porque o trabalhador está usando dinheiro que já é dele, não tomando dívida nova. Transparente, porque o crédito que existe hoje para esse perfil esconde o custo em juros que crescem mês a mês. Descontada em folha, porque é esse mecanismo que mantém a inadimplência baixa o suficiente para o modelo operar com taxa que não recria a armadilha. Distribuída via escritório de contabilidade, porque a venda direta a PMEs de 10 a 100 funcionários nunca foi economicamente viável, e é exatamente essa inviabilidade que mantém o segmento sem solução.

A missão se cumpre no nível operacional, conversa a conversa com escritório, empresa a empresa que aceita oferecer, antecipação a antecipação que acontece sem problema. A visão se cumpre no nível agregado, quando o suficiente dessas operações somadas mudar a paisagem do que está disponível para esse trabalhador. Uma alimenta a outra. Se a missão falhar, a visão não acontece. Se a visão deixar de fazer sentido, a missão perde direção.

# 8. Pricing

Pricing é onde o plano de negócios deixa de ser apenas estratégia e vira contas. Cada número que aparece a partir daqui responde a um problema concreto: quanto o Ágio vai cobrar do trabalhador, quanto vai repassar ao escritório de contabilidade, quanto sobra para cobrir custos e gerar margem. As três variáveis se influenciam, e mexer em uma desloca as outras.

A estrutura deste capítulo segue uma sequência simples. Primeiro o que o mercado faz hoje, com fontes públicas. Depois os custos diretos da operação do Ágio, com os números abertos e as ressalvas onde elas existem. Depois a análise da comissão repassada ao escritório, com variações testadas. Por último a taxa final cobrada do trabalhador, com a margem que sobra e o ponto de equilíbrio operacional.

Uma ressalva antes de começar. O custo unitário da infraestrutura financeira que o Ágio vai contratar (provavelmente QI Tech, possivelmente Celcoin) não é publicado. Foi enviado e-mail formal à QI Tech solicitando tabela de preços e demais informações necessárias para utilização do serviço. A resposta ainda não chegou. Os números que aparecem aqui usam benchmark público de mercado para serviços equivalentes (Pix PJ, custos típicos de BaaS, custo de capital via FIDC), e podem ser ajustados quando os valores da QI Tech forem confirmados. O método de análise não muda. Os valores absolutos podem se mover dentro de uma faixa.

## 8.1. O que o mercado pratica hoje

Para entender se uma taxa cobrada pelo Ágio é alta ou baixa, é preciso saber o que existe disponível ao trabalhador-alvo hoje. A análise se divide em três grupos: o crédito caro tradicional ao qual o público-alvo recorre quando não tem outra opção, as fintechs de antecipação salarial que operam em mercados maiores, e os benefícios oferecidos pela empresa empregadora.

**Crédito caro tradicional.** Segundo dados do Banco Central divulgados pela Agência Brasil em setembro de 2025, o cartão de crédito rotativo opera a 451,5% ao ano para pessoas físicas, equivalente a aproximadamente 15% ao mês [1]. O cheque especial está em 134,2% ao ano [2]. O crédito pessoal não consignado está em 106,6% ao ano [3]. Esses são produtos disponíveis em tese a qualquer correntista, mas na prática o trabalhador CLT da base da pirâmide, que costuma estar negativado, só acessa o rotativo (quando já tem cartão) e o cheque especial (quando o banco autoriza). Em valores absolutos, um trabalhador que precisa de R$ 200 e usa o rotativo por 25 dias paga aproximadamente R$ 25 em juros. Em 30 dias completos, paga R$ 30.

**Financeira informal.** Não há dado oficial sobre as taxas praticadas pelo mercado de financeiras informais e aplicativos de empréstimo de fácil acesso a negativados. Reportagens e entrevistas com usuários convergem para uma faixa de 10% a 15% ao mês, o que coloca R$ 200 emprestados por 30 dias entre R$ 20 e R$ 30 de juros [4]. O risco adicional é que parte significativa desses empréstimos rola, e a dívida cresce mês a mês quando não é paga.

**Fintechs de antecipação salarial cobrando do trabalhador.** A Xerpa, segundo reportagem do NeoFeed de setembro de 2020, cobrava taxa fixa de R$ 5 por antecipação, com tíquete médio de R$ 350 [5]. O modelo opera dentro de empresas grandes (iFood, Mercado Livre, CCR, Nubank), com volume alto que viabiliza taxa baixa. A Sólides, através de sua parceira Payssego, cobra taxa fixa de R$ 14,90 por solicitação, com pagamento via Pix em segundos, em modelo bem próximo ao do Ágio [6].

**Fintechs operando como benefício gratuito ao trabalhador.** Caju, Flash e UpGo oferecem antecipação salarial sem cobrar taxa do trabalhador. O custo é absorvido pela empresa contratante, que paga uma mensalidade ou taxa por funcionário ativo [7]. Esse modelo é incompatível com o Ágio, porque depende de a empresa contratar e pagar pelo benefício, o que volta ao problema de venda direta a PMEs pequenas que não é economicamente viável.

A leitura conjunta desses dados estabelece uma faixa de referência clara. O trabalhador-alvo paga hoje entre R$ 20 e R$ 30 em juros para conseguir R$ 200 em 30 dias, através de produtos de crédito caro. As fintechs concorrentes que cobram taxa fixa operam entre R$ 5 (Xerpa, em escala grande) e R$ 14,90 (Sólides). O espaço em que o Ágio precisa se posicionar fica entre esses extremos.

## 8.2. Custos diretos por transação

Cada antecipação processada pelo Ágio gera cinco categorias de custo direto. Os valores apresentados são estimativas baseadas em benchmark público de mercado, e estão sujeitos a revisão quando as informações da QI Tech forem confirmadas.

**Custo de capital.** Quando o trabalhador antecipa R$ 200, o Ágio precisa ter esses R$ 200 disponíveis para enviar. Esse capital fica "estacionado" até o desconto na folha do mês seguinte, em média 25 dias. Na fase de validação, o capital pode vir de aporte próprio ou de investidor-anjo. Na fase de escala, vem de FIDC. O custo do FIDC sênior, segundo dados da Hike Capital e da Stone, está entre CDI + 2% e CDI + 3% ao ano [8][9]. Com a Selic em 15% ao ano em 2025 e o CDI seguindo de perto, o custo total fica em aproximadamente 18% ao ano. Calculando para R$ 200 por 25 dias: R$ 200 × 0,18 × (25/365) = **R$ 2,46**.

**Transferência via Pix.** O Pix para envio empresarial é cobrado pelas instituições financeiras. Segundo relatório da Paytime divulgado em março de 2026, as faixas variam entre R$ 0,50 e R$ 1,50 por transação para pessoas jurídicas, dependendo do provedor e volume [10]. Vou trabalhar com a média conservadora de **R$ 1,00 por transação**.

**Processamento de backend e infraestrutura cloud.** O custo de manter a aplicação rodando, banco de dados, servidores e ferramentas auxiliares varia muito com o volume. Em escala inicial, o rateio por transação fica em torno de **R$ 0,40**, baseado em estimativa típica de fintechs em fase de validação. Esse número cai conforme o volume cresce.

**KYC e antifraude.** Validação de CPF (consulta Receita Federal), antifraude transacional e validação de dados bancários são serviços cobrados por transação. A QI Tech oferece esses serviços integrados na sua plataforma, e o custo típico de mercado fica em torno de **R$ 0,30 por transação**.

**Suporte e operação rateados.** Atendimento ao escritório de contabilidade, atendimento ao funcionário em casos de dúvida, ajustes manuais e operações de exceção. Em fase de validação, esse custo é mais alto porque o volume é baixo e cada caso exige atenção humana. Estimativa de **R$ 0,50 por transação** na fase de validação, declinante com o volume.

**Soma dos custos diretos por transação: R$ 4,66.**

Esse número agrega cinco fontes de incerteza. A mais relevante é o custo de capital, que depende da Selic e da estrutura do FIDC quando ele existir. As outras quatro categorias são mais previsíveis, mas dependem da tabela de preços da QI Tech que ainda não foi confirmada. Numa estimativa pessimista (Pix R$ 1,50, suporte R$ 0,80, capital com Selic mais alta), os custos diretos podem chegar a R$ 6. Numa estimativa otimista (Pix R$ 0,50, suporte R$ 0,30, Selic em queda), podem cair para R$ 3,80. A faixa razoável de trabalho é R$ 4 a R$ 5,50 por transação.

## 8.3. Comissão repassada ao escritório de contabilidade

A comissão é a variável que define se o escritório aceita oferecer o produto. Quanto maior, mais atrativo para o canal. Quanto menor, mais espaço para o Ágio reter margem. Testei quatro cenários, assumindo taxa fixa hipotética de R$ 10 cobrada do trabalhador, frequência média de 1,5 antecipações por mês por usuário ativo, e carteira de referência de 500 funcionários ativos.

**15% de comissão.** R$ 1,50 por transação. Em 500 funcionários ativos × 1,5 uso/mês, o escritório receberia aproximadamente R$ 1.125 por mês de receita recorrente. Pouco atrativo para escritórios médios e grandes, que enxergam essa receita como marginal. Pode funcionar para escritórios pequenos buscando qualquer linha adicional.

**20% de comissão.** R$ 2,00 por transação. Mesma base, R$ 1.500 por mês. É o número que estava no plano original. Razoável, mas não excepcional. O escritório aceita, mas não vira evangelista do produto.

**25% de comissão.** R$ 2,50 por transação. R$ 1.875 por mês na mesma base. Significativamente mais atrativo, especialmente quando o escritório projeta o que isso representa em uma carteira completa de 50 a 200 empresas. Começa a se aproximar de honorário contábil médio de uma PME pequena, o que torna a proposta concreta.

**30% de comissão.** R$ 3,00 por transação. R$ 2.250 por mês. Muito atrativo para o escritório, mas o Ágio retém R$ 7 por transação, contra custos diretos de R$ 4,66. A margem bruta cai para R$ 2,34 por transação, o que aperta a capacidade de cobrir custos fixos e gerar lucro.

**Recomendação: 25% de comissão.** Três razões. Primeira, é mais atrativa que os 20% originais, o que pode acelerar a adoção do canal numa fase em que adoção é a métrica que mais importa. Segunda, mantém margem bruta saudável para o Ágio (R$ 7,50 retidos contra R$ 4,66 de custo direto, sobrando R$ 2,84 por transação). Terceira, posiciona o produto como genuinamente compartilhado entre Ágio e canal, o que diferencia de modelos onde a parte do canal é vista como simbólica.

## 8.4. Cenários de frequência de uso

A frequência de uso por usuário ativo é uma variável fora do controle direto do Ágio. Depende da realidade financeira do trabalhador e do comportamento de uso depois da primeira antecipação. Trabalho com três cenários, todos ancorados em dados públicos de operações similares.

**Cenário conservador: 1,0 antecipação por mês.** Assume que o usuário pega uma vez por mês, em emergência pontual, e não vira hábito. Compatível com o público que não tem dor recorrente, apenas eventos pontuais.

**Cenário base: 1,5 antecipações por mês.** Compatível com o que o Mêntore Bank documentou em operação real e com a média sugerida por Roberto Amaral, head de lending da QI Tech, em entrevista ao NeoFeed em fevereiro de 2026 sobre o consignado as a service [11]. Representa o usuário que incorporou o produto na rotina financeira.

**Cenário otimista: 2,0 antecipações por mês.** Compatível com o que a Xerpa relatou em 2020, com 30% de adesão e uso recorrente em algumas empresas. Representa carteira engajada e produto bem comunicado.

Esses três cenários alimentam os cálculos de receita, margem e ponto de equilíbrio das próximas seções.

## 8.5. Taxa cobrada do trabalhador

Com custos diretos estimados em R$ 4,66 por transação e comissão de 25% repassada ao escritório, a taxa precisa cobrir esses dois itens e ainda gerar margem suficiente para custos fixos do negócio. Testei três valores.

**R$ 8 por antecipação.** Receita líquida do Ágio (R$ 8 menos comissão de 25%) = R$ 6. Margem bruta após custos diretos = R$ 1,34. Representa 4% do tíquete médio de R$ 200. Posicionamento muito agressivo no mercado, abaixo da Sólides (R$ 14,90) e da maioria dos concorrentes que cobram do trabalhador, ainda mais barato que o cartão rotativo por uma ordem de magnitude. A margem por transação fica apertada, e o ponto de equilíbrio operacional sobe significativamente.

**R$ 9,90 por antecipação.** Receita líquida do Ágio = R$ 7,43. Margem bruta = R$ 2,77. Representa 4,95% do tíquete médio. Ainda muito abaixo do que o público paga hoje no rotativo (R$ 25 a R$ 30 por R$ 200 em 30 dias). O valor termina em 9,90, o que faz parecer "abaixo de R$ 10" e tem leitura psicológica mais leve.

**R$ 12 por antecipação.** Receita líquida = R$ 9. Margem bruta = R$ 4,34. Representa 6% do tíquete médio. Mais próximo da Sólides (R$ 14,90) e ainda significativamente abaixo do crédito caro. Margem confortável, mas o usuário começa a sentir o peso da taxa quando o tíquete é mais baixo (em R$ 150, R$ 12 representa 8%, o que pode pesar na decisão de usar de novo).

**Recomendação: taxa de R$ 9,90 por antecipação.** Equilibra três objetivos. Primeiro, mantém o produto visivelmente mais barato que as alternativas que o público-alvo enfrenta hoje (R$ 9,90 contra R$ 25 do rotativo é uma diferença de 60%). Segundo, gera margem bruta suficiente para sustentar o negócio em escala razoável de usuários ativos. Terceiro, fica em faixa de preço memorável, abaixo da barreira psicológica dos dois dígitos.

## 8.6. Margem e ponto de equilíbrio

Com taxa de R$ 9,90, comissão de 25%, custos diretos de R$ 4,66 e frequência base de 1,5 antecipações por mês por usuário ativo, a economia unitária do Ágio fica assim:

- Receita bruta por transação: R$ 9,90
- Comissão ao escritório (25%): R$ 2,48
- Receita líquida do Ágio: R$ 7,43
- Custo direto da transação: R$ 4,66
- **Margem bruta por transação: R$ 2,77** (37% sobre receita líquida)
- **Receita líquida mensal por usuário ativo (cenário base, 1,5 usos/mês): R$ 11,15**
- **Margem bruta mensal por usuário ativo: R$ 4,16**

Para chegar à margem operacional, é necessário cobrir os custos fixos do negócio: salários do time enxuto inicial (3 a 5 pessoas), software, infraestrutura administrativa, marketing de aquisição de escritórios, jurídico, contábil. Estimativa de custo fixo mensal na fase de validação: **R$ 40.000 a R$ 60.000**, dependendo do tamanho do time e do volume de marketing.

Com margem bruta mensal de R$ 4,16 por usuário ativo, o ponto de equilíbrio operacional fica entre **9.615 e 14.423 usuários ativos**, dependendo de qual extremo do custo fixo se materializar. Em termos de escritórios parceiros, considerando uma carteira média de 1.500 a 2.500 funcionários ativos por escritório quando bem desenvolvido, isso representa **6 a 9 escritórios** em operação plena.

Esse cálculo é consistente com a estimativa original do Módulo 1, que apontava break-even em torno de 6 escritórios. A análise atual confirma a ordem de grandeza com mais profundidade nas variáveis.

## 8.7. Comparação final

Para fechar o argumento de pricing, vale colocar o Ágio na mesma régua dos outros produtos disponíveis ao público-alvo. Considerando uma antecipação de R$ 200 em ciclo de 30 dias, o usuário paga aproximadamente:

| Produto | Custo aproximado em R$ | Fonte |
|---------|----------------------|-------|
| Cartão de crédito rotativo | R$ 30 | Banco Central, setembro 2025 [1] |
| Cheque especial | R$ 22 | Banco Central, abril 2025 [2] |
| Financeira informal | R$ 20 a R$ 30 | Estimativa de mercado [4] |
| Sólides Adiantamento Salarial | R$ 14,90 | Site institucional Sólides [6] |
| **Ágio (taxa proposta)** | **R$ 9,90** | **Análise interna** |
| Xerpa (referência histórica) | R$ 5 | NeoFeed, setembro 2020 [5] |

O Ágio nesse pricing fica visivelmente abaixo das alternativas de crédito caro tradicional (rotativo, cheque especial, financeira informal) e abaixo da concorrente direta mais próxima em modelo (Sólides). Fica acima da Xerpa, mas a Xerpa opera em escala muito maior e em empresas grandes, contexto que reduz custos unitários de forma significativa. O posicionamento do Ágio em R$ 9,90 é defensável dentro dos limites desse mercado.

## 8.8. Ressalvas e ajustes futuros

Três pontos do pricing apresentado dependem de informações externas que ainda não foram confirmadas e podem alterar os números absolutos sem alterar a lógica geral.

Primeiro, a tabela de preços da QI Tech (ou da infraestrutura financeira escolhida) ainda não foi recebida. O e-mail enviado solicita não apenas a tabela, mas também as condições contratuais, requisitos regulatórios, prazos de integração e demais informações necessárias para utilizar o serviço. Quando a resposta chegar, os custos diretos vão ser revistos com números reais em vez de benchmark.

Segundo, o custo de capital depende da Selic atual e da estrutura específica do FIDC quando ele for montado. Na fase de validação inicial, o capital pode vir de outras fontes (aporte próprio, investidor-anjo, linha de crédito de fintech parceira), com custos diferentes. O FIDC entra na fase de escala, com janela típica de seis a doze meses de estruturação.

Terceiro, a comissão de 25% pode ser ajustada para cima ou para baixo conforme o feedback dos primeiros escritórios contatados na Sprint 4. Se a comissão se mostrar insuficiente para acelerar adoção, vale revisar. Se for considerada excessiva, vale recalibrar.

O pricing apresentado é o que faz sentido com os dados disponíveis hoje. É um ponto de partida defensável, não uma decisão imutável. A função deste capítulo é mostrar o método de análise e o intervalo de viabilidade do negócio, mais do que cravar números absolutos.

---

## Referências

[1] Agência Brasil, "Juros do cartão de crédito rotativo avançam e chegam a 451,5% ao ano", 29 de setembro de 2025. Disponível em: agenciabrasil.ebc.com.br

[2] Agência Brasil, "Juros do cartão de crédito rotativo avançam e chegam a 445% ao ano", 30 de abril de 2025. Disponível em: agenciabrasil.ebc.com.br

[3] Agência Brasil, "Juros do crédito pessoal e cartão rotativo avançam para as famílias", 26 de dezembro de 2025. Disponível em: agenciabrasil.ebc.com.br

[4] Estimativa de mercado baseada em diversas reportagens e análises sobre crédito informal e aplicativos de empréstimo a negativados.

[5] NeoFeed, "Xerpa, a fintech que é uma outsider na batalha do crédito consignado", 22 de setembro de 2020. Disponível em: neofeed.com.br

[6] Sólides Benefícios, "Adiantamento Salarial by Payssego: entenda a nova solução disponível na Sólides Benefícios", 4 de março de 2026. Disponível em: ajuda.solides.com.br

[7] Sites institucionais Caju, Flash e UpGo (UpBrasil). Consultados em 2026.

[8] Hike Capital, "FIDCs: a classe de ativos da renda fixa cujo retorno histórico supera os produtos IPCA +6%", 27 de maio de 2024. Disponível em: hike.capital

[9] StoneX, "FIDC: entenda o que é e como funciona", 6 de março de 2026. Disponível em: stonex.com

[10] Paytime, "Tarifa Pix PJ: veja quanto as empresas pagam em 2026", 19 de março de 2026. Disponível em: pagamentos.blogpaytime.com.br

[11] NeoFeed, "QI Tech's move to bring in more than R$ 2 billion per month: payroll-deducted loans as a service", 23 de fevereiro de 2026. Disponível em: neofeed.com.br

## Entidades

> **![\[entidade.png\]](https://res.cloudinary.com/dloj4cl3v/image/upload/v1778868096/diagrama-entidades_o5fd42.jpg)**

**ESCRITORIO**
O escritório de contabilidade. É o ponto de entrada no sistema — ele se cadastra no Ágio e a partir daí gerencia tudo. Cada escritório tem um CNPJ próprio e um e-mail de acesso.

**EMPRESA**
A PME cliente do escritório. Não se cadastra sozinha — quem cadastra é o escritório (`escritorio_id` como chave estrangeira). Uma empresa pertence a exatamente um escritório; um escritório pode ter muitas empresas.

**FUNCIONARIO**
O trabalhador CLT. Pertence a uma empresa (`empresa_id`). O campo `salario_liquido` é o que define o teto de antecipação (40%). `data_admissao` serve para aplicar o teto reduzido nos primeiros 3 meses. `status` (ativo/inativo) permite desativar funcionários desligados sem deletar o histórico de antecipações deles.

**CICLO_FOLHA**
Representa um upload de CSV por empresa. Quando o contador fecha a folha de um mês e sobe o arquivo no Ágio, cria um registro aqui. `competencia` é o mês/ano de referência (ex: `2026-05`). `status` indica se o arquivo foi processado ou está pendente. Essa entidade existe porque o desconto das antecipações precisa estar amarrado a um ciclo específico — sem ela, não dá pra saber "qual folha vai descontar essa antecipação".

**ANTECIPACAO**
O núcleo do produto. Cada pedido de adiantamento gera um registro. Tem duas chaves estrangeiras: `funcionario_id` (quem pediu) e `ciclo_folha_id` (em qual folha será descontado). Isso permite que um funcionário tenha mais de uma antecipação aberta ao mesmo tempo — cada uma vinculada ao ciclo correto. `valor` é o quanto foi antecipado, `taxa` é o R$ 9,90 cobrado. `status` percorre: `pendente → aprovada → descontada → cancelada`.

---

## Relacionamentos

| Relação | Cardinalidade | O que significa |
|---|---|---|
| ESCRITORIO → EMPRESA | 1 para muitos | Um escritório gerencia várias empresas |
| EMPRESA → FUNCIONARIO | 1 para muitos | Uma empresa tem vários funcionários |
| EMPRESA → CICLO_FOLHA | 1 para muitos | Uma empresa gera um ciclo por fechamento de folha |
| FUNCIONARIO → ANTECIPACAO | 1 para muitos | Um funcionário pode ter várias antecipações (simultâneas ou históricas) |
| CICLO_FOLHA → ANTECIPACAO | 1 para muitos | Um ciclo agrupa todas as antecipações que serão descontadas naquela folha |

---

## Por que essa estrutura 

O ponto não óbvio é a existência de `CICLO_FOLHA` como entidade separada. A alternativa seria guardar só uma data em `ANTECIPACAO`. O problema: quando o contador gera o relatório de descontos, ele precisa de todas as antecipações de uma empresa em um período fechado — não de datas espalhadas. Com `CICLO_FOLHA`, a query é trivial: `WHERE ciclo_folha_id = X`. Sem ela, qualquer relatório vira um filtro de datas com margem de erro.

A outra decisão relevante é `FUNCIONARIO.status`. Funcionários demitidos não podem ser deletados enquanto tiverem antecipações em aberto ou históricas. O campo resolve isso sem violar integridade referencial.

---

## Leitura do diagrama

**Fronteira do sistema** é o retângulo tracejado. Tudo dentro é responsabilidade do Ágio. Tudo fora são atores — entidades que interagem com o sistema mas não fazem parte dele.

**Atores** são representados por bonecos. Um ator é qualquer entidade externa que inicia ou participa de uma interação com o sistema. No Ágio há dois:

- **Contador**: opera o painel do escritório. É ele quem cadastra empresas, sobe arquivos e gera relatórios. É o ator primário do lado operacional.
- **Funcionário CLT**: acessa a página via link + CPF. É o ator primário do lado do consumidor.

**Casos de uso** são as elipses. Cada uma representa uma funcionalidade completa do ponto de vista do ator — não um passo técnico interno, mas algo com valor observável para quem usa.

**Linhas de associação** conectam ator ao caso de uso que ele pode iniciar. Não têm seta — em UML, associação simples é linha sem direção.


## Os casos de uso

> **![\[casos-de-uso.png\]](https://res.cloudinary.com/dloj4cl3v/image/upload/v1778868198/diagrama-casos-de-uso_bwt879.jpg)**

**Do Contador:**

`Autenticar` — o contador entra com credenciais no painel. No MVP é um login fake que aceita qualquer entrada, mas o caso de uso existe porque em produção haverá autenticação real.

`Cadastrar empresa` — o contador registra uma PME no sistema, vinculando-a ao escritório dele. A partir daí os funcionários dessa empresa ficam disponíveis no painel.

`Upload de folha` — após fechar a folha no sistema dele (Domínio, Totvs, Senior), o contador exporta o CSV e faz upload no Ágio. O sistema processa o arquivo, atualiza salários líquidos e define o teto de antecipação de cada funcionário para aquele ciclo.

`Visualizar painel` — lista de funcionários da empresa selecionada, com status, saldo disponível e histórico de antecipações. É a tela principal de operação do contador.

`Gerar relatório` — exporta um CSV ou PDF com todas as antecipações do ciclo daquela empresa, prontas para lançamento como desconto na folha do mês seguinte.

**Do Funcionário CLT:**

`Acessar por CPF` — o funcionário recebe um link da empresa (ou do contador) e entra informando o CPF. Sem cadastro, sem senha. A autenticação é o próprio CPF vinculado ao registro importado via CSV.

`Solicitar antecipação` — escolhe o valor dentro do limite disponível (até 40% do salário líquido) e confirma. O sistema registra a antecipação com status `pendente`, que passa para `aprovada` e depois para `descontada` no próximo ciclo de folha.

`Consultar histórico` — vê todas as antecipações anteriores: valor, data, status e taxa cobrada. Transparência sobre o que já foi solicitado e o que ainda está em aberto.

---

## O que o diagrama não mostra

Relacionamentos `<<include>>` ficaram fora para não poluir. Dois deles existem e valem documentar:

- `Upload de folha` inclui `Processar e validar CSV` — ao subir o arquivo, o sistema valida campos obrigatórios, detecta CPFs sem vínculo e calcula o teto de cada funcionário. Isso acontece automaticamente, não é ação do ator.
- `Solicitar antecipação` inclui `Calcular limite disponível` — antes de exibir os valores disponíveis, o sistema soma as antecipações em aberto e subtrai do teto do funcionário. O funcionário não inicia esse cálculo diretamente.

Esses dois `<<include>>` vão aparecer nos cenários de teste, que é o próximo documento.

## Convenções

Cada caso de uso segue a estrutura:

- **Ator**: quem inicia a interação
- **Pré-condições**: o que precisa ser verdade antes do início
- **Pós-condições**: estado do sistema após execução bem-sucedida
- **Fluxo principal**: caminho feliz, passo a passo
- **Fluxos alternativos (FA)**: desvios esperados e recuperáveis
- **Fluxos de exceção (FE)**: falhas que interrompem o fluxo
- **Cenários de teste**: casos concretos para validação

Os cenários de teste usam o formato **Dado / Quando / Então**.  
A coluna *MVP* indica se o comportamento está implementado no demo funcional ou apenas especificado para produção.

---

## UC01 — Autenticar

**Ator:** Contador  
**Pré-condições:** Sistema disponível e acessível via navegador.  
**Pós-condições:** Contador autenticado, sessão iniciada, redirecionado ao painel do escritório.

### Fluxo principal

1. Contador acessa a URL do sistema.
2. Sistema exibe tela de login com campos de e-mail e senha.
3. Contador preenche as credenciais e confirma.
4. Sistema valida as credenciais.
5. Sistema redireciona para o painel do escritório correspondente ao e-mail informado.

### Fluxos alternativos

**FA01.A — Credenciais inválidas**  
No passo 4, se as credenciais não correspondem a nenhum registro:  
4a. Sistema exibe mensagem: "E-mail ou senha incorretos."  
4b. Campos de senha são limpos; e-mail permanece preenchido.  
4c. Contador pode tentar novamente. Retorna ao passo 3.

**FA01.B — Campos em branco**  
No passo 3, se qualquer campo estiver vazio:  
3a. Sistema bloqueia o envio e destaca os campos obrigatórios.  
3b. Retorna ao passo 3.

### Fluxos de exceção

**FE01.A — Sistema indisponível**  
No passo 1, se o servidor não responde:  
1a. Navegador exibe erro de conexão.  
1b. Fluxo é encerrado. Nenhuma ação do sistema.

### Cenários de teste

| ID | Cenário | MVP |
|----|---------|-----|
| CT01.1 | Login com credenciais válidas | ✓ |
| CT01.2 | Login com senha incorreta | ✓ |
| CT01.3 | Login com e-mail não cadastrado | ✓ |
| CT01.4 | Login com campos em branco | ✓ |
| CT01.5 | Persistência de sessão após recarregar página | — |

**CT01.1 — Login com credenciais válidas**  
Dado que o sistema está disponível e existe um escritório cadastrado com e-mail `contador@escritorio.com`  
Quando o contador informa o e-mail e a senha corretos e confirma  
Então o sistema redireciona para o painel do escritório e exibe a lista de empresas vinculadas

> *MVP: login fake aceita qualquer credencial. O painel exibido é sempre o mesmo conjunto de dados fictícios.*

**CT01.2 — Login com senha incorreta**  
Dado que o sistema está disponível  
Quando o contador informa um e-mail válido e uma senha incorreta  
Então o sistema exibe "E-mail ou senha incorretos", limpa o campo de senha e mantém o foco nele

> *MVP: não aplicável — qualquer credencial é aceita. Cenário especificado para produção.*

**CT01.3 — Login com e-mail não cadastrado**  
Dado que o sistema está disponível  
Quando o contador informa um e-mail que não existe na base e qualquer senha  
Então o sistema exibe "E-mail ou senha incorretos" sem indicar qual campo está errado

> *Nota: não revelar se o e-mail existe é uma prática de segurança. Fora do escopo do MVP.*

**CT01.4 — Login com campos em branco**  
Dado que o sistema está disponível  
Quando o contador tenta confirmar sem preencher nenhum campo  
Então o sistema bloqueia o envio e destaca os campos obrigatórios com indicação visual

**CT01.5 — Persistência de sessão**  
Dado que o contador está autenticado  
Quando recarrega a página ou fecha e reabre a aba  
Então o sistema mantém a sessão ativa e não exige novo login

> *MVP: não implementado. Sessão se perde ao recarregar.*

---

## UC02 — Cadastrar empresa

**Ator:** Contador  
**Pré-condições:** Contador autenticado no sistema.  
**Pós-condições:** Nova empresa registrada, vinculada ao escritório do contador, disponível para receber funcionários via upload de folha.

### Fluxo principal

1. Contador acessa a seção de empresas no painel.
2. Sistema lista as empresas já cadastradas pelo escritório.
3. Contador seleciona a opção de cadastrar nova empresa.
4. Sistema exibe formulário com campos: nome da empresa e CNPJ.
5. Contador preenche os dados e confirma.
6. Sistema valida o CNPJ (formato) e verifica se já está cadastrado.
7. Sistema cria o registro de empresa vinculado ao `escritorio_id` da sessão.
8. Sistema retorna à lista de empresas com a nova empresa visível.

### Fluxos alternativos

**FA02.A — CNPJ já cadastrado no escritório**  
No passo 6, se o CNPJ já existe vinculado ao mesmo escritório:  
6a. Sistema exibe: "Empresa com este CNPJ já cadastrada."  
6b. Formulário permanece preenchido para correção.  
6c. Retorna ao passo 5.

**FA02.B — CNPJ com formato inválido**  
No passo 6, se o CNPJ não tem 14 dígitos ou falha no dígito verificador:  
6a. Sistema exibe: "CNPJ inválido."  
6b. Retorna ao passo 5.

**FA02.C — Campos obrigatórios em branco**  
No passo 5, se nome ou CNPJ estiver vazio:  
5a. Sistema bloqueia envio e destaca os campos.  
5b. Retorna ao passo 5.

### Fluxos de exceção

**FE02.A — Sessão expirada durante o cadastro**  
No passo 7, se a sessão não é mais válida:  
7a. Sistema redireciona para a tela de login.  
7b. Dados do formulário são perdidos.

### Cenários de teste

| ID | Cenário | MVP |
|----|---------|-----|
| CT02.1 | Cadastro com dados válidos | ✓ |
| CT02.2 | Cadastro com CNPJ duplicado no mesmo escritório | ✓ |
| CT02.3 | Cadastro com CNPJ mal formatado | — |
| CT02.4 | Cadastro com nome em branco | ✓ |
| CT02.5 | Empresa aparece na lista após cadastro | ✓ |
| CT02.6 | Mesmo CNPJ em escritórios diferentes | — |

**CT02.1 — Cadastro com dados válidos**  
Dado que o contador está autenticado e o CNPJ `12.345.678/0001-99` não está cadastrado  
Quando preenche nome "Padaria Flores" e o CNPJ e confirma  
Então a empresa aparece na lista do escritório e está disponível para receber uma folha de funcionários

**CT02.2 — CNPJ duplicado no mesmo escritório**  
Dado que a empresa com CNPJ `12.345.678/0001-99` já existe no escritório  
Quando o contador tenta cadastrar outra empresa com o mesmo CNPJ  
Então o sistema exibe erro e não cria o registro duplicado

**CT02.3 — CNPJ mal formatado**  
Dado que o contador está autenticado  
Quando preenche o CNPJ como `123.456` (incompleto)  
Então o sistema rejeita o envio antes de consultar o banco

**CT02.4 — Nome em branco**  
Dado que o contador está autenticado  
Quando submete o formulário com o campo nome vazio  
Então o sistema destaca o campo obrigatório e não envia

**CT02.5 — Empresa aparece na lista**  
Dado que o cadastro foi concluído com sucesso  
Quando o contador retorna à lista de empresas  
Então a nova empresa está listada e clicável

**CT02.6 — Mesmo CNPJ em escritórios diferentes**  
Dado que o CNPJ `12.345.678/0001-99` já existe em outro escritório  
Quando um segundo escritório tenta cadastrá-lo  
Então o sistema permite, pois o vínculo é por escritório, não global

> *Decisão de modelagem: CNPJ único por escritório, não global. Mesma PME pode ser atendida por dois escritórios distintos sem conflito.*

---

## UC03 — Upload de folha

**Ator:** Contador  
**Pré-condições:** Contador autenticado; empresa cadastrada no sistema.  
**Pós-condições:** `CICLO_FOLHA` criado para a empresa; registros de `FUNCIONARIO` criados ou atualizados; teto de antecipação de cada funcionário calculado com base no `salario_liquido` importado.

### Fluxo principal

1. Contador seleciona uma empresa no painel.
2. Contador acessa a opção de upload de folha.
3. Sistema exibe seletor de arquivo e campo de competência (mês/ano).
4. Contador informa a competência (ex: `2026-05`) e seleciona o arquivo CSV exportado do sistema de folha.
5. Contador confirma o envio.
6. Sistema valida o formato do arquivo (extensão e colunas esperadas).
7. Sistema processa cada linha: cria ou atualiza o registro de `FUNCIONARIO` com `cpf`, `nome`, `salario_liquido` e `data_admissao`.
8. Sistema cria o registro de `CICLO_FOLHA` com status `processada`.
9. Sistema exibe resumo: total de funcionários importados, novos vs. atualizados, alertas de CPFs com problema.

### Fluxos alternativos

**FA03.A — CPF no arquivo não encontrado como funcionário ativo**  
No passo 7, para cada linha com CPF novo:  
7a. Sistema cria novo registro de `FUNCIONARIO` com status `ativo`.  
7b. Continua processando as demais linhas.

**FA03.B — Funcionário existente com dados alterados**  
No passo 7, se CPF já existe mas `salario_liquido` mudou:  
7b. Sistema atualiza o campo. Antecipações em aberto anteriores ao upload não são afetadas.

**FA03.C — Competência já processada para a empresa**  
No passo 6, se já existe um `CICLO_FOLHA` com a mesma competência para essa empresa:  
6a. Sistema alerta: "Já existe uma folha processada para este período. Deseja substituir?"  
6b. Se confirmado, o ciclo anterior é marcado como inativo e o novo é criado.  
6c. Se cancelado, fluxo é encerrado sem alteração.

**FA03.D — Linhas com campos obrigatórios ausentes**  
No passo 7, para cada linha sem CPF ou sem `salario_liquido`:  
7a. Sistema ignora a linha e registra no resumo como "ignorada (dados incompletos)".  
7b. Continua processando as demais.

### Fluxos de exceção

**FE03.A — Arquivo não é CSV**  
No passo 6, se a extensão não é `.csv`:  
6a. Sistema rejeita o arquivo e exibe: "Formato inválido. Envie um arquivo .csv."  
6b. Retorna ao passo 4.

**FE03.B — Colunas esperadas ausentes no CSV**  
No passo 6, se o arquivo CSV não contém as colunas `cpf`, `nome`, `salario_liquido`, `data_admissao`:  
6a. Sistema rejeita e exibe quais colunas estão faltando.  
6b. Retorna ao passo 4.

**FE03.C — Arquivo vazio**  
No passo 6, se o arquivo não contém nenhuma linha de dados além do cabeçalho:  
6a. Sistema exibe: "O arquivo está vazio."  
6b. Nenhum `CICLO_FOLHA` é criado.

### Cenários de teste

| ID | Cenário | MVP |
|----|---------|-----|
| CT03.1 | Upload válido com funcionários novos | ✓ |
| CT03.2 | Upload com atualização de salário | ✓ |
| CT03.3 | Upload com competência já existente | ✓ |
| CT03.4 | Arquivo com extensão incorreta | ✓ |
| CT03.5 | Arquivo com colunas ausentes | ✓ |
| CT03.6 | Arquivo com linhas parcialmente inválidas | ✓ |
| CT03.7 | Arquivo vazio | ✓ |
| CT03.8 | Cálculo correto do teto de antecipação | ✓ |

**CT03.1 — Upload válido com funcionários novos**  
Dado que a empresa "Padaria Flores" não tem funcionários cadastrados  
Quando o contador faz upload de um CSV com 10 linhas válidas para a competência `2026-05`  
Então o sistema cria 10 registros de `FUNCIONARIO`, cria o `CICLO_FOLHA` com status `processada` e exibe resumo: "10 funcionários importados, 0 atualizados"

**CT03.2 — Upload com atualização de salário**  
Dado que a funcionária Ana (CPF `111.222.333-44`) já existe com salário líquido R$ 2.000,00  
Quando o contador faz upload de um CSV onde Ana aparece com salário R$ 2.200,00  
Então o sistema atualiza o salário e o teto de Ana passa de R$ 800,00 para R$ 880,00

> *Teto = 40% de R$ 2.200,00 = R$ 880,00*

**CT03.3 — Competência já existente**  
Dado que já existe um `CICLO_FOLHA` com competência `2026-05` para "Padaria Flores"  
Quando o contador tenta subir um novo CSV para a mesma competência  
Então o sistema alerta e solicita confirmação antes de substituir

**CT03.4 — Extensão incorreta**  
Dado que o contador seleciona um arquivo `.xlsx`  
Quando tenta confirmar o envio  
Então o sistema rejeita antes de processar e exibe a mensagem de formato inválido

**CT03.5 — Colunas ausentes**  
Dado que o contador sobe um CSV com colunas `nome` e `cpf` mas sem `salario_liquido`  
Quando o sistema valida o arquivo  
Então rejeita e informa: "Coluna obrigatória ausente: salario_liquido"

**CT03.6 — Linhas parcialmente inválidas**  
Dado que um CSV de 10 linhas tem 2 linhas sem CPF  
Quando o sistema processa  
Então importa 8 funcionários e exibe: "2 linhas ignoradas (CPF ausente)"

**CT03.7 — Arquivo vazio**  
Dado que o CSV contém apenas o cabeçalho e nenhuma linha de dados  
Quando o sistema processa  
Então nenhum `CICLO_FOLHA` é criado e o sistema exibe: "O arquivo está vazio"

**CT03.8 — Cálculo do teto**  
Dado que um funcionário tem salário líquido R$ 1.800,00 e mais de 3 meses de casa  
Quando a folha é processada  
Então o teto de antecipação é R$ 720,00 (40% de R$ 1.800,00)

> *Funcionários com menos de 3 meses: teto reduzido. O percentual exato do teto reduzido é uma decisão pendente de produto.*

---

## UC04 — Visualizar painel

**Ator:** Contador  
**Pré-condições:** Contador autenticado; ao menos uma empresa cadastrada com folha processada.  
**Pós-condições:** Nenhuma alteração de estado. Operação somente leitura.

### Fluxo principal

1. Contador acessa o painel e seleciona uma empresa.
2. Sistema exibe a lista de funcionários ativos da empresa com, para cada um:
   - Nome e CPF (parcialmente mascarado)
   - Salário líquido
   - Teto de antecipação disponível (já descontadas antecipações em aberto)
   - Total antecipado no ciclo atual
   - Status: `sem antecipação`, `com antecipação em aberto`, `limite esgotado`
3. Contador clica em um funcionário.
4. Sistema exibe o detalhe: todas as antecipações do funcionário (valor, taxa, data de solicitação, data de pagamento, status).

### Fluxos alternativos

**FA04.A — Empresa sem folha processada**  
No passo 2, se não existe nenhum `CICLO_FOLHA` para a empresa:  
2a. Sistema exibe: "Nenhuma folha processada ainda. Faça o upload da primeira folha para visualizar os funcionários."

**FA04.B — Empresa com folha mas sem antecipações**  
No passo 2, se existem funcionários mas nenhum solicitou antecipação:  
2b. Lista exibe todos os funcionários com teto cheio e status `sem antecipação`.

**FA04.C — Empresa com muitos funcionários**  
No passo 2, se a lista ultrapassa 50 registros:  
2c. Sistema exibe paginação ou busca por nome/CPF.

> *Paginação fora do escopo do MVP. PMEs de 10–100 funcionários raramente justificam paginação no demo.*

### Fluxos de exceção

Nenhum fluxo de exceção relevante para leitura pura. Falha de conexão encerra a página.

### Cenários de teste

| ID | Cenário | MVP |
|----|---------|-----|
| CT04.1 | Painel com funcionários e antecipações variadas | ✓ |
| CT04.2 | Empresa sem folha processada | ✓ |
| CT04.3 | Detalhe individual de funcionário | ✓ |
| CT04.4 | Teto exibido já desconta antecipações em aberto | ✓ |
| CT04.5 | Funcionário com limite esgotado | ✓ |

**CT04.1 — Painel com dados variados**  
Dado que a empresa tem 5 funcionários, 2 com antecipação em aberto e 1 com limite esgotado  
Quando o contador acessa o painel dessa empresa  
Então vê os 5 funcionários listados com status correto para cada um

**CT04.2 — Empresa sem folha processada**  
Dado que a empresa foi cadastrada mas nenhum CSV foi enviado ainda  
Quando o contador tenta acessar o painel dela  
Então o sistema exibe a mensagem orientando o upload da primeira folha

**CT04.3 — Detalhe do funcionário**  
Dado que o funcionário João tem 3 antecipações no histórico  
Quando o contador clica no nome de João  
Então vê as 3 antecipações com valor, taxa (R$ 9,90 cada), data e status de cada uma

**CT04.4 — Teto já descontado**  
Dado que Maria tem teto de R$ 800,00 e uma antecipação em aberto de R$ 300,00  
Quando o contador visualiza o painel  
Então o teto exibido para Maria é R$ 500,00, não R$ 800,00

**CT04.5 — Limite esgotado**  
Dado que Carlos tem teto de R$ 600,00 e antecipações em aberto somando R$ 600,00  
Quando o contador visualiza o painel  
Então Carlos aparece com status `limite esgotado` e teto disponível R$ 0,00

## UC05 — Gerar relatório

**Ator:** Contador  
**Pré-condições:** Contador autenticado; empresa com ao menos um `CICLO_FOLHA` contendo antecipações com status `aprovada`.  
**Pós-condições:** Arquivo CSV ou PDF disponível para download; nenhum estado alterado no banco.

### Fluxo principal

1. Contador seleciona uma empresa e navega até a seção de relatórios.
2. Sistema lista os ciclos disponíveis para a empresa (competência + quantidade de antecipações).
3. Contador seleciona o ciclo desejado e o formato (CSV ou PDF).
4. Sistema agrupa todas as antecipações com status `aprovada` do ciclo:
   - Nome do funcionário
   - CPF
   - Valor antecipado
   - Taxa (R$ 9,90)
   - Total a descontar (valor + taxa)
   - Data da solicitação
5. Sistema gera o arquivo e oferece o download.
6. Contador baixa o arquivo e lança os descontos no sistema de folha da empresa.

### Fluxos alternativos

**FA05.A — Ciclo sem antecipações aprovadas**  
No passo 4, se não há antecipações com status `aprovada` no ciclo:  
4a. Sistema exibe: "Nenhuma antecipação aprovada neste ciclo."  
4b. Nenhum arquivo é gerado.

**FA05.B — Filtro parcial por funcionário**  
No passo 3, se o contador quer o relatório de apenas um funcionário:  
3a. Sistema permite busca por nome ou CPF antes de gerar.  
3b. Relatório é gerado apenas com os registros filtrados.

> *FA05.B fora do escopo do MVP. Relatório sempre agrupa todos os funcionários do ciclo.*

### Fluxos de exceção

**FE05.A — Falha na geração do arquivo**  
No passo 5, se ocorre erro interno:  
5a. Sistema exibe mensagem de erro e orienta tentar novamente.  
5b. Nenhum download é iniciado.

### Cenários de teste

| ID | Cenário | MVP |
|----|---------|-----|
| CT05.1 | Relatório CSV com múltiplas antecipações | ✓ |
| CT05.2 | Relatório de ciclo sem antecipações | ✓ |
| CT05.3 | Valores calculados corretamente | ✓ |
| CT05.4 | Relatório PDF | — |
| CT05.5 | Funcionário com múltiplas antecipações no ciclo | ✓ |

**CT05.1 — Relatório CSV válido**  
Dado que o ciclo `2026-05` da empresa tem 4 antecipações aprovadas de 3 funcionários distintos  
Quando o contador seleciona o ciclo e solicita o CSV  
Então o sistema gera um arquivo com 4 linhas de dados, cabeçalho correto e download disponível

**CT05.2 — Ciclo sem antecipações**  
Dado que o ciclo `2026-04` existe mas nenhum funcionário solicitou antecipação nele  
Quando o contador tenta gerar o relatório desse ciclo  
Então o sistema exibe "Nenhuma antecipação aprovada neste ciclo" e não gera arquivo

**CT05.3 — Valores corretos**  
Dado que Ana antecipou R$ 350,00  
Quando o relatório é gerado  
Então a linha de Ana mostra: valor antecipado R$ 350,00, taxa R$ 9,90, total a descontar R$ 359,90

**CT05.4 — Relatório PDF**  
Dado que o sistema suporta geração de PDF  
Quando o contador seleciona o formato PDF  
Então o sistema gera um documento formatado com logotipo da empresa e tabela legível

> *MVP: somente CSV. PDF especificado para produção.*

**CT05.5 — Múltiplas antecipações do mesmo funcionário**  
Dado que Carlos fez 2 antecipações no ciclo `2026-05` (R$ 200,00 e R$ 150,00)  
Quando o relatório é gerado  
Então Carlos aparece em 2 linhas separadas, cada uma com sua taxa de R$ 9,90, totalizando R$ 369,80 a descontar

---

## UC06 — Acessar por CPF

**Ator:** Funcionário CLT  
**Pré-condições:** Funcionário cadastrado no sistema via upload de folha; link de acesso disponibilizado pela empresa ou pelo escritório.  
**Pós-condições:** Funcionário autenticado, sessão iniciada, página do funcionário exibida com saldo disponível e histórico.

### Fluxo principal

1. Funcionário recebe o link de acesso (contém identificador da empresa codificado na URL).
2. Funcionário acessa o link via navegador.
3. Sistema exibe campo único de entrada: CPF.
4. Funcionário informa o CPF e confirma.
5. Sistema localiza o registro pelo CPF + empresa codificada na URL.
6. Sistema valida que o funcionário está ativo.
7. Sistema exibe a página do funcionário: nome, saldo disponível, histórico de antecipações.

### Fluxos alternativos

**FA06.A — CPF não encontrado**  
No passo 5, se o CPF não existe para a empresa da URL:  
5a. Sistema exibe: "CPF não encontrado. Verifique se você está usando o link correto."  
5b. Campo de CPF é limpo. Retorna ao passo 4.

**FA06.B — Funcionário inativo**  
No passo 6, se o funcionário existe mas `status = inativo`:  
6a. Sistema exibe: "Seu acesso está desativado. Entre em contato com o RH."  
6b. Nenhuma informação adicional é exibida.

**FA06.C — CPF com formato inválido**  
No passo 4, se o CPF não tem 11 dígitos numéricos:  
4a. Sistema exibe: "CPF inválido." sem consultar o banco.  
4b. Retorna ao passo 4.

### Fluxos de exceção

**FE06.A — Link inválido ou manipulado**  
No passo 2, se o identificador de empresa na URL não existe no banco:  
2a. Sistema exibe página de erro: "Link inválido."  
2b. Nenhuma informação é exibida.

### Cenários de teste

| ID | Cenário | MVP |
|----|---------|-----|
| CT06.1 | Acesso com CPF válido e ativo | ✓ |
| CT06.2 | CPF correto mas funcionário inativo | ✓ |
| CT06.3 | CPF não cadastrado para a empresa | ✓ |
| CT06.4 | CPF com formato inválido | ✓ |
| CT06.5 | Link com empresa inexistente | ✓ |
| CT06.6 | Mesmo CPF em empresas diferentes via links diferentes | ✓ |

**CT06.1 — CPF válido e ativo**  
Dado que Maria (CPF `222.333.444-55`) está ativa na empresa vinculada ao link  
Quando Maria acessa o link e informa o CPF  
Então o sistema exibe a página com nome "Maria", saldo disponível e histórico de antecipações

**CT06.2 — Funcionário inativo**  
Dado que Pedro foi desligado e tem `status = inativo`  
Quando Pedro acessa o link e informa o CPF  
Então o sistema exibe mensagem de acesso desativado sem revelar nenhum dado

**CT06.3 — CPF não cadastrado**  
Dado que o CPF `999.888.777-66` não existe para a empresa do link  
Quando é informado na tela de acesso  
Então o sistema exibe "CPF não encontrado" sem detalhar se o CPF existe em outro contexto

**CT06.4 — CPF mal formatado**  
Dado que o funcionário informa `12345` (incompleto)  
Quando tenta confirmar  
Então o sistema rejeita antes de consultar o banco

**CT06.5 — Link com empresa inexistente**  
Dado que a URL contém um identificador de empresa que não existe  
Quando qualquer pessoa acessa o link  
Então o sistema exibe "Link inválido" sem revelar nenhum dado interno

**CT06.6 — Mesmo CPF em empresas diferentes**  
Dado que Ana trabalha em duas PMEs distintas, ambas usando o Ágio  
Quando acessa via link da Empresa A  
Então vê apenas o saldo e histórico referentes à Empresa A

---

## UC07 — Solicitar antecipação

**Ator:** Funcionário CLT  
**Pré-condições:** Funcionário autenticado via CPF; possui saldo disponível maior que zero.  
**Pós-condições:** Registro de `ANTECIPACAO` criado com status `aprovada`; saldo disponível do funcionário reduzido pelo valor solicitado; cobrança de R$ 9,90 registrada.

### Fluxo principal

1. Funcionário visualiza o saldo disponível na página.
2. Funcionário seleciona a opção de solicitar antecipação.
3. Sistema exibe o formulário com:
   - Saldo disponível
   - Campo de valor (numérico, com mínimo de R$ 50,00)
   - Resumo da taxa: R$ 9,90
   - Valor total a receber = valor solicitado (a taxa é descontada na folha, não do valor recebido)
4. Funcionário informa o valor desejado e confirma.
5. Sistema valida o valor contra o saldo disponível atual.
6. Sistema cria o registro de `ANTECIPACAO` com status `aprovada` e associa ao `CICLO_FOLHA` em aberto.
7. Sistema exibe confirmação: "Antecipação de R$ X,XX solicitada. O valor será depositado em até 1 dia útil."
8. Funcionário é redirecionado para a página com histórico atualizado.

### Fluxos alternativos

**FA07.A — Valor acima do saldo disponível**  
No passo 5, se o valor informado supera o saldo disponível:  
5a. Sistema exibe: "Valor acima do disponível. Seu saldo atual é R$ X,XX."  
5b. Campo de valor é mantido; retorna ao passo 4.

**FA07.B — Valor abaixo do mínimo**  
No passo 5, se o valor informado é menor que R$ 50,00:  
5b. Sistema exibe: "O valor mínimo para antecipação é R$ 50,00."  
5c. Retorna ao passo 4.

**FA07.C — Funcionário com menos de 3 meses de casa**  
No passo 3, o saldo disponível já reflete o teto reduzido calculado pelo sistema no momento do upload da folha. Não é necessário tratamento especial aqui — o limite já está aplicado.

**FA07.D — Segunda antecipação no mesmo ciclo**  
No passo 5, se já existe uma antecipação em aberto no ciclo:  
5d. Sistema verifica se o saldo restante (teto − soma das antecipações em aberto) cobre o novo valor.  
5e. Se cobre: prossegue normalmente para o passo 6.  
5f. Se não cobre: exibe o saldo disponível atualizado e retorna ao passo 4.

### Fluxos de exceção

**FE07.A — Sem ciclo de folha em aberto para a empresa**  
No passo 6, se não existe nenhum `CICLO_FOLHA` ativo para a empresa:  
6a. Sistema exibe: "Antecipações temporariamente indisponíveis. Aguarde o processamento da próxima folha."  
6b. Nenhum registro é criado.

**FE07.B — Concorrência: saldo alterado entre passo 3 e passo 5**  
No passo 5, se outro processo modificou o saldo disponível entre a exibição e a confirmação:  
5a. Sistema revalida o saldo no momento da confirmação.  
5b. Se saldo for insuficiente: exibe o novo saldo disponível e retorna ao passo 4.

> *FE07.B relevante em produção com volume. No MVP é desconsiderado.*

### Cenários de teste

| ID | Cenário | MVP |
|----|---------|-----|
| CT07.1 | Solicitação dentro do limite | ✓ |
| CT07.2 | Valor exatamente igual ao saldo disponível | ✓ |
| CT07.3 | Valor acima do saldo | ✓ |
| CT07.4 | Valor abaixo do mínimo | ✓ |
| CT07.5 | Segunda antecipação no mesmo ciclo com saldo restante | ✓ |
| CT07.6 | Segunda antecipação que esgota o limite | ✓ |
| CT07.7 | Teto reduzido para funcionário com menos de 3 meses | ✓ |
| CT07.8 | Ausência de ciclo em aberto | ✓ |
| CT07.9 | Taxa exibida corretamente | ✓ |

**CT07.1 — Solicitação dentro do limite**  
Dado que Maria tem saldo disponível de R$ 800,00  
Quando solicita R$ 400,00  
Então o sistema cria a antecipação, o saldo disponível passa para R$ 400,00 e a confirmação é exibida

**CT07.2 — Valor igual ao saldo disponível**  
Dado que o saldo disponível é R$ 800,00  
Quando o funcionário solicita exatamente R$ 800,00  
Então o sistema aprova e o saldo disponível passa para R$ 0,00

**CT07.3 — Valor acima do saldo**  
Dado que o saldo disponível é R$ 800,00  
Quando o funcionário informa R$ 850,00  
Então o sistema rejeita e exibe o saldo atual de R$ 800,00

**CT07.4 — Valor abaixo do mínimo**  
Dado que qualquer funcionário autenticado  
Quando solicita R$ 30,00  
Então o sistema rejeita e informa o valor mínimo de R$ 50,00

**CT07.5 — Segunda antecipação com saldo restante**  
Dado que Carlos tem teto de R$ 600,00 e já tem uma antecipação de R$ 200,00 em aberto  
Quando solicita mais R$ 300,00  
Então o sistema aprova (R$ 200 + R$ 300 = R$ 500 ≤ R$ 600) e saldo restante passa para R$ 100,00

**CT07.6 — Segunda antecipação que esgota o limite**  
Dado que o saldo disponível restante é R$ 100,00  
Quando o funcionário solicita R$ 150,00  
Então o sistema rejeita e informa que o saldo disponível é R$ 100,00

**CT07.7 — Teto reduzido**  
Dado que um funcionário com salário líquido R$ 2.000,00 tem `data_admissao` há 2 meses  
Quando acessa o sistema  
Então o saldo exibido é menor que R$ 800,00 conforme o teto reduzido aplicado pelo sistema

> *Percentual do teto reduzido a definir. Cenário especifica o comportamento esperado.*

**CT07.8 — Sem ciclo em aberto**  
Dado que a empresa não tem nenhum `CICLO_FOLHA` ativo  
Quando o funcionário tenta solicitar uma antecipação  
Então o sistema informa que antecipações estão temporariamente indisponíveis

**CT07.9 — Taxa exibida corretamente**  
Dado que o funcionário informa qualquer valor válido  
Quando o resumo do formulário é exibido  
Então a taxa de R$ 9,90 aparece separada do valor e o texto deixa claro que ela será descontada na folha, não do valor recebido

---

## UC08 — Consultar histórico

**Ator:** Funcionário CLT  
**Pré-condições:** Funcionário autenticado via CPF.  
**Pós-condições:** Nenhuma alteração de estado. Operação somente leitura.

### Fluxo principal

1. Funcionário acessa a página (já autenticado).
2. Sistema exibe o histórico de antecipações em ordem cronológica decrescente, com para cada registro:
   - Data de solicitação
   - Valor antecipado
   - Taxa cobrada (R$ 9,90)
   - Status: `aprovada`, `descontada`, `cancelada`
   - Ciclo de referência (mês/ano da folha em que será ou foi descontada)
3. Funcionário lê o histórico.

### Fluxos alternativos

**FA08.A — Sem histórico**  
No passo 2, se não existe nenhuma antecipação para o funcionário:  
2a. Sistema exibe estado vazio: "Você ainda não fez nenhuma antecipação."  
2b. O restante da página com saldo disponível permanece visível.

### Fluxos de exceção

Nenhum relevante para leitura pura.

### Cenários de teste

| ID | Cenário | MVP |
|----|---------|-----|
| CT08.1 | Histórico com múltiplas antecipações | ✓ |
| CT08.2 | Histórico vazio | ✓ |
| CT08.3 | Status corretos por antecipação | ✓ |
| CT08.4 | Ordem cronológica decrescente | ✓ |

**CT08.1 — Histórico com múltiplas antecipações**  
Dado que o funcionário tem 4 antecipações em estados diferentes  
Quando acessa a página  
Então vê as 4 registradas com data, valor, taxa e status corretos para cada uma

**CT08.2 — Histórico vazio**  
Dado que o funcionário nunca solicitou uma antecipação  
Quando acessa a página  
Então vê o estado vazio com a mensagem correspondente e o saldo disponível visível

**CT08.3 — Status corretos**  
Dado que uma antecipação foi descontada na folha do mês anterior  
Quando o funcionário consulta o histórico  
Então essa antecipação aparece com status `descontada` e não como `aprovada`

**CT08.4 — Ordem cronológica**  
Dado que o funcionário tem antecipações de março, abril e maio  
Quando acessa o histórico  
Então a de maio aparece primeiro

---

## Relacionamentos `<<include>>`

Dois processos internos são acionados automaticamente por casos de uso do ator e não aparecem no diagrama principal por serem invisíveis ao usuário:

**UC03 inclui → Processar e validar CSV**  
Ao confirmar o upload, o sistema executa a validação de estrutura, processamento linha a linha, criação/atualização de funcionários e cálculo de tetos. O contador não aciona isso separadamente — é parte obrigatória do UC03.

**UC07 inclui → Calcular saldo disponível**  
Ao exibir o formulário de solicitação, o sistema calcula o saldo disponível em tempo real: teto do funcionário menos a soma das antecipações em aberto no ciclo atual. O funcionário nunca vê o teto bruto, apenas o saldo já deduzido.

# Jornada do usuário — Ágio

## Visão geral

O Ágio tem dois atores com jornadas distintas que se cruzam em um ponto específico: o upload da folha de pagamento. Antes desse ponto, apenas o contador opera o sistema. Depois dele, o funcionário ganha acesso. Essa dependência não é técnica por acaso — ela reflete a lógica de negócio: o sistema só pode calcular o teto de antecipação de um trabalhador depois de conhecer o salário líquido daquele ciclo.

O diagrama de jornada está organizado em três fases horizontais e dois swim lanes verticais, um por ator.

## Fase 1 — Preparação

**Quem age:** somente o Contador.

O ciclo começa quando o escritório de contabilidade fecha a folha de pagamento no sistema que já usa — Domínio, Totvs, Senior ou qualquer outro. Esse fechamento acontece fora do Ágio. O contador exporta o arquivo CSV gerado pelo sistema de folha e acessa o Ágio.

### Passo 1 · Login

O contador entra com e-mail e senha no painel do escritório. O sistema retorna os dados do escritório vinculado àquele e-mail e inicia a sessão. A partir daí, todas as ações do contador são contextualizadas dentro do escritório dele — ele só enxerga as empresas que ele mesmo cadastrou.

**Tela:** 1 (Login)

---

## Fase 2 — Em andamento

**Quem age:** Contador (início da fase) e Funcionário CLT (após ativação).

### Passo 2 · Upload de folha CSV — ponto de ativação

O contador seleciona a empresa, informa a competência do ciclo (ex: `2026-05`) e faz o upload do CSV exportado do sistema de folha. O arquivo precisa conter quatro colunas: `cpf`, `nome`, `salario_liquido` e `data_admissao`.

O sistema processa o arquivo linha a linha:

- Para cada CPF já cadastrado na empresa, atualiza o `salario_liquido` e a `data_admissao`.
- Para cada CPF novo, cria um registro de `FUNCIONARIO` com status `ativo`.
- Linhas sem CPF ou sem salário são ignoradas e contabilizadas no resumo.
- Um registro de `CICLO_FOLHA` é criado com a competência informada e status `processada`.
- Se já existia um ciclo com a mesma competência para aquela empresa, ele é marcado como `inativa` antes da criação do novo.

Com o `CICLO_FOLHA` criado, o sistema já tem tudo que precisa para calcular o teto de cada funcionário: `salario_liquido` do ciclo atual, `data_admissao` para definir se aplica teto cheio (40%) ou reduzido (20%, para menos de 90 dias de empresa), e o histórico de antecipações em aberto para calcular o saldo disponível.

**Esse é o ponto de ativação.** Antes do upload, nenhum funcionário consegue solicitar antecipação — não há `CICLO_FOLHA` ativo para ancorar a transação. Depois do upload, todos os funcionários importados naquele ciclo podem acessar o sistema.

**Tela:** 3 (painel da empresa, modal de upload)

### Passo 3 · Funcionário recebe o link de acesso

O funcionário recebe um link gerado pelo escritório ou pela empresa. O link contém o identificador da empresa codificado na URL (`?empresa_id=X`). Esse link pode ser enviado por WhatsApp, e-mail ou fixado em um mural interno — o canal não é gerenciado pelo Ágio.

O funcionário não precisa criar conta. Não há cadastro. O CPF dele já está no sistema porque foi importado via CSV no passo anterior.

**Externo ao sistema.**

---

### Passo 4 · Acesso por CPF

O funcionário abre o link no navegador do celular ou computador. O sistema exibe o nome da empresa vinculada à URL e um campo único de entrada: o CPF.

O funcionário informa o CPF. O sistema localiza o registro pelo CPF combinado com o `empresa_id` da URL. Se o CPF não existe para aquela empresa, retorna erro sem revelar se o CPF existe em outro contexto. Se o funcionário está inativo, retorna mensagem de acesso desativado. Se está ativo, a sessão é iniciada e a página principal é exibida.

**Tela:** 5 (acesso por CPF)

---

### Passo 5 · Solicitação de antecipação

A página principal exibe o saldo disponível do funcionário em destaque. O saldo é calculado em tempo real: teto do ciclo menos a soma de todas as antecipações com status `aprovada` no ciclo ativo. Abaixo do saldo, há o botão de solicitar.

O funcionário informa o valor desejado. O sistema valida:

1. O valor é maior ou igual a R$ 50,00?
2. O valor não ultrapassa o saldo disponível calculado no momento da confirmação — não no momento em que o formulário foi aberto?
3. O funcionário ainda está ativo?
4. Ainda existe um `CICLO_FOLHA` ativo para a empresa?

Se todas as validações passam, o sistema cria o registro de `ANTECIPACAO` com status `aprovada`, vinculado ao funcionário e ao `CICLO_FOLHA` ativo. A taxa de R$ 9,90 é registrada separadamente do valor — ela será descontada na folha junto com o valor antecipado, não deduzida do depósito.

O funcionário pode fazer mais de uma antecipação no mesmo ciclo, desde que haja saldo disponível. Cada antecipação gera um registro separado com sua própria taxa.

**Telas:** 6 (dashboard com saldo) e 7 (formulário de solicitação)

### Passo 6 · Consulta de histórico

A qualquer momento durante o ciclo, o funcionário pode acessar o histórico completo de antecipações. Os registros são agrupados por competência e ordenados do mais recente para o mais antigo. Cada registro exibe o valor antecipado, a taxa cobrada, a data da solicitação e o status atual.

Os status possíveis são:

- `aprovada`: a antecipação foi registrada e aguarda o fechamento do ciclo para ser descontada.
- `descontada`: o desconto já foi processado pelo contador em um ciclo anterior.
- `cancelada`: a antecipação foi cancelada antes do fechamento do ciclo.

O histórico não é filtrado por ciclo ativo — o funcionário vê toda a sua história na empresa, o que inclui ciclos anteriores com antecipações já descontadas.

**Tela:** 8 (histórico)

## Fase 3 — Fechamento do ciclo

**Quem age:** somente o Contador.

No fechamento do ciclo — normalmente no final do mês, quando a folha é encerrada — o contador retorna ao Ágio.

### Passo 7 · Monitoramento no painel

Durante todo o período em que os funcionários podem solicitar antecipações, o contador tem visibilidade do painel. A lista de funcionários mostra, para cada um, o teto disponível atualizado, o total antecipado no ciclo e o status (`sem antecipação`, `com antecipação` ou `limite esgotado`). O contador pode clicar em qualquer funcionário para ver o histórico completo com cada transação e seu status individual.

Esse monitoramento não requer nenhuma ação do contador — é leitura pura. Mas serve como instrumento de controle antes de gerar o relatório final.

**Telas:** 3 (lista de funcionários) e 4 (detalhe do funcionário)

### Passo 8 · Geração do relatório de descontos

Com o ciclo encerrado, o contador clica em "Gerar relatório" no painel da empresa. O sistema agrupa todas as antecipações com status `aprovada` daquele `CICLO_FOLHA` e gera um arquivo CSV com as colunas:

| Campo | Descrição |
|---|---|
| `nome` | Nome do funcionário |
| `cpf` | CPF do funcionário |
| `valor` | Valor antecipado |
| `taxa` | R$ 9,90 por antecipação |
| `total_a_descontar` | valor + taxa |
| `data_solicitacao` | Data da solicitação |

O contador baixa o arquivo e lança cada linha como desconto na folha de pagamento, exatamente como qualquer outro desconto — plano de saúde, vale-transporte, empréstimo consignado. O Ágio não interfere no sistema de folha do cliente. Esse é o diferencial operacional central do produto: ele entra no fluxo existente sem substituir nada.

Após o lançamento dos descontos, o contador pode atualizar manualmente o status das antecipações para `descontada` — ou isso pode ser automatizado em versões futuras quando houver integração via API com os sistemas de folha.

**Tela:** 3 (painel da empresa, botão "Gerar relatório")

## Conexão entre as jornadas

O ponto em que as jornadas se tocam é único e assimétrico: o upload da folha feito pelo contador é condição necessária para que qualquer funcionário acesse o sistema naquele ciclo. Não existe caminho inverso — o funcionário não tem como acionar o contador, não recebe notificações e não vê o que acontece no painel do escritório.

Essa assimetria é intencional. O Ágio não é um produto de colaboração entre contador e funcionário. É um produto onde o contador habilita e o funcionário consome. A separação de contextos — painel web desktop para o contador, página mobile-first para o funcionário — reflete exatamente isso.

## Lacunas abertas

- **Notificação ao funcionário:** hoje o funcionário depende de receber o link manualmente. Não há notificação automática quando o upload da folha é processado. Isso é uma fricção real que só será endereçada após validação com usuários reais.
- **Atualização de status para `descontada`:** o sistema registra `aprovada` mas não atualiza automaticamente para `descontada` após o fechamento do ciclo. O fluxo manual é aceitável no MVP mas precisará ser resolvido em produção.
- **Comunicação do teto reduzido:** o sistema aplica 20% para funcionários com menos de 90 dias, mas não exibe ao funcionário por que o saldo é menor do que ele esperaria. Isso pode gerar confusão e precisa de tratamento de UX.

# Wireframe

As telas estão divididas em dois grupos: painel do escritório (acesso do contador) e página do funcionário (acesso do trabalhador CLT via link + CPF). O fluxo completo entre elas está documentado na jornada do usuário.

Ponto de entrada do contador. Aceita e-mail e senha vinculados ao escritório de contabilidade. No MVP, qualquer credencial é aceita — a autenticação real será implementada em produção. O acesso é restrito ao painel do escritório; o funcionário nunca passa por esta tela.

> **![\[png\]](https://res.cloudinary.com/dloj4cl3v/image/upload/v1778871026/wireframe-tela-1-login_ekvixi.jpg)**

Visão geral do escritório. Exibe todas as empresas cadastradas pelo contador, com o total de funcionários ativos e o valor antecipado no ciclo atual. O painel de métricas no topo consolida os números de todas as empresas e calcula a comissão estimada do escritório (25% da receita bruta). Clicar em uma empresa leva ao painel de funcionários daquela empresa.

> **![\[png\]](https://res.cloudinary.com/dloj4cl3v/image/upload/v1778871043/wireframe-tela-2-empresas_pspdtd.jpg)**

Lista todos os funcionários ativos da empresa selecionada, com salário líquido, teto disponível e status de antecipação no ciclo atual. O teto exibido já desconta antecipações em aberto — o contador vê o saldo real, não o teto bruto. Os botões de upload de folha e geração de relatório ficam nesta tela, contextualizados à empresa selecionada.


> **![\[png\]](https://res.cloudinary.com/dloj4cl3v/image/upload/v1778871050/wireframe-tela-3-funcionarios_jm75sn.jpg)**

Ficha individual do funcionário com três métricas de topo — teto total, saldo disponível e total antecipado no ciclo — seguidas do histórico completo de antecipações, incluindo ciclos anteriores. O status de cada registro reflete o estado atual: Aprovada para antecipações do ciclo em aberto, Descontada para as que já passaram pelo fechamento de folha.

> **![\[png\]](https://res.cloudinary.com/dloj4cl3v/image/upload/v1778871056/wireframe-tela-4-detalhe_tz7fqd.jpg)**

Entrada do trabalhador no sistema. Acessada via link que contém o identificador da empresa na URL. O funcionário não cria conta nem escolhe senha — informa apenas o CPF, que já está cadastrado pelo upload da folha. A nota informativa na parte inferior deixa explícito que o acesso não requer nenhuma ação prévia do trabalhador.


> **![\[png\]](https://res.cloudinary.com/dloj4cl3v/image/upload/v1778871170/wireframe-tela-5-acesso-cpf_xhybgt.jpg)**

Tela principal do funcionário após o acesso. O saldo disponível ocupa o destaque visual porque é a única informação que o trabalhador precisa antes de qualquer decisão. A barra de progresso abaixo do valor mostra quanto do teto já foi consumido sem precisar de texto adicional. As últimas antecipações aparecem logo abaixo com acesso rápido ao histórico completo.

> **![\[png\]](https://res.cloudinary.com/dloj4cl3v/image/upload/v1778871150/wireframe-tela-8-historico_s4yjmp.jpg)**

Tela principal do funcionário após o acesso. O saldo disponível ocupa o destaque visual porque é a única informação que o trabalhador precisa antes de qualquer decisão. A barra de progresso abaixo do valor mostra quanto do teto já foi consumido sem precisar de texto adicional. As últimas antecipações aparecem logo abaixo com acesso rápido ao histórico completo.

> **![\[png\]](https://res.cloudinary.com/dloj4cl3v/image/upload/v1778871156/wireframe-tela-7-solicitar_rnmb1n.jpg)**

Lista completa de antecipações agrupadas por competência, em ordem cronológica decrescente. O agrupamento por mês facilita a leitura para trabalhadores que fazem múltiplas antecipações por ciclo. O status de cada registro — Aprovada ou Descontada — dá ao funcionário visibilidade sobre o que já foi descontado e o que ainda está em aberto.CompartilharConteúdoVou criar o backend completo da fintech Ágio conforme especificado. Esta é uma tarefa complexa que requer múltiplos arquivos e configurações.

> **![\[png\]](https://res.cloudinary.com/dloj4cl3v/image/upload/v1778871162/wireframe-tela-6-dashboard_wduo3p.jpg)**