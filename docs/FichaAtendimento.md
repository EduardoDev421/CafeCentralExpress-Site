# Ficha individual — Aula 12

**Estudante: Eduardo Gabriel**   **Turma: Tecnico de Desenvolvimento de Sistema**   **Data: 17/11/2026**

## Chamado CC-401

- **Solicitante e necessidade identificada:** Ana (caixa) clica em "Adicionar pedido" e nada acontece. Ela precisa registrar as vendas.
- **Classificação:** incidente
- **Equipe responsável:** N3
- **Justificativa da tratativa ou encaminhamento:** a falha está no código (JavaScript) e não dá para resolver com orientação ao usuário, então a correção é de desenvolvimento.
- **Investigação / esclarecimento:** reproduzi o problema e comparei o `script.js` com o `index.html`. O JS procurava o formulário por `formPedidos`, mas o id no HTML é `formPedido`. Por isso o evento de envio nunca era ligado e o botão não fazia nada.
- **Arquivo e alteração realizada (se houver):** `aluno/script.js`: troquei `$("formPedidos")` por `$("formPedido")`.
- **Teste de aceitação:** preencher cliente, produto e quantidade e clicar em "Adicionar pedido". Esperado: o pedido aparece na lista e a mensagem de sucesso é exibida. Observado: o pedido foi criado, apareceu na lista e os contadores foram atualizados. **[confirmar no navegador]**
- **Situação final:** resolvido
- **Devolutiva ao usuário (2–4 frases):** Olá, Ana! Encontramos a causa: o botão não estava ligado ao formulário por um erro de nome no sistema. Já corrigimos, e o cadastro de pedidos voltou a funcionar normalmente. Se notar qualquer outra falha, é só nos avisar.

## Chamado CC-402

- **Solicitante e necessidade identificada:** Bruno (novo atendente) quer achar um pedido pelo nome do produto e ver se já foi concluído.
- **Classificação:** dúvida
- **Equipe responsável:** N1
- **Justificativa da tratativa ou encaminhamento:** a função já existe no sistema, então basta orientar o usuário. Não precisa mexer no código.
- **Investigação / esclarecimento:** testei o campo "Pesquisar por cliente ou produto" digitando parte do nome de um produto (ex.: "bolo"). A lista filtra na hora. O status aparece na etiqueta de cada pedido.
- **Arquivo e alteração realizada (se houver):** nenhuma, pois o sistema já atende o pedido.
- **Teste de aceitação:** digitar "bolo" na pesquisa. Esperado: só pedidos de bolo aparecem. Observado: a lista foi filtrada corretamente e a etiqueta mostrou o status.
- **Situação final:** resolvido
- **Devolutiva ao usuário (2–4 frases):** Olá, Bruno! Na tela de pedidos, use o campo "Pesquisar por cliente ou produto" e digite o nome do produto. Cada pedido mostra uma etiqueta com o status: "Pendente" ou "✓ Concluído". Quando o pedido estiver pronto, é só clicar em "Concluir".

## Chamado CC-403

- **Solicitante e necessidade identificada:** Carla (supervisora) vê os botões fora da tela no celular. No computador está normal.
- **Classificação:** incidente
- **Equipe responsável:** N3
- **Justificativa da tratativa ou encaminhamento:** o problema está no CSS, então exige alteração de código.
- **Investigação / esclarecimento:** olhei a regra `@media (max-width: 650px)` do CSS. Ela definia `width: 850px` para `.colunas` e `.resumo`, o que fazia a página ficar mais larga que a tela do celular.
- **Arquivo e alteração realizada (se houver):** `aluno/style.css`: no media query, as duas áreas passaram a usar uma coluna só (`grid-template-columns: minmax(0, 1fr)`). Também permiti quebra de linha no cabeçalho e no topo e rodapé de cada pedido.
- **Teste de aceitação:** abrir no modo celular do navegador (360px, 390px e 768px). Esperado: sem rolagem horizontal e com todos os botões visíveis. Observado: **[confirmar no navegador]**
- **Situação final:** resolvido **[após confirmar o teste]**
- **Devolutiva ao usuário (2–4 frases):** Olá, Carla! O problema era uma largura fixa no layout que forçava a tela a ficar maior que a do celular. Ajustamos para que o conteúdo se encaixe na tela. Por favor, confirme no seu aparelho se os botões já aparecem por inteiro.

