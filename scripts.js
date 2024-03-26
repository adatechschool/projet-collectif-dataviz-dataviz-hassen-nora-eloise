function festivalsPaysLoire() {
  let ulElement = document.querySelector("dd")
  fetch("https://data.culture.gouv.fr/api/explore/v2.1/catalog/datasets/festivals-global-festivals-_-pl/exports/json").then((response) => {
    return response.json()
  }).then((festivals) => {
    console.log(festivals)
    for (let festival of festivals.results) {
      let liElement = document.createElement("li")
      liElement.innerText = festival.nom_du_festival
      liElement.innerText += " || " + festival.discipline_dominante
      ulElement.appendChild(liElement)
    }
  })
}

function festivalsLoireAtlantique() {
  const trElement = document.querySelector("tr")
  const tr2Element2 = document.createElement("tr")
  fetch("https://data.culture.gouv.fr/api/explore/v2.1/catalog/datasets/festivals-global-festivals-_-pl/exports/json").then((response) => {
    return response.json()
  }).then((festivals) => {
    console.log(festivals)
    for (const festival of festivals.results) {
      const thElement = document.createElement("li")

      thElement.innerText = festival.nom_du_festival
      liElement2.innerText = festival.
        trElement.appendChild(liElement)
      trElement.appendChild(liElement2)
    }
  })
}

function festivalsParCatégories() {
  //tailleList = []
  //const ulElement = document.querySelector("ul")
  fetch("https://data.culture.gouv.fr/api/explore/v2.1/catalog/datasets/festivals-global-festivals-_-pl/exports/json").then((response) => {
    return response.json()
  }).then((festivals) => { //festivals contient 7283 objets festival
    festFilter = festivals.filter(isPaysdeLaLoire) // contient 332 objets festival en pays de la loire
    //musicFilter=festFilter.filter(isMusic) // 163 festival de musique du pays de la loire
    let listbytheme = isDisciplineDominante(festFilter)
    console.log(listbytheme)
    //tailleList=musicFilter.length //taille de la liste des festival de musique du pays de la loire
    /* for (let festival of {listbytheme}){ //affiche chacun d'eux avec 
     const liElement=document.createElement("li")
     liElement.innerText=festival.key //leur nom
     liElement.innerText+=" || " +festival.value // leur thème
     ulElement.appendChild(liElement) //affiche chaque ligne entre les balises ul de la page index
  } */
    //console.log(listbytheme)
    return listbytheme // nombre de festival de musique du pays de la loire
  })

}

list = [163, 73, 44, 25, 16, 11]
function anglesCamembert(total, valeurs) {
  valeurs.forEach(element => {
    pourcentage = (100 * element) / total
    angle = (360 * pourcentage) / 100
    console.log(pourcentage, angle)
  });
}

function isPaysdeLaLoire(list) {

  return list.region_principale_de_deroulement === "Pays de la Loire"
}

function isMusic(list) {
  return list.discipline_dominante === "Musique"
}
function isLivres(list) {
  return list.discipline_dominante === "Livre, littérature"
}

function isDisciplineDominante(list) {
  let listGroupDiscipline = Object.groupBy(list, ({ discipline_dominante }) => discipline_dominante);
  //console.log(listGroupDiscipline)
  return listGroupDiscipline

}

/* function affichagePopMap() {
  listObjet = []
  fetch("https://data.culture.gouv.fr/api/explore/v2.1/catalog/datasets/festivals-global-festivals-_-pl/exports/json").then((response) => {
    return response.json()
  }).then((festivals) => {
    festFilter = festivals.filter(isPaysdeLaLoire) // contient 332 objets festival en pays de la loire

  })
  //console.log(listObjet)
  return listObjet
} 
  let trElement = document.querySelector("tr")
  let tr2Element2 = document.createElement("tr")
  fetch("https://data.culture.gouv.fr/api/explore/v2.1/catalog/datasets/festivals-global-festivals-_-pl/records?limit=100&refine=departement_principal_de_deroulement%3ALoire-Atlantique&refine=region_principale_de_deroulement%3A%22Pays%20de%20la%20Loire%22").then((response) => {
    return response.json()
  }).then((festivals) => {
    console.log(festivals)
    for (let festival of festivals.results) {
      let thElement = document.createElement("li")

      thElement.innerText = festival.nom_du_festival
      liElement2.innerText = festival.
        trElement.appendChild(liElement)
      trElement.appendChild(liElement2)
    }
  })
*/

function festivals() {
  tailleList = []
  let ulElement = document.querySelector("dd")
  fetch("https://data.culture.gouv.fr/api/explore/v2.1/catalog/datasets/festivals-global-festivals-_-pl/exports/json").then((response) => {
    return response.json()
  }).then((festivals) => { //festivals contient 7283 objets festival
    festFilter = festivals.filter(isPaysdeLaLoire) // contient 332 objets festival en pays de la loire
    musicFilter = festFilter.filter(isMusic) // 163 festival de musique du pays de la loire
    let listbytheme = isDisciplineDominante(festFilter)

    //console.log(listbytheme)
    tailleList = musicFilter.length //taille de la liste des festival de musique du pays de la loire
    for (let festival of musicFilter) {

      //affiche chacun d'eux avec 
      let liElement = document.createElement("li")
      liElement.innerText = festival.nom_du_festival //leur nom
      liElement.innerText += " || " + festival.discipline_dominante // leur thème
      ulElement.appendChild(liElement) //affiche chaque ligne entre les balises ul de la page index
    }
    return tailleList // nombre de festival de musique du pays de la loire
    //console.log(tailleList)
  });

}

