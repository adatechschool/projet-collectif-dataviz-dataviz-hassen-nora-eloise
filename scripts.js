

function festivalsPaysLoire(){
const ulElement = document.querySelector("ul")
    fetch("https://data.culture.gouv.fr/api/explore/v2.1/catalog/datasets/festivals-global-festivals-_-pl/records?limit=-1&refine=region_principale_de_deroulement%3A%22Pays%20de%20la%20Loire%22").then((response)=>{
    return response.json()
  }).then((festivals)=>{
    console.log(festivals)
    for (const festival of festivals.results){
       const liElement=document.createElement("li")
       liElement.innerText=festival.nom_du_festival
       liElement.innerText+=" || " +festival.discipline_dominante
       ulElement.appendChild(liElement)
    }
  })
}

function festivalsLoireAtlantique(){
    const trElement = document.querySelector("tr")
    const tr2Element2=document.createElement("tr")
        fetch("https://data.culture.gouv.fr/api/explore/v2.1/catalog/datasets/festivals-global-festivals-_-pl/records?limit=100&refine=departement_principal_de_deroulement%3ALoire-Atlantique&refine=region_principale_de_deroulement%3A%22Pays%20de%20la%20Loire%22").then((response)=>{
        return response.json()
      }).then((festivals)=>{
        console.log(festivals)
        for (const festival of festivals.results){
           const thElement=document.createElement("li")
           
           thElement.innerText=festival.nom_du_festival
           liElement2.innerText=festival.
           trElement.appendChild(liElement)
           trElement.appendChild(liElement2)
        }
      })
    }
    
    function festivalsMusiqueLoireAtlantique(){
        const ulElement = document.querySelector("ul")
            fetch("https://data.culture.gouv.fr/api/explore/v2.1/catalog/datasets/festivals-global-festivals-_-pl/records?limit=100&refine=discipline_dominante%3A%22Musique%22&refine=region_principale_de_deroulement%3A%22Pays%20de%20la%20Loire%22&refine=departement_principal_de_deroulement%3A%22Loire-Atlantique%22").then((response)=>{
            return response.json()
          }).then((festivals)=>{
            console.log(festivals.results)
            for (const festival of festivals.results){
               const liElement=document.createElement("li")
               liElement.innerText=festival.nom_du_festival
               ulElement.appendChild(liElement)
            }
          })
        }
    
    
    