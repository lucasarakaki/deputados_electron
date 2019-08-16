async function deputados(){  

  const template = document.getElementById("resp");

  const response = await fetch(
    `https://dadosabertos.camara.leg.br/api/v2/deputados/`
  )

  const tados = await response.json()
  tados.dados.map(function(dep) {
    template.innerHTML += `
      <div class="Takeshi2">
        <img class="image" src=${dep.urlFoto}>
        <div class="Takeshi3">
          <h3>Deputado: ${dep.nome}</h3>
          <h3>Partido: ${dep.siglaPartido},   UF: ${dep.siglaUf} </h3>          
          <h3>Email: ${dep.email}</h3>
        </div>
      </div>      
    `
    }      
  )  
}

deputados();