## Chamado CC-404

- **Solicitante e necessidade identificada:** Diego (atendente) quer um campo opcional de observações ("sem açúcar", "sem lactose") e precisa ver isso na lista.
- **Classificação:** melhoria
- **Equipe responsável:** N3
- **Justificativa da tratativa ou encaminhamento:** exige um campo novo e mudança na lógica, então é desenvolvimento.
- **Investigação / esclarecimento:** o pedido guardava só cliente, produto, quantidade, total e status. Precisei incluir o campo no formulário, salvar no objeto do pedido e mostrar na listagem.
- **Arquivo e alteração realizada (se houver):** `index.html`: novo campo "Observações (opcional)", com limite de 100 caracteres. `aluno/script.js`: leitura do campo, gravação em `observacoes` e exibição da linha "Observações: …" só quando há texto.
- **Teste de aceitação:** cadastrar um pedido com "sem açúcar" e outro sem observação. Esperado: só o primeiro mostra a linha de observações. Observado: funcionou como esperado, e o campo é limpo depois do cadastro.
- **Situação final:** resolvido
- **Devolutiva ao usuário (2–4 frases):** Olá, Diego! Agora o formulário tem o campo "Observações (opcional)". O que for digitado aparece no pedido, na lista. Pedidos sem observação continuam aparecendo normalmente.

## Chamado CC-405

- **Solicitante e necessidade identificada:** Fernanda (gerente) quer o nome "Café Central Express" no cabeçalho e na aba do navegador durante o evento.
- **Classificação:** serviço
- **Equipe responsável:** N2
- **Justificativa da tratativa ou encaminhamento:** é uma troca simples de texto, de baixo risco, e o evento foi autorizado pela gerente. Confirmei o escopo: só o nome visível no cabeçalho e na aba.
- **Investigação / esclarecimento:** localizei o `<title>` e o `<h1>` no `index.html`. Não alterei rodapé, descrição nem o restante da identidade visual.
- **Arquivo e alteração realizada (se houver):** `index.html`: `<title>` agora é "Café Central Express | Pedidos" e o `<h1>` é "Café Central Express".
- **Teste de aceitação:** abrir a página e conferir o texto no cabeçalho e o título na aba. Esperado: "Café Central Express" nos dois. Observado: o título e o cabeçalho foram atualizados.
- **Situação final:** resolvido
- **Devolutiva ao usuário (2–4 frases):** Olá, Fernanda! O nome "Café Central Express" já aparece no cabeçalho e na aba do navegador. Mudamos só esses dois pontos, e o resto do sistema ficou igual. Depois do evento, é só nos avisar se quiser voltar ao nome anterior.

## Chamado CC-406

- **Solicitante e necessidade identificada:** Gustavo (gerente) cadastra pedidos e eles somem quando atualiza a página.
- **Classificação:** incidente
- **Equipe responsável:** N3
- **Justificativa da tratativa ou encaminhamento:** a falha está na lógica de salvar e recuperar dados, então exige correção no código.
- **Investigação / esclarecimento:** o código salvava no `localStorage`, mas ao abrir a página a lista começava sempre vazia (`let pedidos = []`), porque não havia leitura dos dados salvos. Além disso, o formulário com id errado (CC-401) fazia a página recarregar ao enviar.
- **Arquivo e alteração realizada (se houver):** `aluno/script.js`: criei `carregarPedidos()`, que lê e valida os dados salvos, aceita pedidos antigos sem observações e ignora dados corrompidos. `salvarPedidos()` agora avisa se o navegador não permitir salvar.
- **Teste de aceitação:** cadastrar pedidos, concluir um e recarregar a página. Esperado: pedidos, status e contadores continuam. Observado: os dados voltaram corretos depois de recarregar. Também testei dado corrompido no armazenamento (a página não quebrou). **[confirmar com F5 no navegador]**
- **Situação final:** resolvido
- **Devolutiva ao usuário (2–4 frases):** Olá, Gustavo! Corrigimos o sistema para recuperar os pedidos salvos quando a página é aberta de novo. Atenção: os dados ficam apenas neste navegador e neste aparelho, então limpar os dados do navegador, usar aba anônima ou trocar de computador não mostra os pedidos. Se precisarem compartilhar entre atendentes, será preciso um sistema com servidor.

