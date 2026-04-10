# Sprint 5 — Plano de Implementação e Métricas
**Ágio | Semanas 9–10**

---

## 1. O que esta sprint entrega

As quatro sprints anteriores construíram o diagnóstico do Ágio. O problema foi identificado e reposicionado: a dor não é do empresário com a folha de pagamento, é do funcionário CLT de base que chega na segunda quinzena sem dinheiro e sem acesso a crédito decente. A proposta de valor foi estruturada em três camadas, com o escritório de contabilidade como canal, a empresa como intermediário e o funcionário como beneficiário final. O modelo de negócio foi detalhado com taxa de R$ 8 por transação, comissão de 20% para o escritório, ponto de equilíbrio em 4.800 usuários ativos e inadimplência esperada de 0,2% pelo mecanismo de desconto automático na folha.

A sprint 5 fecha esse ciclo com três entregáveis: um plano de implementação em fases com critérios de avanço concretos, os indicadores formalizados com metas, frequências e sinais de alerta, e as métricas de sucesso que definem quando o modelo está pronto para crescer. Esses três documentos juntos são o que transforma o diagnóstico das sprints anteriores em direção de execução.

---

## 2. Perguntas em aberto que o plano precisa endereçar

Antes de apresentar o plano, é necessário ser preciso sobre o que ainda não foi validado. Duas hipóteses centrais do modelo não têm evidência primária. O funcionário CLT nunca foi entrevistado diretamente. Nenhum escritório de contabilidade sentou para ouvir a proposta. O ciclo completo de solicitação, crédito e desconto na folha nunca foi executado, nem de forma manual.

O plano de implementação desta sprint foi construído ao redor dessas lacunas. Ele não assume que as hipóteses são verdadeiras e parte para a construção. Ele coloca a validação dessas hipóteses como pré-requisito de tudo que vem depois.

Três perguntas organizam essa estrutura, na ordem em que precisam ser respondidas.

**O funcionário CLT usaria o produto?** É a hipótese mais importante e a única ainda sem resposta. Os dados secundários sustentam que o problema existe: pesquisa da meutudo com 9.305 trabalhadores CLT em 2026 revelou que 59% dependem exclusivamente do salário para cobrir gastos mensais, 67% são o único provedor financeiro do lar e 84% ganham até 3 salários mínimos. Com o salário mínimo em R$ 1.518 em 2025 e descontos obrigatórios de INSS e IR que podem chegar a 41,5% do salário bruto, o trabalhador de base chega ao líquido com pouca margem para imprevistos. Dados do Serasa e do IBGE das sprints anteriores corroboram: o problema é estrutural. O que ainda falta é confirmar que essa demanda se converte em uso quando o produto está disponível.

**O escritório de contabilidade aceita ser canal?** O argumento racional existe: uma nova linha de receita sobre uma carteira que o escritório já tem, sem custo adicional e sem mudar o processo de folha. O Contbank usa escritórios como parceiros de distribuição para crédito a PMEs. A Cora reportou em novembro de 2025 que 41% das PMEs buscam o contador para aconselhamento financeiro. O canal funciona em outros contextos. O que precisa ser verificado é se funciona especificamente para o Ágio.

**O ciclo fecha na prática?** A sequência de solicitação, cálculo do limite, transferência e desconto na folha é a base do produto. Cada etapa tem pontos de falha que só aparecem na execução real.

---

## 3. Plano de implementação

O plano está organizado em quatro fases, cada uma com critério de avanço obrigatório. Sem atingi-lo, a fase é revisada antes de seguir. Essa estrutura existe para garantir que a execução avance sobre evidência, não sobre otimismo.

---

