# Sprint 4 — Modelo de Negócio
**Ágio | Semanas 7–8**

---

## 1. O que essa sprint precisa responder

As três sprints anteriores construíram o diagnóstico do Ágio. A sprint 1 mapeou o problema e o mercado. A sprint 2 revelou que eu estava validando com as pessoas erradas e que a dor real mora no lado do funcionário, não do empresário. A sprint 3 transformou esse aprendizado em proposta de valor estruturada: um produto de acesso a crédito emergencial para trabalhadores CLT de base, distribuído via escritórios de contabilidade que já têm a confiança das PMEs.

Mas nenhuma dessas sprints respondeu a pergunta mais concreta de todas: como o Ágio ganha dinheiro? E mais importante ainda, o modelo é viável? Essa sprint existe para responder isso sem ilusão. Não basta dizer "cobra uma taxa do funcionário". É necessário saber quanto, por quê esse número e não outro, quanto custa operar, de onde vem o capital para emprestar, quem são os concorrentes reais e o que os separa do Ágio, e quais são os riscos que podem matar o negócio antes dele andar.

---

## 2. Business Model Canvas

O BMC do Ágio tem uma lógica de três camadas que precisa ser entendida antes de qualquer detalhe. O Ágio não é um banco que empresta dinheiro diretamente ao consumidor. É uma plataforma que encaixa três partes — escritório de contabilidade, empresa e funcionário — em uma relação onde cada uma ganha algo sem precisar abrir mão de nada que já tem.

**Segmentos de clientes:** o produto financeiro é para o funcionário CLT com renda de até 3 salários mínimos em PMEs de setores com mão de obra operacional de base: manufatura, varejo, franquias, terceirização. É ele quem tem a dor, usa o app e paga pela antecipação. O escritório de contabilidade não é exatamente um cliente, mas um parceiro de canal. Sem ele, o modelo não escala, porque ele é quem tem a confiança do empresário e os dados de folha necessários para operar o produto.

**Proposta de valor:** para o funcionário, acesso a crédito de emergência sem análise de Serasa, com desconto automático na folha, tíquete de R$ 150 a R$ 300, via app, em minutos. Para o escritório, uma nova linha de receita recorrente sobre a carteira que ele já tem, sem custo operacional adicional. Para a empresa, um benefício diferenciado para o funcionário sem custo e sem risco para o empregador.

**Canais:** o escritório de contabilidade é o canal de aquisição de empresas. O app (ou no MVP, um link protegido por CPF) é o canal de entrega do produto ao funcionário.

**Relacionamento:** com o escritório, uma parceria comercial ativa onde o Ágio faz o trabalho pesado — onboarding, comunicação com os funcionários, suporte — e o escritório só precisa apresentar o produto ao cliente e assinar o contrato de parceria. Com o funcionário, um produto digital self-service, sem necessidade de interação humana no uso cotidiano.

**Recursos-chave:** tecnologia (o painel do escritório e o app do funcionário), capital de giro para financiar as antecipações antes do desconto na folha, equipe comercial enxuta para aquisição de escritórios e infraestrutura regulatória via parceiro fintech licenciado.

**Atividades-chave:** desenvolvimento e manutenção do painel, aquisição e onboarding de escritórios, gestão do ciclo de crédito (concessão, desconto e reconciliação) e monitoramento de inadimplência.

**Parcerias-chave:** escritórios de contabilidade como canal. Fintech parceira (QI Tech ou similar) como infraestrutura regulatória. Integração com ERPs de folha: Thomson Reuters Domínio, Senior, Totvs. FIDC para estruturação do capital de crédito na fase de escala.

---

