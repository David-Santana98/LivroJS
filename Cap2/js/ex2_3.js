// PROGRAMA REVENDA DE VEÍCULOS JS
function mostrarPromocao() {
  // cria referência aos elementos manipulados pelo programa
  let inVeiculo = document.getElementById("inVeiculo");
  let inPreco = document.getElementById("inPreco");
  let outVeiculo = document.getElementById("outVeiculo");
  let outEntrada = document.getElementById("outEntrada");
  let outParcela = document.getElementById("outParcela");

  // Obtém conteúdo dos campos de entrada
  let veiculo = inVeiculo.value;
  let preco = Number(inPreco.value);

  // calcula valor da entrada e das parcelas
  let entrada = preco * 0.5;
  let parcela = (preco * 0.5) / 60;

  // altera o conteúdo dos paragrafos de resposta
  outVeiculo.textContent = "Promoção: " + veiculo;
  outEntrada.textContent = "Entrada em R$: " + entrada.toFixed(2);
  outParcela.textContent = " + 60x de R$: " + parcela.toFixed(2);
}

// cria uma referência ao elemento btVerPromocao (botão)
let btVerPromocao = document.getElementById("btVerPromocao");

// registra m evento associado ao botão, para carregar uma função
btVerPromocao.addEventListener("click", mostrarPromocao);
