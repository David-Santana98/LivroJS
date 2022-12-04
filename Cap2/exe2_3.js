// PROGRAMA SUPERMERCADO JS
// comprando 3 itens do mesmo tipo, no terceiro item o cliente recebe 50% de desconto, ler descrição e preço e apresentar a mensagem indicando a promoção.

function verPromocao(){
    let inProduto = document.getElementById("inProduto");
    let inPreco = document.getElementById("inPreco");
    let outPromocao = document.getElementById("outPromocao")
    let outPrecoTerc =document.getElementById("outPrecoTerc")



    let produto = inProduto.value;
    let preco = Number(inPreco.value);

    let terceiro = preco / 2;
    let total = (preco * 2) + terceiro;

    outPromocao.textContent = produto + " Promoção: Leve 3 por apenas R$: " + total.toFixed(2)
    outPrecoTerc.textContent = "O 3º produto custa apenas R$: " + terceiro.toFixed(2) + " Adquirá já!";

}

let btPromocao = document.getElementById("btPromocao");
btPromocao.addEventListener("click", verPromocao);