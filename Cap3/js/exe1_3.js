// Programa que simula um parquímetro
function SimuParquimetro() {
 var inValor = document.getElementById("inValor");
 var outTempo = document.getElementById("outTempo");
 var outTroco = document.getElementById("outTroco");

 var valor = Number(inValor.value);


 if (valor == 0 || isNaN(valor)){
    alert("informe um valor válido de moedas...")
    inValor.focus();
    return;
 }

 if(valor < 1.00){
    alert("Valor Insuficiente (no mínimo, R$ 1.00)")
    inValor.focus();
    return;
 }

 //declarar variáveis
 var tempo;
 var troco;

 // cria as condições para verificar tempo e troco
 if(valor >= 3.00){
    tempo = 120;
    troco = valor - 3.00;
 } else if (valor >= 1.75) {
    tempo = 60;
    troco = valor - 1.75;
 } else {
    tempo = 30;
    troco = valor - 1.00;
 }
 
 // Respostas
 outTempo.textContent = "Tempo: " + tempo + "min";
 if (troco > 0) {
    outTroco.textContent = "Troco: " + troco.toFixed(2);
 }

}
var btConfirmar = document.getElementById("btConfirmar");
btConfirmar.addEventListener("click", SimuParquimetro)
