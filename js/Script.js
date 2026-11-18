"use strict";
// Café Central — JavaScript didático, sem bibliotecas externas.
const CATALOGO = {
    cafe: { nome: "Café expresso", preco: 6 },
    cafeleite: { nome: "Café com leite", preco: 7 },
    capuccino: { nome: "Capuccino", preco: 9 },
    chocolate: { nome: "Chocolate quente", preco: 10 },
    pao: { nome: "Pão de queijo", preco: 8 },
    croissant: { nome: "Croissant", preco: 9 },
    misto: { nome: "Misto quente", preco: 11 },
    bolo: { nome: "Fatia de bolo", preco: 12 },
    torta: { nome: "Torta de limão", preco: 13 },
    suco: { nome: "Suco natural", preco: 10 },
    refrigerante: { nome: "Refrigerante lata", preco: 6 },
    agua: { nome: "Água mineral", preco: 4 }
};
const CHAVE_ARMAZENAMENTO = "cafe-central-pedidos-aula12";
const $ = (id) => document.getElementById(id);
const formatarMoeda = (valor) => valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

// Lê os pedidos salvos no navegador. Ignora dados inválidos em vez de quebrar a página.
function carregarPedidos() {
    try {
        const bruto = localStorage.getItem(CHAVE_ARMAZENAMENTO);
        if (!bruto) return [];
        const dados = JSON.parse(bruto);
        if (!Array.isArray(dados)) return [];
        return dados
            .filter((p) => p && typeof p.id === "string" && typeof p.cliente === "string" &&
                typeof p.produtoNome === "string" && Number.isFinite(p.quantidade) && Number.isFinite(p.total))
            .map((p) => ({
                ...p,
                status: p.status === "Concluído" ? "Concluído" : "Pendente",
                observacoes: typeof p.observacoes === "string" ? p.observacoes : "" // pedidos antigos não têm observações
            }));
    } catch (erro) {
        console.warn("Não foi possível ler os pedidos salvos:", erro);
        return [];
    }
}

// Estado inicial dos pedidos: recuperado do navegador.
let pedidos = carregarPedidos();

function salvarPedidos() {
    try {
        localStorage.setItem(CHAVE_ARMAZENAMENTO, JSON.stringify(pedidos));
        return true;
    } catch (erro) {
        console.warn("Não foi possível salvar os pedidos:", erro);
        return false;
    }
}

function mostrarMensagem(texto, erro = false) {
    const mensagem = $("mensagemFormulario");
    mensagem.textContent = texto;
    mensagem.classList.toggle("erro", erro);
}

function valorEstimado() {
    const produto = CATALOGO[$("produto").value];
    const quantidade = Number($("quantidade").value);
    const valor = produto && Number.isInteger(quantidade) && quantidade > 0 ? produto.preco * quantidade : 0;
    $("previsaoValor").textContent = formatarMoeda(valor);
}

function criarPedido(evento) {
    evento.preventDefault();
    const cliente = $("cliente").value.trim();
    const produtoId = $("produto").value;
    const quantidade = Number($("quantidade").value);
    const observacoes = $("observacoes").value.trim();
    if (!cliente || !CATALOGO[produtoId] || !Number.isInteger(quantidade) || quantidade < 1 || quantidade > 30) {
        mostrarMensagem("Preencha o cliente, o produto e uma quantidade entre 1 e 30.", true);
        return;
    }
    const produto = CATALOGO[produtoId];
    const pedido = {
        id: Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 7),
        cliente, produtoId, produtoNome: produto.nome, quantidade, observacoes,
        total: produto.preco * quantidade, status: "Pendente"
    };
    pedidos.push(pedido);
    const salvou = salvarPedidos();
    renderizar();
    $("formPedido").reset();
    valorEstimado();
    if (salvou) mostrarMensagem("Pedido cadastrado com sucesso!");
    else mostrarMensagem("Pedido cadastrado, mas não foi possível salvá-lo no navegador. Ele será perdido ao atualizar a página.", true);
}

function concluirPedido(id) {
    const pedido = pedidos.find((item) => item.id === id);
    if (!pedido) return;
    pedido.status = "Concluído";
    salvarPedidos();
    renderizar();
}

function renderizar() {
    const lista = $("listaPedidos");
    lista.replaceChildren();
    const termo = $("pesquisa").value.trim().toLocaleLowerCase("pt-BR");
    const visiveis = pedidos.filter((p) =>
        p.cliente.toLocaleLowerCase("pt-BR").includes(termo) ||
        p.produtoNome.toLocaleLowerCase("pt-BR").includes(termo)
    );
    if (!visiveis.length) {
        const vazio = document.createElement("p");
        vazio.className = "vazio";
        vazio.textContent = pedidos.length ? "Nenhum pedido encontrado." : "Nenhum pedido registrado. Cadastre o primeiro pedido!";
        lista.append(vazio);
    }
    for (const pedido of visiveis) {
        const concluido = pedido.status === "Concluído";
        const artigo = document.createElement("article");
        artigo.className = concluido ? "pedido pedido-concluido" : "pedido";
        const topo = document.createElement("div"); topo.className = "pedido-topo";
        const titulo = document.createElement("h3"); titulo.textContent = pedido.cliente;
        const etiqueta = document.createElement("span");
        etiqueta.className = concluido ? "etiqueta etiqueta-concluido" : "etiqueta";
        etiqueta.textContent = concluido ? "✓ Concluído" : pedido.status;
        topo.append(titulo, etiqueta);
        const detalhe = document.createElement("p");
        detalhe.textContent = `${pedido.quantidade} × ${pedido.produtoNome} · ${formatarMoeda(pedido.total)}`;
        const rodape = document.createElement("div"); rodape.className = "pedido-rodape";
        const codigo = document.createElement("small"); codigo.textContent = `Pedido ${pedido.id.slice(-5).toUpperCase()}`;
        const botao = document.createElement("button"); botao.type = "button"; botao.className = "botao botao-secundario";
        botao.textContent = concluido ? "Concluído" : "Concluir";
        botao.disabled = concluido;
        botao.addEventListener("click", () => concluirPedido(pedido.id));
        rodape.append(codigo, botao);
        artigo.append(topo, detalhe);
        if (pedido.observacoes) {
            const obs = document.createElement("p"); obs.className = "observacao";
            obs.textContent = `Observações: ${pedido.observacoes}`;
            artigo.append(obs);
        }
        artigo.append(rodape);
        lista.append(artigo);
    }
    $("totalPedidos").textContent = pedidos.length;
    $("pedidosPendentes").textContent = pedidos.filter((p) => p.status === "Pendente").length;
    $("valorTotal").textContent = formatarMoeda(pedidos.reduce((soma, p) => soma + p.total, 0));
}

// Configura o evento de envio do formulário (o id correto é "formPedido").
const formulario = $("formPedido");
if (formulario) formulario.addEventListener("submit", criarPedido);
$("produto").addEventListener("change", valorEstimado);
$("quantidade").addEventListener("input", valorEstimado);
$("pesquisa").addEventListener("input", renderizar);
valorEstimado();
renderizar();