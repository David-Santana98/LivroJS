// programa que verifica a velocidade de um condutor e se estiver acima é gerado uma multa de acordo com velocidade.
function verificaVelocidade() {
  var inVeloPermitida = document.getElementById("inVeloPermitida");
  var inVeloCondutor = document.getElementById("inVeloCondutor");
  var outResposta = document.getElementById("outResposta");

  var velPermitida = Number(inVeloPermitida.value);
  var velCondutor = Number(inVeloCondutor.value);

  if (velPermitida == "" || isNaN(velPermitida) || velCondutor == "" || isNaN(velCondutor)) {
    alert("Velocidade permitida é inválida...");
    inVeloPermitida.focus();
    return;
  }

  // cria as condições para verificar situação do condutor
  if (velCondutor <= velPermitida){
    outResposta.textContent = "situação: Sem Multa";
   } else {
     var maisVinte =  velPermitida * 1.2;
     if (velCondutor <= maisVinte){
        outResposta.textContent = "Situação: Multa Leve";
     } else {
        outResposta.textContent = "Situação: Multa Grave";
     }
   }
}
var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", verificaVelocidade);
