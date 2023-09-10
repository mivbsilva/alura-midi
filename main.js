function tocaSom (idElementoAudio) {
	document.querySelector(idElementoAudio).play();
}

//document.querySelector('.tecla_pom').onclick = tocaSomPom;

const listaDeTeclas = document.querySelectorAll('.tecla');

//enquanto
for (let contador = 0; contador < listaDeTeclas.length; contador ++) {

	const tecla = listaDeTeclas[contador];
	const instrumento = tecla.classList[1];
	const idAudio = `#som_${instrumento}`

	//console.log(idAudio);

	tecla.onclick = function() {
		tocaSom(idAudio);
	}

	tecla.onkeydown = function(evento) {

		if ('Espaço') {
			tecla.classList.add('ativa')
		}

	tecla.onkeyup = function() {
		tecla.classList.remove('ativa')
	}
	}
}