> **![\[agio-bmc-parte1.png\]](https://res.cloudinary.com/dbonpjng9/image/upload/v1773706275/agio-bmc-parte1_sgzapj.png)**
>
> *O canvas acima sintetiza os sete blocos centrais do modelo: parcerias, atividades, proposta de valor, relacionamento, recursos, canais e segmentos. A leitura mais importante está na coluna central — a proposta de valor é diferente para cada um dos três participantes, e é exatamente essa diferença que sustenta o modelo. O escritório ganha receita passiva. A empresa ganha benefício sem custo. O funcionário ganha crédito sem burocracia.*

---

## 3. Estratégia de receita e pricing

### Como o Ágio ganha dinheiro

A fonte principal de receita é a taxa cobrada do funcionário em cada antecipação. Não é juro mensal: é um fee por transação. Essa distinção é mais do que semântica, porque define o posicionamento do produto, a experiência do usuário e as implicações regulatórias.

Para chegar em um número defensável, é necessário entender o espectro de preços do mercado de crédito para o trabalhador de base no Brasil.

No topo do mercado formal, o crédito consignado privado CLT cobra em média entre 3,8% e 4,2% ao mês, segundo levantamento do Banco Central e Procon-SP de 2024. É o produto mais barato disponível para o trabalhador formal, mas tem uma barreira que o Ágio elimina: exige uma estrutura de convênio formal entre empresa e banco, processo burocrático que a maioria das PMEs pequenas nunca implementou. O cheque especial — que ainda é a saída de muita gente — cobra em torno de 12% a 16% ao mês. E o mercado informal, que inclui financeiras, apps de crédito emergencial e empréstimos entre pessoas, opera entre 10% e 30% ao mês. Esses números do mercado informal não são hipotéticos: nas reclamações públicas do Mêntore Bank no Reclame Aqui, aparecem relatos de antecipações de 13º salário com custo implícito de 30%+ ao mês. O próprio Mêntore, referência positiva do modelo, cobra em torno de R$ 20 por mês sobre um crédito de R$ 200, o que equivale a 10% ao mês.

A Xerpa, o player de antecipação salarial mais próximo do que o Ágio pretende ser no Brasil, adotou uma lógica diferente: cobra uma taxa fixa de R$ 5 por transação, independentemente do valor antecipado. Para um tíquete de R$ 350, isso representa 1,4%. Para R$ 100, representa 5%. É um modelo simples, transparente, e que não escala com o valor do empréstimo — o que favorece quem precisa de pouco, que é exatamente o perfil do usuário.

O Ágio se posiciona com uma **taxa fixa de R$ 8 por antecipação, ou 3,5% do valor, o que for maior**. Para o tíquete médio esperado de R$ 200, isso significa R$ 8 de custo — muito abaixo do mercado informal, mais caro do que o consignado privado bancário (que não está disponível para esse segmento), e dentro de uma faixa que o funcionário consegue absorver sem transformar o produto em armadilha financeira.

---

> **![\[agio-pricing.png\]](https://res.cloudinary.com/dbonpjng9/image/upload/v1773706971/agio-pricing-v2_ybblex.png)**
>
> *O diagrama acima posiciona o Ágio no espectro de preços do mercado de crédito para o trabalhador CLT. O ponto central é o seguinte: o Ágio não compete com o consignado bancário — compete com o vácuo. O trabalhador negativado não tem acesso ao consignado bancário (que exige convênio formal) nem ao cheque especial (que exige conta com limite). O que existe para ele hoje são financeiras e apps que cobram entre 10% e 30% ao mês. O Ágio entra nesse vácuo com um fee fixo de R$ 8, transparente e previsível.*

---

Essa estrutura de fee fixo em vez de juro percentual ao mês tem uma vantagem regulatória relevante. Nos EUA, o DailyPay e o EarnIn operaram durante anos com fee por transação justamente para evitar a classificação como produto de crédito sujeito a caps de juros estaduais. No Brasil, o ambiente regulatório é diferente, mas a lógica de "acesso antecipado a salário já ganho" em vez de "empréstimo" pode simplificar o enquadramento do produto perante o Banco Central. Vale explorar com assessoria jurídica especializada em fintechs antes de fechar essa decisão.

Projetando com conservadorismo: um funcionário ativo usa o produto 1,5 vezes por mês em média, com tíquete de R$ 200 e fee de R$ 8. Isso gera **R$ 12 de receita bruta por funcionário ativo por mês**. É um número pequeno por usuário, mas que escala com o volume de escritórios e funcionários cadastrados, com custo marginal próximo de zero para cada novo usuário ativado dentro de uma empresa já parceira.

### A comissão do escritório

O escritório de contabilidade recebe **20% da receita de taxa gerada pela sua carteira de clientes**, pago mensalmente. Essa divisão foi calculada para ser vantajosa ao Ágio enquanto ainda sendo atrativa o suficiente para motivar o escritório.

Para entender por que 20% é suficiente para o escritório, é preciso olhar para o que essa comissão representa na prática. Segundo o Mapa dos Contadores da Cora (2023), o faturamento mensal médio de um escritório de contabilidade brasileiro é de R$ 15 mil. Um escritório que ativa 10 empresas com 30 funcionários cada — 300 trabalhadores elegíveis no total — pode gerar, com 30% de taxa de ativação, 90 usuários ativos. Com receita bruta de R$ 12 por usuário, são R$ 1.080 de receita gerada para o Ágio. Desses, R$ 216 vão para o escritório como comissão — sem ele fazer nada além da ativação inicial. São R$ 216/mês passivos, o que representa 1,4% de acréscimo sobre o faturamento médio do escritório. Pode parecer pouco, mas esse número cresce com cada empresa e cada funcionário ativo adicionado, sem custo adicional para o escritório.

A pergunta é se esse valor é atrativo o suficiente para motivar a adoção. A resposta honesta é: depende de como o Ágio comunica e entrega a parceria. Se o processo de onboarding for simples, o suporte for bom, e o produto funcionar, o escritório vai enxergar essa comissão como dinheiro que aparece todo mês sem esforço. Se houver fricção, se o produto gerar reclamação de clientes, ou se o onboarding for lento, a comissão não vai compensar o incômodo. Por isso, a qualidade da execução no MVP é mais determinante do que o percentual da comissão.

---

## 4. Estrutura de custos

### O custo mais crítico: capital para emprestar

Antes de qualquer outro custo operacional, o Ágio precisa resolver de onde vem o dinheiro que ele empresta aos funcionários. Isso não é um detalhe técnico: é a decisão financeira mais importante do modelo.

O ciclo de crédito do Ágio tem uma característica que torna o capital relativamente barato de administrar: os ciclos são curtos. O funcionário antecipa R$ 200 e o desconto acontece em até 30 dias — na maioria dos casos, menos de 15 dias. Isso significa que o capital gira rápido. Para uma carteira de R$ 300 mil em antecipações ativas, o Ágio precisa ter R$ 300 mil disponíveis, mas esse valor é recuperado e reutilizado várias vezes ao mês.

Na fase de MVP, o capital deve vir de aporte inicial próprio ou de investidor-anjo. Não há complexidade financeira justificada para testar o modelo com os primeiros 3 a 5 escritórios parceiros. O objetivo do MVP é validar o ciclo — escritório cadastra empresa, funcionário solicita antecipação, desconto acontece na folha, sem inadimplência — antes de estruturar capital em escala.

Na fase de escala, a estrutura natural é o FIDC — Fundo de Investimento em Direitos Creditórios — o mesmo modelo que o Mêntore Bank usa. O FIDC permite captar capital de investidores institucionais usando a própria carteira de recebíveis como lastro. Os descontos futuros em folha, que têm risco próximo de zero porque o desconto é automático, são os recebíveis que lastreiam o fundo. O custo de capital via FIDC tende a operar entre CDI + 2% e CDI + 5% ao ano dependendo da qualidade da carteira e do histórico de inadimplência da operação. Com inadimplência baixa e histórico comprovado, o custo de capital cai ao longo do tempo, o que aumenta a margem do negócio à medida que ele cresce.

Uma alternativa mais rápida para a fase intermediária é captar de investidores via equity. Em vez de estruturar um FIDC antes de ter histórico de carteira, o Ágio levanta capital de risco que serve tanto para operar quanto para emprestar. É mais caro em termos de diluição do fundador, mas mais simples de executar e não exige o volume mínimo necessário para um FIDC ser viável. Os dois caminhos não são excludentes: equity financia o início, FIDC estrutura a escala.

### Infraestrutura tecnológica e regulatória

O Ágio não precisa construir toda a infraestrutura financeira do zero. A QI Tech oferece Banking as a Service (BaaS): infraestrutura já regulada pelo Banco Central para emissão de contas, processamento de pagamentos e crédito. Operar sob o guarda-chuva da QI Tech significa que o Ágio não precisa de licença própria no início. Age como correspondente bancário de uma instituição já regulada, o que acelera o tempo de chegada ao mercado em meses.

O custo da QI Tech varia conforme volume de transações, mas para o MVP pode ser estruturado como fee por transação processada — sem investimento fixo relevante. É o modelo mais adequado para a fase de validação, onde o volume de transações ainda é baixo e a previsibilidade de custo é mais importante do que a escala.

Além da infraestrutura de pagamentos, o Ágio precisa desenvolver dois produtos de software: o painel do escritório e o app do funcionário. No MVP, o desenvolvimento pode ser terceirizado para uma equipe pequena. O custo estimado de desenvolvimento e manutenção fica entre R$ 15 mil e R$ 25 mil por mês, dependendo do escopo e da equipe contratada. Esse é um custo que cai como percentual da receita à medida que o produto escala, mas é fixo nas fases iniciais.

### Custo de aquisição do canal

Uma das vantagens estruturais do modelo via escritórios de contabilidade é o custo de aquisição comparativamente baixo. Em vez de precisar de uma equipe comercial para bater de porta em porta em cada PME, o que a Xerpa e a Creditas fazem para empresas médias e grandes, o Ágio fecha um contrato com um escritório e acessa toda a carteira de clientes dele de uma vez.

A estimativa de custo de aquisição é a seguinte: com um profissional de vendas dedicado, é razoável esperar 4 a 6 escritórios ativados por mês em fase inicial — considerando que cada ativação envolve 2 a 3 reuniões e um processo de onboarding. Com custo de R$ 7 mil por mês de time comercial, o custo de aquisição por escritório fica entre R$ 1.200 e R$ 1.700. Como cada escritório representa múltiplas empresas e centenas de funcionários potenciais, o custo de aquisição por usuário final é muito menor do que em um modelo de venda direta.

### Visão consolidada dos custos no MVP

O Ágio precisa de aproximadamente R$ 50 a R$ 65 mil por mês para operar o MVP com time mínimo (desenvolvimento, infraestrutura BaaS, vendas e operação). Para cobrir esse custo com a receita do produto, considerando 80% de margem bruta sobre as taxas depois da comissão do escritório, são necessários aproximadamente 4.500 a 5.500 funcionários ativos usando o produto mensalmente. Isso equivale a cerca de 15 a 20 empresas com 30 funcionários cada, ou 5 a 7 escritórios parceiros com carteiras médias ativadas. É um número atingível no horizonte de 6 a 9 meses de operação, não no primeiro mês, mas tampouco em um horizonte distante.

---

> **![\[agio-bmc-parte2.png\]](https://res.cloudinary.com/dbonpjng9/image/upload/v1773707608/agio-bmc-parte2_w3fhq7.png)**
>
> *O canvas acima detalha a estrutura financeira do modelo: de um lado, os custos que o Ágio precisa cobrir para operar; do outro, as fontes de receita e os números que definem a saúde do unit economics. Os dois cards de destaque no canto inferior mostram o que realmente importa: o break-even está em 4.800 usuários ativos, o equivalente a 6 escritórios parceiros com carteiras médias ativadas.*

---

## 5. Concorrência: quem está no mercado e por que o espaço do Ágio existe

A pesquisa para esta sprint revelou que o mercado de antecipação salarial no Brasil tem players estabelecidos, capitalizados e com tração real — o que confirma que o mercado existe, mas também exige que o posicionamento do Ágio seja preciso.

A **Xerpa** é o concorrente com o modelo mais próximo do que o Ágio propõe: fee por transação, integração com folha de pagamento, produto entregue via app para o funcionário. Fundada em 2015, captou mais de US$ 18 milhões de fundos venture capital, atende empresas Ri Happy, Valid, Cargo X, e Rappi. O problema para o Ágio: a Xerpa foca em empresas médias e grandes com RH estruturado e equipes de dezenas a milhares de funcionários. Seu canal de aquisição é direto com essas empresas via equipe comercial própria. 

A **Creditas** entrou na antecipação salarial em 2020 via aquisição da Creditoo e hoje oferece consignado privado e antecipação como parte de um portfólio financeiro mais amplo. É uma empresa com mais de R$ 1 bilhão captado e relevância consolidada no mercado de crédito com garantia. Mas seu foco é em empresas que já têm infraestrutura de RH para implementar um convênio de consignado — o que exclui a maioria das PMEs pequenas.

**Flash e Caju** são primariamente plataformas de benefícios — VR, VT, VA flexível — que adicionaram antecipação salarial como funcionalidade secundária, não como produto core. Têm presença relevante no mercado de benefícios, mas a antecipação não é o que as define nem o que seus times comerciais priorizam.

**Bullla** tem um cartão de adiantamento salarial como produto principal, com mais de R$ 170 milhões em crédito concedido em 2021. Foca nas classes C e D — sobreposição com o segmento do Ágio — mas vai diretamente às empresas, sem usar escritórios de contabilidade como canal.

A referência global mais relevante é o duo **DailyPay e EarnIn**, dos Estados Unidos. O DailyPay cobra uma taxa por transferência instantânea (até US$ 3,49) e integra com o payroll das empresas parceiras, funcionando como benefício corporativo. O EarnIn opera com gorjeta voluntária e acesso de até US$ 150 por dia, sem relação com o empregador. Ambos operam sob o conceito de Earned Wage Access (EWA), acesso antecipado a salário já ganho sem ser classificado como empréstimo, e foram responsáveis por popularizar o modelo em escala. O DailyPay tem mais de 1 milhão de usuários e parcerias com Amazon, Target e McDonald's. Nenhum dos dois opera no Brasil ainda.

O espaço do Ágio fica claro quando se mapeia onde cada concorrente está. A Xerpa, Creditas, Flash, Caju e Bullla vão atrás de empresas maiores via canal comercial direto. Nenhum usa escritórios de contabilidade como canal de distribuição. Nenhum foca em PMEs de 10 a 100 funcionários como segmento principal. Esse segmento é ignorado não porque a dor não existe, mas porque o custo de aquisição empresa por empresa torna o modelo inviável para players com estrutura comercial cara. O Ágio resolve esse problema pelo canal: um escritório com 80 clientes PMEs é um ponto de entrada que nenhum dos concorrentes está usando.

---

> **![\[agio-competitive-map.png\]](https://res.cloudinary.com/dbonpjng9/image/upload/v1773707849/agio-competitive-map_nxwkc3.png)**
>
> *O mapa acima plota os principais concorrentes em dois eixos: porte da empresa atendida (vertical) e barreira de adoção para o empresário (horizontal). Todos os players capitalizados estão no quadrante de empresas grandes com barreira média a alta — eles precisam que a empresa mude algo relevante no seu processo para adotar o produto. O quadrante de PME com baixa barreira, onde o Ágio se posiciona, está praticamente vazio. Não é acidente: é uma consequência estrutural do modelo de venda direta que todos os concorrentes usam.*

---

## 6. Riscos e mitigações

### Risco 1 — Não conseguir ativar escritórios de contabilidade como parceiros

É o risco mais imediato como o principal. Um escritório bem estabelecido tem seu modelo funcionando, seus clientes satisfeitos e pouco incentivo para adicionar complexidade. O Ágio precisa entrar como algo que simplifica a vida do escritório, não que adiciona trabalho.

A mitigação começa antes da primeira reunião comercial: o produto para o escritório precisa ser tão simples quanto possível. Zero risco, zero trabalho operacional, comissão passiva que aparece todo mês sem esforço. O Ágio faz o onboarding das empresas, cria os materiais de comunicação para os funcionários, oferece suporte técnico e operacional. O escritório assina um contrato e faz uma apresentação ao cliente. É tudo.

Além disso, a forma mais eficiente de ativar os primeiros escritórios é via rede pessoal — exatamente as conexões no mundo contábil que você mencionou ter, ainda que não totalmente exploradas. O primeiro escritório parceiro provavelmente não virá de prospecção fria. Virá de uma conversa com alguém que já conhece você, entende o modelo e decide testar porque confia na proposta.

### Risco 2 — Regulação: operar crédito sem a licença adequada

Para operar crédito no Brasil de forma legal, é necessária alguma forma de regulação pelo Banco Central. As opções principais são três. A primeira, e mais rápida no MVP, é operar como correspondente bancário de uma fintech já licenciada, como a QI Tech. Isso permite ao Ágio oferecer crédito sob o guarda-chuva regulatório de um parceiro, sem precisar de licença própria. A segunda opção é constituir uma Instituição de Pagamento, que requer registro no Banco Central e um processo mais longo. A terceira é estruturar um FIDC com banco custodiante, que não requer licença de crédito própria mas precisa de um gestor de fundo regulado.

Para o MVP, o caminho via correspondente bancário é o mais adequado: rápido, simples, e suficiente para validar o ciclo. A decisão sobre licença própria só faz sentido quando o volume justifica o custo e a complexidade. Vale ressaltar que essa é uma decisão que requer orientação jurídica especializada, pois as nuances de enquadramento do produto como "antecipação salarial" versus "empréstimo consignado" têm implicações diretas na regulação aplicável.

### Risco 3 — Inadimplência acima do esperado por demissões

O modelo assume inadimplência próxima de zero porque o desconto é automático na folha. Mas há um risco real e específico: o funcionário é demitido entre a data da antecipação e a data do desconto. Nesse caso, o desconto não acontece automaticamente, e o Ágio precisa cobrar o valor da rescisão — o que gera fricção com o empregador e risco de inadimplência real.

A mitigação envolve duas frentes. A primeira é estrutural: limitar o valor máximo da antecipação com base no tempo de casa do funcionário. Quem tem menos de 3 meses na empresa tem um limite menor, porque o risco de demissão no período de experiência é maior — o mesmo critério que o Mêntore Bank usa. A segunda frente é operacional: o escritório de contabilidade processa os desligamentos e pode sinalizar ao Ágio quando uma demissão está acontecendo antes do desconto. Esse fluxo de informação já existe dentro do processo normal do escritório; basta integrá-lo ao painel.

### Risco 4 — Concentração de carteira em poucos escritórios

Se o Ágio tiver, por exemplo, 70% da sua carteira ativa concentrada em dois ou três escritórios parceiros, a perda de um deles pode destruir uma fatia grande do negócio de uma vez. É um risco real nos primeiros 12 a 18 meses, quando a base de parceiros ainda é pequena.

A mitigação de longo prazo é óbvia: diversificar a base de escritórios. Mas há também uma mitigação de curto prazo: o Ágio pode estabelecer relações diretas com empresas em paralelo ao canal via escritórios. Uma empresa que usa o Ágio via escritório pode ter uma relação direta com o Ágio se o escritório mudar ou encerrar a parceria. O produto não desaparece com a troca de escritório contábil — o funcionário continua com acesso, e a empresa pode manter o benefício via outro canal.

---

## 7. KPIs

O plano do módulo pede 3 métricas de mercado, 2 financeiras e 2 operacionais. Mais do que cumprir o requisito, os KPIs abaixo são os números que um investidor pediria ver após 6 meses de operação e que realmente revelam se o modelo está funcionando ou não.

### Métricas de mercado

A primeira é o **número de escritórios parceiros ativos**, onde "ativo" significa pelo menos uma empresa cadastrada com 5 ou mais funcionários usando o produto. É a métrica que define a velocidade de expansão do canal e revela se a proposta para o escritório está sendo aceita. Uma parceria assinada mas inativa não conta. A meta para o fim da fase de MVP é 3 escritórios genuinamente ativos.

A segunda é o **número de funcionários com ao menos uma antecipação no mês**, os usuários ativos de fato. Não basta cadastrar funcionários; o que importa é quantos realmente usam o produto quando precisam. Uma taxa de ativação baixa, abaixo de 20% dos funcionários cadastrados, sinaliza que o produto não está chegando até as pessoas ou que elas não confiam nele. Uma taxa acima de 40% é um sinal forte de que a proposta de valor é real. A Xerpa registrou 68% de aderência em uma empresa-cliente logo após o lançamento, que é o benchmark a perseguir.

A terceira métrica de mercado é a **taxa de reuso mensal**: quantas vezes o mesmo funcionário usa o produto em um mês. Um usuário que usa uma vez e não volta sugere que o produto funcionou como solução pontual mas não criou hábito. Um usuário que usa 2 ou mais vezes ao mês sugere que o produto virou parte da rotina financeira dele, que é o objetivo. A meta é média de 1,5 usos por usuário ativo por mês.

### Métricas financeiras

A primeira é a **receita líquida por funcionário ativo por mês**, o LTV unitário do produto. Com fee de R$ 8, 1,5 usos por mês e comissão de 20% para o escritório, a receita líquida esperada é de aproximadamente R$ 9,60 por usuário ativo por mês. Confirmar esse número com dados reais nas primeiras 3 empresas é o objetivo financeiro central do MVP. Se o número real ficar muito abaixo de R$ 9, o modelo precisa ser revisado: seja no fee, na taxa de reuso ou no percentual de comissão.

A segunda métrica financeira é a **inadimplência da carteira**. A meta é 0,2%, o mesmo número do Mêntore Bank, que usa o mesmo mecanismo de desconto automático. Qualquer número acima de 1% é sinal de alerta. Acima de 3% é sinal de problema estrutural que precisa ser investigado antes de escalar.

### Métricas operacionais

A primeira é o **tempo de onboarding de uma nova empresa**, contado da assinatura do contrato pelo escritório até a primeira antecipação realizada por um funcionário. A meta é menos de 24 horas. Se esse tempo for maior, se o processo exigir configurações manuais, aprovações internas ou integrações complexas, o atrito vai inibir a ativação de novos clientes e vai fazer o escritório hesitar antes de recomendar o produto aos próximos da carteira.

A segunda é o **NPS do funcionário**, medido após a primeira ou segunda antecipação. É a métrica que valida se o produto está resolvendo uma dor real e se o funcionário recomendaria para um colega. Um NPS acima de 50 é bom para um produto financeiro. Acima de 70 é excelente. Abaixo de 30 é sinal de que o produto tem fricção demais, custa caro demais ou não entrega o que promete, e precisa ser corrigido antes de escalar.

---

> **![\[agio-breakeven.png\]](https://res.cloudinary.com/dbonpjng9/image/upload/v1773707998/agio-breakeven_vaiulz.png)**
>
> *O gráfico acima mostra a curva de break-even do Ágio em função do número de funcionários ativos. A linha azul é a receita bruta crescendo a R$ 12 por usuário por mês. A linha vermelha tracejada é o custo fixo mensal do MVP, estável em torno de R$ 57.500. O ponto de cruzamento — onde o negócio começa a gerar lucro operacional — está em 4.800 usuários ativos, o que equivale a aproximadamente 6 escritórios parceiros com carteiras médias ativadas.*

---

## 8. O tamanho do mercado endereçável pelo canal

Uma das perguntas que ainda estava em aberto nas sprints anteriores era: qual é o tamanho real do mercado que o Ágio consegue alcançar com o canal via escritórios?

Segundo dados do CRCSP e do CFC de janeiro de 2026, o Brasil tem **mais de 102 mil escritórios de contabilidade ativos**, com São Paulo concentrando 29.415 deles, 28% do total nacional. A pesquisa Panorama do Empreendedorismo Contábil de 2023 indica que cada escritório atende em média entre 50 e 150 empresas clientes, e que 95% dos escritórios brasileiros captam clientes majoritariamente por indicação, o que significa que já têm uma relação de confiança consolidada com cada cliente da carteira.

Nem todos esses escritórios são o perfil certo para o Ágio. O produto faz mais sentido para escritórios que atendem PMEs dos setores de manufatura, varejo, franquias e serviços, onde a concentração de mão de obra operacional de base é maior. Estimando conservadoramente que 20% dos escritórios têm esse perfil de carteira, são **20 mil escritórios potencialmente endereçáveis no Brasil**, e **cerca de 6 mil só em São Paulo**, que é onde o Ágio começa.

Para ter uma noção de escala: se cada escritório parceiro tiver apenas 20 empresas ativas com 25 funcionários elegíveis cada, e 30% desses funcionários usarem o produto ativamente, são 150 usuários ativos por escritório, gerando R$ 1.800 de receita bruta mensal. Com 100 escritórios parceiros — um objetivo razoável para 12 a 18 meses de operação — o Ágio chega a 15.000 usuários ativos e R$ 180.000 de receita bruta por mês. Com 500 escritórios, são R$ 900.000/mês. O modelo escala linearmente com o número de escritórios parceiros e com a taxa de ativação dentro de cada carteira.

---

## 9. O que ainda precisa ser respondido pela operação real

Essa sprint estruturou o modelo de negócio com a melhor aproximação possível para a fase de discovery. Mas há perguntas que nenhuma pesquisa secundária responde — só a operação real responde.

Qual é o ciclo de decisão real de um escritório? Quantas reuniões, quem precisa aprovar, qual argumento fecha? Isso vai definir o custo de aquisição real e a velocidade de escala. A diferença entre "o dono do escritório decide em 1 reunião" e "precisa de aprovação do sócio em 3 etapas" muda completamente o planejamento comercial.

Qual é a taxa de ativação real dos funcionários? Estar cadastrado e usar são coisas muito diferentes. Fatores como vergonha de usar, desconfiança do produto, falta de necessidade imediata ou simplesmente não saber que o benefício existe podem manter a taxa de ativação baixa mesmo com o produto disponível. O onboarding e a comunicação dentro da empresa são tão críticos quanto o produto em si.

Qual é o custo de capital real via correspondente bancário da QI Tech para o volume inicial? Esse número define a margem bruta real do negócio desde o primeiro ciclo e precisa ser confirmado com a QI Tech antes de projetar qualquer P&L.

E finalmente: o funcionário realmente usa? Essa pergunta, que a sprint 2 identificou como a hipótese central não validada, ainda não tem resposta primária. É o único dado que pode invalidar tudo que foi construído nas últimas quatro sprints, e que só vai ser respondido com o produto na mão de verdade.

---

## 10. Conclusão

O modelo de negócio do Ágio tem quatro características que, juntas, o tornam defensável neste estágio. O canal via escritórios de contabilidade é único: nenhum concorrente mapeado o usa, e ele resolve o problema de custo de aquisição que torna o segmento de PMEs pequenas inviável para players com estrutura comercial cara. O risco de crédito é estruturalmente baixo porque o desconto acontece antes do dinheiro chegar na conta do funcionário, o mesmo mecanismo que garante 0,2% de inadimplência ao Mêntore Bank. O segmento de PMEs de 10 a 100 funcionários é ignorado pelos concorrentes capitalizados, não porque a dor não existe, mas porque o modelo de venda direta não escala nele. E o unit economics fecha com volume atingível: não é necessário ter centenas de milhares de usuários para o negócio ser sustentável.

O que não é garantido é a execução. Ativar escritórios de contabilidade como parceiros comerciais depende de confiança, e confiança leva tempo para ser construída. A sprint 5 precisa enfrentar essa realidade com um plano de implementação honesto, com marcos realistas, reconhecimento das incertezas que ainda existem, e resistência à tentação de projetar crescimento antes de ter validado o ciclo pelo menos uma vez do começo ao fim.