//Programa que verifica se três lados podem formar um triângulo, caso possa formar um triângulo exibir qual seu tipo: Equilátero(3 lados iguais), Isóseles(2 lados iguais) e Escaleno(3 lados diferentes)
function formarTriangulo() {
  var inLadoA = document.getElementById("inLadoA");
  var inLadoB = document.getElementById("inLadoB");
  var inLadoC = document.getElementById("inLadoC");
  var outLados = document.getElementById("outLados");
  var outTipo = document.getElementById("outTipo");

  var ladoA = Number(inLadoA.value);
  var ladoB = Number(inLadoB.value);
  var ladoC = Number(inLadoC.value);

  if (
    ladoA == 0 ||
    ladoB == 0 ||
    ladoC == 0 ||
    isNaN(ladoA) ||
    isNaN(ladoB) ||
    isNaN(ladoC)
  ) {
    alert("informe lados válido para o triângulo");
    inLadoA.focus();
    return;
  }
  // condições para exibir a resposta
  if (ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB) {
    outLados.textContent = "Lados não podem formar um triângulo";
  } else {
    outLados.textContent = "Lado podem formar uma triângulo";

    if (ladoA && ladoB == ladoC) {
      outTipo.textContent = "Tipo: Equilátero";
    } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
      outTipo.textContent = "Tipo: Isóceles";
    } else {
      outTipo.textContent = "Tipo: Escaleno";
    }
  }
}
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", formarTriangulo);
