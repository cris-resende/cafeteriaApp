const estoque = {
    "Cafe": {
        "preco": 6,
        "qtde": 10
    },
    "Leite": {
        "preco": 4,
        "qtde": 10
    },
    "Agua": {
        "preco": 3,
        "qtde": 10
    }
};


function validarCamposObrigatorios(produto, quantidade, preco, data) {
    return (produto && quantidade != null && preco != null && data);
    /*   if (produto && quantidade && preco && data) {
           return true;
       } else {
           return false;
       }
   }*/
    //return (produto && quantidade && preco && data) ? true : false;
    //RN.01 - Validação de campos obrigatórios.
}

function validarQuantidadeProdutos(quantidade) {
    return quantidade > 0;
    //RN.02 - Validação de Quantidade de Produtos.
}

function validarPrecoUnitario(preco) {
    return preco > 0;
    //RN.03 - Validação do preço unitário.
}

function registrarDataTransacao() {
    return new Date().toLocaleDateString();
    //RN.04 - Registro da data de transação.
}

function gerarNumeroTransacao() {
    return Math.floor(Math.random() * 1000000);
    //RN.05 - Geração de número de transação.
}

function validarEstoque(produto, quantidade) {
    if (estoque[produto] != null) {
        if (estoque[produto].qtde > quantidade) {
            return true;
        }
    } return false;
}

function atualizarEstoque(produto, quantidade) {
    estoque[produto].qtde = estoque[produto].qtde - quantidade;
    //RN.07 - Atualização automática do estoque.
}

function registrarVenda(produto, quantidade, preco) {
    let data = registrarDataTransacao();
    let numeroTransacao = gerarNumeroTransacao();

    let validaCampos = validarCamposObrigatorios(produto, quantidade, preco, data);
    let validarQuantidade = validarQuantidadeProdutos(quantidade);
    let validarPreco = validarPrecoUnitario(preco);
    let validaEstoque = validarEstoque(produto, quantidade);

    if (validaCampos) {
        if (validarQuantidade) {
            if (validarPreco) {
                if (validaEstoque) {

                    atualizarEstoque(produto, quantidade);
                    return ("[" + numeroTransacao + "]Venda registrada com sucesso: \n" + produto + ": " + quantidade + " unidade \nR$" + preco + " cada unidade \nData: " + data);
                } else {
                    return ("Problemas na validação de produtos no estoque.");
                }
            } else {
                return ("Problemas na validação do preço unitário.");
            }
        } else {
            return ("Problema na validação de quantidade do produto.");
        }
    } else {
        return ("Problemas na validação de campos obrigatórios.");
    }
}

function historicoVendas(mensagem) {
    const historico = document.getElementById("historicoVendas");
    const li = document.createElement("li");
    li.textContent = mensagem;
    historico.appendChild(li);
    // RN06 - Histórico de vendas.
}

function vender() {
    const produto = document.getElementById("produto").value;
    const quantidade = document.getElementById("quantidade").value;
    const preco = document.getElementById("preco").value;

    let mensagem = registrarVenda(produto, quantidade, preco);
    historicoVendas(mensagem);
}