## Chamado CC-407

- **Solicitante e necessidade identificada:** Helena (atendente) pergunta se o valor é calculado pela quantidade e o que acontece com vários pedidos.
- **Classificação:** dúvida
- **Equipe responsável:** N1
- **Justificativa da tratativa ou encaminhamento:** só precisa de explicação. O cálculo está correto, então não alterei o código.
- **Investigação / esclarecimento:** no código, `total = preço do produto × quantidade`. O valor registrado no topo é a soma dos totais de todos os pedidos. Testei: 2 cafés (R$ 6,00 cada) = R$ 12,00; mais 1 bolo (R$ 12,00) = valor registrado de R$ 24,00.
- **Arquivo e alteração realizada (se houver):** nenhuma, porque o cálculo está correto.
- **Teste de aceitação:** cadastrar 2 cafés e 1 bolo. Esperado: pedidos de R$ 12,00 e R$ 12,00, e valor registrado de R$ 24,00. Observado: os valores conferiram.
- **Situação final:** resolvido
- **Devolutiva ao usuário (2–4 frases):** Olá, Helena! Sim: o valor de cada pedido é o preço do produto multiplicado pela quantidade. O campo "Valor registrado" no topo soma o total de todos os pedidos cadastrados. Fizemos testes com quantidades diferentes e os valores estão corretos.

## Chamado CC-408

- **Solicitante e necessidade identificada:** Igor (cozinha) quer pedidos concluídos visualmente diferentes dos pendentes.
- **Classificação:** melhoria
- **Equipe responsável:** N3
- **Justificativa da tratativa ou encaminhamento:** exige alteração no CSS e no JS.
- **Investigação / esclarecimento:** os dois estados só se diferenciavam pelo texto da etiqueta. Precisava de um destaque que não dependesse só de cor.
- **Arquivo e alteração realizada (se houver):** `aluno/script.js`: pedido concluído recebe a classe `pedido-concluido` e a etiqueta mostra "✓ Concluído". `aluno/style.css`: pedido concluído tem borda lateral verde e fundo suave. O pendente tem borda âmbar.
- **Teste de aceitação:** cadastrar dois pedidos e concluir um. Esperado: um pendente (âmbar) e um concluído (verde, com ✓). Observado: a identificação mudou na hora ao clicar em "Concluir" e se manteve ao recarregar a página.
- **Situação final:** resolvido
- **Devolutiva ao usuário (2–4 frases):** Olá, Igor! Agora os pedidos concluídos aparecem com borda verde, fundo diferente e a etiqueta "✓ Concluído". O ✓ e o texto ajudam também quem não distingue bem as cores. Os pendentes continuam com a etiqueta "Pendente".

## Autoavaliação final

- **I1:** li cada chamado, identifiquei quem pedia e o que precisava, e separei o que era erro, dúvida, serviço ou melhoria antes de mexer no código.
- **I2:** escrevi as devolutivas curtas, com linguagem simples e dizendo o que foi feito e o que o usuário precisa saber (como o limite do armazenamento no CC-406).
- **I3:** decidi tratar só o necessário: dúvidas (CC-402 e CC-407) foram orientação, sem alterar código, e o CC-405 ficou restrito ao nome pedido.
- **Principal aprendizado:** [escreva com suas palavras o que aprendeu]