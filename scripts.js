function festivalsPaysLoire(){
  const ulElement = document.querySelector("dd")
      fetch("https://data.culture.gouv.fr/api/explore/v2.1/catalog/datasets/festivals-global-festivals-_-pl/records?limit=-1&refine=region_principale_de_deroulement%3A%22Pays%20de%20la%20Loire%22").then((response)=>{
      return response.json()
    }).then((festivals)=>{
      //console.log(festivals)
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
      
      function festivals(){
          const ulElement = document.querySelector("dd")
              fetch("https://data.culture.gouv.fr/api/explore/v2.1/catalog/datasets/festivals-global-festivals-_-pl/exports/json").then((response)=>{
              return response.json()
            }).then((festivals)=>{ //festivals contient 7283 objets festival par liste de 100
              //console.log(festivals)
              festivals.forEach(element => {
                console.log(element)
                for ( element of festivals){
                 
                 const liElement=document.createElement("li")
                 liElement.innerText=element.nom_du_festival
                 ulElement.appendChild(liElement)
              }
              });
              
            })
          }
    
          
  function map(){
    window.onload = function(){
      console.log("page chargée")
      var map = L.map('map').setView([47.22105206554747,-1.5328920498252216], 13);
      var tileStreets = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                  maxZoom: 19,
                  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
                  accessToken :'pk.eyJ1IjoiaGFzc2VuLTg1IiwiYSI6ImNsdHlqdWJ1ODBneTIybXFmZWpjcXRwbzcifQ.dug0wSKr1c_VIULUT1dSgQ'
              })
      tileStreets.addTo(map);
      //les marker
      L.marker([47.220,-1.530]).addTo(map)
      .bindPopup("Ada Tech School");
      //onMapClick(e)
  }
  }
 
