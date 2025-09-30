const btnadicionar= document.getElementById('btnadicionar');
const input = document.getElementById('nome');
const lista = document.getElementById('artistas');

btnadicionar.addEventListener('click', alertaDeClique);

function alertaDeClique() {
	alert('Botão principal foi clicado!');
}