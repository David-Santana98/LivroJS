/* PROGRAMA LAN HOUSE JS 
ler o valor a cada 15 minutos de uso e o tempo de uso de um cliente em minutos informar o valor a ser pago sabendo que as frações extras devem ser cobradas de forma integral */

function calcularConsumo() {
  let inValor = document.getElementById("inValor");
  let inTempo = document.getElementById("inTempo");
  let outValor = document.getElementById("outPagar");

  let valor = Number(inValor.value);
  let tempo = Number(inTempo.value);

  let consumo = Math.ceil(tempo / 15) * valor;

  outPagar.textContent = "Valor a pagar R$ " + consumo.toFixed(2);
}
let btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularConsumo);
