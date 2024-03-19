const ulElement = document.querySelector("ul")
    fetch("https://data.culture.gouv.fr/api/explore/v2.1/catalog/datasets/festivals-global-festivals-_-pl/records?limit=100&refine=region_principale_de_deroulement%3A%22Pays%20de%20la%20Loire%22").then((response)=>{
    return response.json()
  }).then((festivals)=>{
    console.log(festivals.results)
    for (const festival of festivals.results){
       const liElement=document.createElement("li")
       liElement.innerText=festival.nom_du_festival
       ulElement.appendChild(liElement)
    }
  })