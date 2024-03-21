function festivalsPaysLoire(){
  const ulElement = document.querySelector("ul")
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
        const ulElement = document.querySelector("ul")
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
      
      //carte streets
      var googleStreets = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      minZoom: 1,  
      maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        accessToken :'pk.eyJ1IjoiaGFzc2VuLTg1IiwiYSI6ImNsdHlqdWJ1ODBneTIybXFmZWpjcXRwbzcifQ.dug0wSKr1c_VIULUT1dSgQ'
        })
       
        //carte sattelite
        var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
        maxZoom: 20,
        subdomains:['mt0','mt1','mt2','mt3']
        });
        
        //carte Terrain
        googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{
          maxZoom: 20,
          subdomains:['mt0','mt1','mt2','mt3']
        });
        
        //carte de traffic
        var googleTraffic = L.tileLayer('https://{s}.google.com/vt/lyrs=m@221097413,traffic&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        minZoom: 2,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
         });
         googleTraffic.addTo(map);
        L.control.layers({
          streets:"googleStreets", 
          Sattelites: "googleSat", 
          terrain: "googleTerrain", 
          traffic: "googleTraffic"
        }); 
//les marker
      L.marker([47.220,-1.530]).addTo(map)
        .bindPopup("Ada Tech School");
      //onMapClick(e)
  }
}

list=[163,73,44,25,16,11]
function anglesCamembert(total, valeurs){
    valeurs.forEach(element => {
       angle = (360*pourcentage)/100
      console.log(pourcentage, angle)
    });
}
    
        
      