function createMap() {
  window.onload = function () {

    let map = L.map('map').setView([47.22105206554747, -1.5328920498252216], 8);

    //carte streets
    let googleStreets = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 20,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    //carte sattelite
    let googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    });

    //carte Terrain
    let googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    });

    //carte de traffic
    let googleTraffic = L.tileLayer('https://{s}.google.com/vt/lyrs=m@221097413,traffic&x={x}&y={y}&z={z}', {
      maxZoom: 20,

      subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    });

    let googleTransport = L.tileLayer('http://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png', {
      maxZoom: 18,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    })

    // Ajouter les couches de tuiles à la carte
    googleStreets.addTo(map);

    L.control.layers({
      "Streets": googleStreets,
      "Satellites": googleSat,
      "Terrain": googleTerrain,
      "Traffic": googleTraffic,
      "Transport": googleTransport, 
      
    }).addTo(map);

    markersData(map)

  }

}

function markers(map, festivalLat, festivalLng, festivalNames, festivalCategory, festivalWebSites) {
  // Définir les icônes pour chaque catégorie
  let iconMusic = L.icon({
    iconUrl: "music-band.png",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30]
  });

  let iconSpectacle = L.icon({
    iconUrl: "theatre.png",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30]
  });

  let iconLiterature = L.icon({
    iconUrl: "livre-ouvert.png",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30]
  });

  let iconDigitalArts = L.icon({
    iconUrl: "dessin-numerique.png",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30]
  });

  let iconAudioVisual = L.icon({
    iconUrl: "television.png",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30]
  });

  // Boucle pour créer les marqueurs en fonction de la catégorie
  for (let i = 0; i < festivalCategory.length; i++) {
    let icon;
    // Sélectionner l'icône en fonction de la catégorie
    switch (festivalCategory[i]) {
      case "Musique":
        icon = iconMusic;
        break;
      case "Spectacle vivant":
        icon = iconSpectacle;
        break;
      case "Livre, littérature":
        icon = iconLiterature;
        break;
      case "Arts numériques":
        icon = iconDigitalArts;
        break;
      case "Audiovisuel":
        icon = iconAudioVisual;
        break;
      default:
        icon = iconMusic; // Par défaut, utilisez l'icône de musique
        break;
    }
    // Ajouter le marqueur avec l'icône correspondante
    L.marker([festivalLat[i], festivalLng[i]], { icon: icon }).addTo(map)
      .bindPopup(
        "<b>Nom :</b> " + festivalNames[i] + "<br>" +
        "<b>Catégorie :</b> " + festivalCategory[i] + "<br>" +
        "<b>Site Web :</b> <a href='" + festivalWebSites[i] + "' target='_blank'>" + festivalWebSites[i] + "</a>"
      );
  // //L.marker([47.09675,-1.26776], { icon: customIcon }).addTo(map).bindPopup(festivalNames);
  // for (let i = 0; i < festivalLat.length; i++) {
  //   L.marker([festivalLat[i], festivalLng[i]], { icon: iconMusic }).addTo(map)
  //   .bindPopup(
  //     "<b>Nom :</b> " + festivalNames[i] + "<br>" + // Utilisation de <b> pour du texte en gras
  //     "<b>Catégorie :</b> " + festivalCategory[i] + "<br>" + // Utilisation de <b> pour du texte en gras
  //     "<b>Site Web :</b> <a href='" + festivalWebSites[i] + "' target='_blank'>" + festivalWebSites[i] + "</a>" // Création d'un lien avec une balise <a>
  //   );
   }
}
function markersData(map) {

  let festivalNames = [];
  let geocodageData = [];
  let festivalLat = [];
  let festivalLng = [];
  let festivalCategory = [];
  let festivalWebSites = [];

  // récup API festivals Pays de la Loire, transformation des réponses en JSON et récupération des données dans des tableaux vides
  // fetch("https://data.culture.gouv.fr/api/explore/v2.1/catalog/datasets/festivals-global-festivals-_-pl/records?limit=-1&refine=region_principale_de_deroulement%3A%22Pays%20de%20la%20Loire%22")
  //   .then((resp) => resp.json())
  //   .then(data => {
    fetch("https://data.culture.gouv.fr/api/explore/v2.1/catalog/datasets/festivals-global-festivals-_-pl/exports/json").then((response) => {
    return response.json()
  }).then((data)=> { //festivals contient 7283 objets festival
    let festFilter = data.filter(isPaysdeLaLoire)
   

    // boucles pour récupérer les coordonnées et noms des festivals + push des données dans les tableaux festivalsNames geocodageData  festivalLng festivalLat
      for (let i = 0; i < festFilter.length; i++) {
        let result = festFilter[i];
        festivalNames.push(result.nom_du_festival);
      }   
      for (let i = 0; i < festFilter.length; i++) {
        let result = festFilter[i];
        geocodageData.push(result.geocodage_xy);
      }

      for (let i = 0; i < festFilter.length; i++) {
        let result = festFilter[i];
        festivalLat.push(result.geocodage_xy.lat);
        festivalLng.push(result.geocodage_xy.lon);
      }

      for (let i = 0; i < festFilter.length; i++) {
        let result = festFilter[i];
        festivalCategory.push(result.discipline_dominante)

      }
      for (let i = 0; i < festFilter.length; i++) {
        let result = festFilter[i];
        festivalWebSites.push(result.site_internet_du_festival)
      }
      markers(map, festivalLat, festivalLng, festivalNames, festivalCategory, festivalWebSites)
    });
}


