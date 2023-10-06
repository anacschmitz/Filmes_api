let container = document.querySelector('.container');
let cardMaior = document.querySelector('.cardMaior')
let formulario = document.querySelector('.formulario');
let tarefa = document.querySelector('.tarefa');

formulario.addEventListener('submit', async function(event){
  event.preventDefault();
  let name = tarefa.value;
  await getFilme(name); 
})

async function getFilme(name) {
  let request = await fetch(`https://www.omdbapi.com/?s=${name}&apikey=e6c43dc6`);
  let response = await request.json();
  
  let filmes = response.Search;

  cardMaior.innerHTML = ''
  filmes.forEach((filme) => {
  let filmeName = filme['Title'];
  let imagem = filme['Poster'];
  

  cardMaior.innerHTML += `
    <div class="card">
      <div class="image"> <img src="${imagem}" alt=""></div> 
      <div>
        <h2>| ${filmeName} | </h2>
      </div>
  `
  });

}

