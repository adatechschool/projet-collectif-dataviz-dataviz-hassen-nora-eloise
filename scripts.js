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
    //101 à 201 https://data.culture.gouv.fr/api/explore/v2.1/catalog/datasets/festivals-global-festivals-_-pl/records?limit=-1&offset=101&refine=region_principale_de_deroulement%3A%22Pays%20de%20la%20Loire%22
    function festivalsMusiqueLoireAtlantique(){
        const ulElement = document.querySelector("ul")
            fetch("https://data.culture.gouv.fr/api/explore/v2.1/catalog/datasets/festivals-global-festivals-_-pl/exports/json").then((response)=>{
            return response.json()
          }).then((festivals)=>{
            console.log(festivals)
            for (const festival of festivals){
               const liElement=document.createElement("li")
               liElement.innerText=festival.nom_du_festival
               ulElement.appendChild(liElement)
            }
          })
        }
    
        function map(){

          window.onload = function(){
            console.log("page chargée")
            var map = L.map('map').setView([51.505, -0.09], 13);
            var tileStreets = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        maxZoom: 19,
                        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>', 
                        accessToken :'pk.eyJ1IjoiaGFzc2VuLTg1IiwiYSI6ImNsdHlqdWJ1ODBneTIybXFmZWpjcXRwbzcifQ.dug0wSKr1c_VIULUT1dSgQ'

                    })
            tileStreets.addTo(map);
        }
        }
        list=[163,73,44,25,16,11]
        function anglesCamembert(total, valeurs){
          valeurs.forEach(element => {
            pourcentage=(100*element)/total
            angle = (360*pourcentage)/100
          console.log(pourcentage, angle)
          });
          

        }
    