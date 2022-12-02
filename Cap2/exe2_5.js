/* Programa Farmácia JS na compra de 2 unidades, recebe como desconto os centavos do valor total, ler a descrição e preço de um medicamento. Informe o valor do produto na promoção */

function calcularPreco() {
    // cria referência aos elementos da página
    let inDescricao = document.getElementById("inDescricao");
    let inPreco =  document.getElementById("inPreco");
    let outDescricao = document.getElementById("outDescricao");
    let outPreco = document.getElementById("outPreco");

    // obtém o conteúdo dos campos de entrada
    let descricao = inDescricao.value;
    let preco = Number(inPreco.value);

    let valor = Math.floor(preco * 2);

    // altera o conteúdo dos parágrafos de resposta
    outDescricao.textContent = "Promoção de " + descricao;
    outPreco.textContent = "Leve 2 por apenas R$: " + valor.toFixed(2)
}
 
// cria uma referência ao elemento btPromocao (botão)
let btPromocao = document.getElementById("btCalcular");
// registra uma evento associado ao botão, para carregar uma função
btCalcular.addEventListener("click", calcularPreco);
