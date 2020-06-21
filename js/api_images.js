window.addEventListener('load', () => {
	fetch('https://picsum.photos/v2/list').then(res  => {
		res.json().then(data  => {
			apiImagens(data)
		}).catch(error => {
			console.log("Erro na requisição.")
		})
	}) 
})

let projetos = document.querySelectorAll('.projeto img')


let apiImagens = (data) => {
	const imagens = data.map(img => {
		return {
			url: img.download_url
		}
	})

	for(let i = 0; i < projetos.length; i++){
		projetos[i].src = imagens[i].url
	}
}