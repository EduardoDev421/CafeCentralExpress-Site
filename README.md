# Café Central Express — Sistema de Pedidos

Sistema web simples para registrar e acompanhar pedidos de uma cafeteria. Projeto didático da UC11, feito com HTML, CSS e JavaScript puro (sem bibliotecas externas). Os dados ficam salvos no próprio navegador.

## Funcionalidades

- Cadastro de pedidos com nome do cliente, produto e quantidade
- Campo opcional de **observações** (ex.: "sem açúcar", "sem lactose"), exibido na lista
- Cálculo automático do valor estimado e do total de cada pedido
- Painel de resumo: total de pedidos, pendentes e valor registrado
- Pesquisa por nome do cliente ou produto
- Botão **Concluir**, com destaque visual para pedidos concluídos (borda verde e etiqueta "✓ Concluído")
- Pedidos mantidos após atualizar a página (`localStorage`)
- Layout responsivo para celular

## Produtos

| Produto | Preço |
|---|---|
| Café expresso | R$ 6,00 |
| Pão de queijo | R$ 8,00 |
| Fatia de bolo | R$ 12,00 |
| Suco natural | R$ 10,00 |

## Estrutura do projeto

```
├── index.html        # Estrutura da página
└── aluno/
    ├── style.css     # Estilos e responsividade
    └── script.js     # Lógica: cadastro, salvamento, busca e status
```

## Como executar

1. Baixe ou clone o projeto, mantendo a estrutura de pastas acima.
2. Abra o arquivo `index.html` em um navegador (Chrome, Edge, Firefox etc.).

Não é necessário instalar nada nem usar servidor.

## Armazenamento de dados

Os pedidos são guardados no `localStorage` do navegador. Isso significa que:

- os dados ficam apenas naquele navegador e naquele aparelho;
- limpar os dados do site ou usar aba anônima apaga os pedidos;
- outro computador não enxerga os pedidos cadastrados.

Para compartilhar pedidos entre vários atendentes, seria necessário um servidor com banco de dados.

## Histórico de alterações (Aula 12)

| Chamado | Tipo | Alteração |
|---|---|---|
| CC-401 | Incidente | Corrigido o id do formulário no JS (`formPedido`); o botão "Adicionar pedido" voltou a funcionar |
| CC-403 | Incidente | Corrigida a largura fixa no CSS para celular |
| CC-404 | Melhoria | Adicionado o campo de observações ao pedido |
| CC-405 | Serviço | Nome alterado para "Café Central Express" no cabeçalho e na aba |
| CC-406 | Incidente | Pedidos passam a ser lidos do `localStorage` ao abrir a página |
| CC-408 | Melhoria | Pedidos concluídos destacados sem depender só de cor |

## Autor

Nome do estudante — Turma — UC11