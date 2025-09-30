const botao = document.getElementById("botao-principal");

const input = document.getElementById('nome');

botao.addEventListener('click' , exibirValordoCampo);

function exibirValordoCampo () {
    alert(input.value);
}