// Programa Restaurante JS

function calcularPreco() {
    // cria referência aos elementos da página
    let inQuilo = document.getElementById("inQuilo");
    let inConsumo = document.getElementById("inConsumo");
    let outValor = document.getElementById("outValor");

    // Obtém conteúdo do campos de entrada 
    let quilo = Number(inQuilo.value);
    let consumo = Number(inConsumo.value);

    // calcula valor a ser pago
    let valor = (quilo / 1000) * consumo;

    // altera o conteúdo da linha de resposta 
    outValor.textContent = "Valor a pagar R$: " + valor.toFixed(2);
}

// cria referência ao elemento btCalcular
let btCalcular = document.getElementById("btCalcular");

// registra um evento associado ao botão, para carregar uma função
btCalcular.addEventListener("click", calcularPreco);