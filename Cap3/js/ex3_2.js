function calcularPeso(){
    var inNome = document.getElementById("inNome");
    var rbMarculino = document.getElementById("rbMasculino");
    var rbFeminino = document.getElementById("rbFeminino");
    var inAltura = document.getElementById("inAltura");
    var outResposta = document.getElementById("outResposta");


    var nome = inNome.value;
    var masculino = rbMarculino.checked;
    var feminino = rbFeminino.checked;
    var altura = Number(inAltura.value);

    // verifica se o nome foi preenchido e o sexo selecionado
    if (nome == "" || (masculino == false && feminino == false)){
        alert("Por favor, informe o nome e selecione o sexo...");
        inNome.focus();
        return;
    }

    if (altura == 0 || isNaN(altura)){
        alert("Por favor, informe a altura corretamente...");
        inAltura.focus();
        return;
    }

    // se masculino(significa se masculino for true)
    if (masculino) {
        var peso = 22 * Math.pow(altura, 2); 
    } else {
        var peso = 21 * Math.pow(altura, 2);
    }

    // apresenta a resposta (altera o conteúdo da linha outResposta)
    outResposta.textContent = nome + ": Seu peso ideal é  " +  peso.toFixed(3) + " kg";

}

// cria referência ao elemento btCalcular e registra evento associado a calcularPeso
var btResultado = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularPeso);

// function limparCampos(){
//     document.getElementById("inNome").value = "";
//     document.getElementById("rbMasculino").checked = false;
//     document.getElementById("rbFeminino").checked = false;
//     document.getElementById("inAltura").value = "";
//     document.getElementById("outResposta").textContent = "";

//     document.getElementById("inNome").focus();
// }

function limparCampos(){
    // recarrega a página 
    location.reload();
    // posiciona( joga o foco) no elemento inNome
    document.getElementById("inNome").focus();
}
var btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparCampos);