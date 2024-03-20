function festivalsPaysLoire(){
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
  }
  function map(){
    window.onload = function(){
      console.log("page chargée")
      var map = L.map('map').setView([47.220,-1.530], 13);
      var tileStreets = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                  maxZoom: 19,
                  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
                  accessToken :'pk.eyJ1IjoiaGFzc2VuLTg1IiwiYSI6ImNsdHlqdWJ1ODBneTIybXFmZWpjcXRwbzcifQ.dug0wSKr1c_VIULUT1dSgQ'
              })
      tileStreets.addTo(map);
  }
  }