> **![agio-roadmap.png](https://res.cloudinary.com/dloj4cl3v/image/upload/v1775855441/agio-roadmap_1_zafkms.png)]**
>
> *O roadmap acima organiza as quatro fases com seus critérios de avanço. A leitura mais importante não são as tarefas, mas os critérios: cada fase só progride quando o dado real confirma o que foi planejado. A Fase A valida o comportamento humano antes de qualquer tecnologia. A Fase B constrói o mínimo para o ciclo rodar sem intervenção manual. A Fase C expande para múltiplos escritórios. A Fase D transforma os dados em aprendizado.*

---

### Fase A — Validação em campo
**Semanas 1–2 do próximo módulo**

O ponto de partida não é tecnologia, é conversa. O objetivo é resolver as duas lacunas de evidência primária antes de construir qualquer coisa.

Com funcionários CLT, a meta é realizar pelo menos 5 conversas com trabalhadores que ganham até 3 salários mínimos em setores como manufatura, varejo ou franquias. As perguntas são diretas: já ficou sem dinheiro antes do salário? Como resolveu? Se existisse uma forma de antecipar parte do salário pelo celular, sem análise de Serasa e com desconto automático no próximo pagamento, usaria? Essas conversas podem ser informais, presenciais e curtas. O que importa é a resposta para a pergunta central.

Com escritórios de contabilidade, a meta é apresentar a proposta para pelo menos 2 escritórios, não para fechar parceria, mas para ouvir a reação. Qual é a primeira objeção? O argumento da comissão resolve? A ideia de oferecer um benefício aos clientes sem custo faz sentido imediato? Essa conversa, mesmo que resulte em recusa, vale mais do que qualquer pesquisa de mercado.

Com as conversas feitas, o próximo passo ainda na Fase A é executar um ciclo completo de forma manual. Uma empresa, um funcionário, uma antecipação combinada. O escritório fornece os dados de salário. O Ágio calcula o limite, transfere o valor via Pix e registra o desconto a ser aplicado no fechamento da folha. Planilha e transferência direta. A tecnologia não importa nesse estágio. O que importa é saber se o ciclo funciona do começo ao fim.

**Critério de avanço:** pelo menos 3 ciclos completos em pelo menos 2 empresas diferentes, inadimplência zero e ao menos 1 escritório com interesse genuíno em parceria piloto.

### Fase B — Produto mínimo
**Semanas 3–4 do próximo módulo**

Com o ciclo validado manualmente, a Fase B constrói a tecnologia mínima para que ele funcione sem planilha. O painel do escritório precisa entregar exatamente quatro coisas: visão da carteira de empresas e funcionários, cálculo automático de limite por funcionário com base no salário líquido, geração da lista de descontos no fechamento da folha em formato compatível com o sistema que o escritório já usa, e entrada de uma nova empresa em menos de 10 minutos sem ajuda do Ágio.

O acesso do funcionário nessa fase é um link simples protegido por CPF. O trabalhador acessa, vê o limite disponível e solicita o valor. Sem conta digital própria, sem complexidade adicional. Suficiente para provar que o ciclo funciona com tecnologia.

**Critério de avanço:** 1 escritório parceiro processa o ciclo completo de pelo menos 5 funcionários pelo painel, sem nenhuma intervenção manual do Ágio.

### Fase C — Primeiros escritórios reais
**Semanas 5–8 do próximo módulo**

Com o painel funcionando, a Fase C expande para 3 escritórios parceiros ativos, cada um com pelo menos 2 empresas clientes e funcionários usando o produto. O objetivo não é volume, é diversidade: três contextos diferentes para revelar onde o modelo tem atrito e onde funciona bem.

Nessa fase, os indicadores formalizados na próxima seção começam a ser medidos de verdade. Os números reais vão confirmar ou refutar as projeções, e a diferença entre o que foi projetado e o que foi medido é o dado mais valioso que essa fase pode produzir.

**Critério de avanço:** 3 escritórios ativos, pelo menos 15 funcionários com ao menos uma antecipação realizada, inadimplência zero e satisfação dos funcionários acima de 50 pontos.

### Fase D — Análise e ajuste
**Semanas 9–10 do próximo módulo**

A Fase D não adiciona funcionalidades. Ela analisa o que as fases anteriores produziram e transforma dados em decisões. Qual indicador ficou abaixo do esperado e por quê? O que o retorno dos funcionários e escritórios revelou? O produto do Módulo 2 é o aprendizado, não o crescimento, e a Fase D existe para que o próximo módulo comece com o modelo ajustado.

**Critério de conclusão:** relatório com pelo menos 3 ajustes concretos no produto ou no modelo de distribuição, derivados dos dados reais da operação.

---

## 4. Indicadores formalizados

Os indicadores abaixo foram definidos na sprint 4. Esta sprint formaliza cada um com quatro dimensões: meta, frequência de medição, sinal de alerta e o que o número revela sobre o negócio. Essa última dimensão é a mais importante. Não basta saber o que medir; é preciso saber o que o número diz quando está fora do esperado.

---

> **![agio-kpi-dashboard.png](https://res.cloudinary.com/dloj4cl3v/image/upload/v1775855549/agio-kpi-dashboard_def3at.png)]**
>
> *O painel acima organiza os 7 indicadores em três categorias — mercado, financeiro e operacional — com metas, frequência de medição e limites de alerta. A dimensão mais relevante em cada card não é a meta em si, mas o que o número revela quando está fora do esperado. Cada indicador é o termômetro de um risco específico do modelo.*

---

### Indicadores de mercado

**Escritórios parceiros ativos.** Um escritório ativo é aquele com ao menos uma empresa cadastrada e pelo menos 5 funcionários usando o produto. Meta ao final da Fase C: 3 escritórios. Frequência: semanal nas Fases A e B, quinzenal a partir da Fase C. Alerta: menos de 1 escritório ativo após 6 semanas da Fase B. O número revela a velocidade de adoção do canal. Se ficar baixo, o problema pode estar no argumento comercial, no processo de entrada ou na proposta para o escritório, e cada diagnóstico leva a uma correção diferente.

**Funcionários com ao menos uma antecipação no mês.** Taxa calculada sobre o total de funcionários cadastrados. Meta: acima de 40%. A Xerpa registrou 68% de adesão logo após o lançamento em uma empresa cliente, que serve como referência. Frequência: mensal. Alerta: abaixo de 20%. O número revela se o produto está chegando até as pessoas ou se está disponível mas invisível. Taxa baixa pode indicar falha na comunicação dentro da empresa, desconfiança no produto ou ausência de necessidade imediata naquele mês.

**Frequência de uso mensal.** Número médio de antecipações por usuário ativo por mês. Meta: 1,5 vezes. Frequência: mensal. Alerta: abaixo de 1,0 por três meses consecutivos. O número revela se o produto virou parte da rotina financeira do trabalhador ou se foi usado uma vez e não voltou. Um usuário que retorna é um usuário que confia.

### Indicadores financeiros

**Receita líquida por usuário ativo por mês.** Com taxa de R$ 8, frequência de 1,5 usos por mês e comissão de 20% para o escritório, a receita líquida esperada é de aproximadamente R$ 9,60 por usuário ativo por mês. Meta: confirmar esse número com dados reais nas primeiras 3 empresas. Frequência: mensal. Alerta: abaixo de R$ 7,00 por três meses consecutivos. O número revela a saúde financeira do modelo por unidade. Se ficar consistentemente abaixo da projeção, o problema está na taxa, na frequência de uso ou na comissão, e identificar qual desses três é a causa muda completamente a resposta correta.

**Taxa de inadimplência da carteira.** Meta: 0,2%, o mesmo número do Mêntore Bank, que usa o mesmo mecanismo de desconto automático. Frequência: mensal. Alerta: acima de 1%. Crítico: acima de 3%. O número revela a robustez do mecanismo de desconto. Inadimplência acima de 1% indica que o desconto não está sendo aplicado na folha, seja por erro de processo, demissão antes do fechamento ou conflito com o escritório.

### Indicadores operacionais

**Tempo de entrada de uma nova empresa.** Contado da assinatura do contrato pelo escritório até a primeira antecipação realizada por um funcionário. Meta: menos de 24 horas. Frequência: medido a cada nova entrada. Alerta: acima de 72 horas. O número revela a fluidez do processo de ativação. Um processo lento faz o escritório hesitar antes de recomendar o produto para os próximos clientes da carteira.

**Satisfação do funcionário.** Medido pelo Net Promoter Score após a primeira e a segunda antecipação. Meta: acima de 50. Acima de 70 é excelente. Frequência: por antecipação, com consolidação mensal. Alerta: abaixo de 30. O número revela se o produto está resolvendo a dor de forma que o usuário recomendaria para um colega. Abaixo de 30 indica atrito no processo, custo percebido alto demais ou entrega abaixo do prometido.

---

## 5. Métricas de sucesso

Indicadores são o que se mede todo mês. As métricas abaixo são as perguntas que precisam de resposta clara ao final da execução. São os critérios que definem se o modelo está pronto para crescer ou se precisa de ajuste antes.

**O funcionário usou e voltou.** Pelo menos 70% dos funcionários que fizeram a primeira antecipação fizeram uma segunda no ciclo seguinte. Se a taxa de retorno for baixa, o produto não criou o hábito que o modelo precisa para funcionar.

**O escritório indicou sem ser solicitado.** Pelo menos 1 dos 3 escritórios parceiros da Fase C indicou o Ágio para outro escritório ou para um cliente sem que o Ágio precisasse pedir. Indicação espontânea é o sinal mais claro de que a proposta de valor para o canal está funcionando.

**O ciclo rodou sem intervenção.** O desconto foi aplicado corretamente na folha de todos os funcionários com antecipações abertas, sem nenhuma intervenção manual do Ágio, em pelo menos dois fechamentos de folha consecutivos. Isso confirma que o produto pode operar de forma independente.

**A inadimplência confirmou a tese.** A taxa ficou abaixo de 1% durante toda a Fase C. Esse número é central para o argumento de viabilidade do modelo e precisa ser confirmado com operação real, não estimado por analogia.

**O modelo financeiro fechou.** A receita líquida real por usuário ativo ficou acima de R$ 8,00 por mês em pelo menos dois meses consecutivos da Fase C. Isso confirma que o modelo gera margem suficiente para operar sem depender de capital externo para cobrir cada nova antecipação.

---

## 6. Riscos

A sprint 4 mapeou os riscos do Ágio por probabilidade e impacto. Esta sprint acrescenta uma camada que a sprint 4 não tinha: para cada risco, em qual fase ele se torna testável e qual dado concreto da operação vai resolvê-lo. Sem isso, risco é uma lista que não orienta decisão nenhuma. Com isso, cada risco vira uma hipótese com prazo.

---

> **![agio-risk-matrix.png](https://res.cloudinary.com/dloj4cl3v/image/upload/v1775855609/agio-risk-matrix_lxdhtg.png)]**
>
> *A matriz acima organiza os riscos por probabilidade e impacto. Cada quadrante tem uma lógica de resposta diferente: riscos de alto impacto e alta probabilidade pedem ação antes de avançar de fase; riscos de alto impacto e baixa probabilidade pedem plano de contingência; riscos de baixo impacto podem ser monitorados sem ação preventiva. A coluna "dado que resolve" é o elemento central desta seção: transforma cada risco em uma hipótese com fase de teste definida.*

---

**O escritório não se torna parceiro ativo.** O argumento da comissão não é suficiente para fazer o escritório apresentar o produto aos clientes de forma consistente. Esse risco aparece na Fase A e é o mais urgente de todos, porque sem o canal o modelo inteiro precisa ser repensado antes de qualquer construção tecnológica. O dado que vai resolvê-lo é a taxa de conversão de reuniões para parcerias assinadas durante a Fase A. Se ficar abaixo de 30%, não é sinal para insistir no mesmo argumento com mais esforço; é sinal para repensar o que o Ágio oferece ao escritório antes de avançar para a Fase B.

**O funcionário não usa o produto disponível.** O produto está acessível, mas o funcionário não solicita. Esse risco só se torna mensurável na Fase C, quando há usuários cadastrados em escala suficiente para distinguir padrão de ruído. A taxa de uso abaixo de 20% não é só um número ruim; é um diagnóstico que pode ter três causas completamente diferentes: o funcionário não sabe que o produto existe, não confia nele, ou simplesmente não teve necessidade naquele mês. Identificar qual das três é o problema define respostas muito diferentes: comunicação, prova social, ou revisão do timing de oferta.

**Demissão antes do desconto.** O funcionário é desligado após a antecipação e antes do fechamento da folha. Na sprint 4, esse risco foi mapeado como teórico. Esta sprint o formaliza com uma ação concreta antes da Fase B: incluir cláusula de desconto em rescisão no contrato com a empresa, nos mesmos moldes do Programa Crédito do Trabalhador de 2024, que já prevê esse mecanismo para o consignado privado. O dado que vai monitorar a eficácia dessa mitigação é o percentual de casos em que o desconto foi aplicado corretamente na rescisão versus os casos que resultaram em inadimplência, acompanhado mensalmente a partir da Fase C.

**Concentração em um único escritório.** Um único escritório respondendo por mais de 50% dos usuários ativos é um risco de dependência que a Fase C precisa evitar ativamente. A mitigação não é passiva: durante a Fase C, nenhum novo escritório é priorizado antes de garantir que o segundo e o terceiro já estão ativos. O dado que monitora isso é a distribuição de usuários por escritório ao final da Fase C, com limite máximo de 40% por parceiro.

**Custo de capital acima do projetado.** Esse é o único risco que precisa ser resolvido antes do início da Fase B, não durante a operação. A confirmação da estrutura de custo com a QI Tech, com simulação para o tíquete médio de R$ 200, precisa acontecer no intervalo entre a Fase A e a Fase B. Se o custo real comprometer a margem bruta a ponto de tornar o modelo financeiramente inviável nesse volume, é melhor saber antes de construir o painel do que depois de ativar os primeiros escritórios.

---

## 7. O que esta sprint consolida

As cinco sprints do Módulo 1 entregam o seguinte conjunto ao final:

- Problema validado indiretamente, com evidência de que a dor existe no lado do funcionário CLT

- Segmento definido: trabalhador CLT de até 3 salários mínimos em PMEs com mão de obra operacional de base

- Proposta de valor estruturada em três camadas, com diferencial competitivo em relação ao Mêntore Bank baseado em canal e tamanho de empresa-alvo

- Modelo de negócio completo com pricing, estrutura de custos, mapa competitivo e ponto de equilíbrio calculado

- Indicadores formalizados com metas, frequências e sinais de alerta

- Plano de implementação com critérios de avanço que colocam a validação antes da construção

O que o módulo não entrega é evidência primária do funcionário e do escritório. Essa é a lacuna mais importante que o plano acima organiza para ser fechada, e reconhecê-la com precisão é parte do resultado desta sprint. Um plano construído sobre o que ainda não se sabe é mais honesto, e mais útil, do que um plano que ignora as próprias hipóteses em aberto.