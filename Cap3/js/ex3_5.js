// Programa Raiz Quadrada caso raiz seja exata (quadrados perfeitos), caso contrário "Não há raiz exata para..."

function raizQuadrada() {
  var inNumero = document.getElementById("inNumero");
  var outResultado = document.getElementById("outResultado");

  var numero = Number(inNumero.value);

  if (numero == 0 || isNaN(numero)) {
    alert("Informe um número válido...");
    inNumero.focus();
    return;
  }

  var raiz = Math.sqrt(numero); //calcula a raiz quadrada do número

  //se o valor da variável raiz igual a este valor arredondado para baixo
  if (raiz == Math.floor(raiz)) {
    outResultado.textContent = "a raiz do número informado é: " + raiz; // mostra a raiz
  } else {
    // senão, exibe a mensagem indicando que não há raiz exata
    outResultado.textContent = "Não há raiz exata para o número: " + numero;
  }
}
var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", raizQuadrada);
