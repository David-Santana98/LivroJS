function mostrarTabuada() {
  const inNumero = document.getElementById("inNumero");
  const outTabuada = document.getElementById("outTabuada");

  const numero = Number(inNumero.value);

  // valida o numero
  if (numero == 0 || isNaN(numero)) {
    alert("Informe um número válido...");
    inNumero.focus();
    return;
  }

  // cria uma variável do tipo String, que irá concatenar a resposta
  let resposta = "";

  // cria uma laço de repetição
  for (let i = 1; i <= 10; i++) {
    // a variável resposta vai acumulando os novos conteúdos
    resposta = resposta + numero + " x " + i + " = " + numero * i + "\n";
  }

  // O conteúdo da tag pre é alterado para exibir a tabuada do num
  outTabuada.textContent = resposta;
}
let btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", mostrarTabuada);
