let submit = document.getElementById('submit')
submit.addEventListener('click', (event) => {
	event.preventDefault()

	let pegarDadosCandidado = new PegarDados()
	pegarDadosCandidado.mostrarCandidato()
} )

//Classe que recolhe os dados do dom e chama a classe CriarSessao
class PegarDados{
	constructor(){
		this.nome = document.querySelector('#nome').value
		this.email = document.querySelector('#email').value
		this.tel01 = document.querySelector('#tel01').value
		this.tel02 = document.querySelector('#tel02').value
	}

	mostrarCandidato(){
		if(this.nome == '' || this.email == '' || this.tel01 == '')
			conferirValores(this.nome, this.email, this.tel01, this.tel02)
		
		else{
			let orientacaoCandidat = document.querySelector('#orien_ficha')
			orientacaoCandidat.style.display = "none"

			let sacaoCandidato = new CriarSessao(this.nome, this.email, this.tel01, this.tel02)
			sacaoCandidato.criarDados()
			alertaEnvio()
		}
	}
}

class CriarSessao{
	constructor(nome, email, tel01, tel02){
		this.mostrarDados = document.querySelector('#dados_candidato')
		//criação dos paragrafos que terão as labels dos dados
		this.pNome = document.createElement('p')
		this.pEmail = document.createElement('p')
		this.pTel01 = document.createElement('p')
		this.pTel02 = document.createElement('p')

		//Cria span que conterá os dados do candidato
		this.sNome = document.createElement('span')
		this.sEmail = document.createElement('span')
		this.sTel01 = document.createElement('span')
		this.sTel02 = document.createElement('span')
		
	}

	criarDados(){
		this.pNome.textContent = 'Nome completo: '
		this.pEmail.textContent = 'E-mail: '
		this.pTel01.textContent = 'Telefone 1: '
		this.pTel02.textContent = 'Telefone 2: '

		this.sNome.textContent = nome.value
		this.sEmail.textContent = email.value
		this.sTel01.textContent = tel01.value
		this.sTel02.textContent = tel02.value

		if(this.mostrarDados.textContent != ''){
			this.mostrarDados.textContent = ''
		}
		//Adição dos dados na seção candidato
		this.mostrarDados.appendChild(this.pNome)
		this.mostrarDados.appendChild(this.sNome)

		this.mostrarDados.appendChild(this.pEmail)
		this.mostrarDados.appendChild(this.sEmail)

		this.mostrarDados.appendChild(this.pTel01)
		this.mostrarDados.appendChild(this.sTel01)

		this.mostrarDados.appendChild(this.pTel02)
		this.mostrarDados.appendChild(this.sTel02)
	}

	
}

//Função para conferir os dados digitados
let conferirValores = (nome, email, tel01, tel02) => {
	let feedNome = document.querySelector('#feedNome')
	let feedEmail = document.querySelector('#feedEmail')
	let t01 = document.querySelector('#feeTel01')
	if(nome == '')
		feedNome.style.display = "block"
	else
		feedNome.style.display = "none"
	if(email == '')
		feedEmail.style.display = "block"
	else
		feedEmail.style.display = "none"
	if(tel01 == '')
		t01.style.display = "block"
	else
		t01.style.display = "none"
}



//Carrossel imagens
$(document).ready(function(){
  $('.projetos_candidato').slick({
    infinite: true,
	slidesToShow: 2,
	slidesToScroll: 2,
	arrow: false,
	responsive: [
		{
			breakpoint: 520,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}
	]
  });

  	// mascara telefone
 	$('#tel01').mask('(00)00000-0000')
	$('#tel02').mask('(00)00000-0000')

});


let alertaEnvio = () => {
	let botao = document.getElementById("show_alerta")
	botao.style.display = "block"
	botao.style.transition = '1s'
	setTimeout(() => {
		botao.style.display = "none"
	},3000)
}