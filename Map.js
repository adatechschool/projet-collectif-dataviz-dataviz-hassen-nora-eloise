function creatMap() {
    window.onload = function () {
        console.log("page chargée");
        var map = L.map('map').setView([47.22105206554747, -1.5328920498252216], 13);

        //carte streets
        var googleStreets = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            minZoom: 1,
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        });

        //carte sattelite
        var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
            maxZoom: 20,
            subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
        });

        //carte Terrain
        var googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}', {
            maxZoom: 20,
            subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
        });

        //carte de traffic
        var googleTraffic = L.tileLayer('https://{s}.google.com/vt/lyrs=m@221097413,traffic&x={x}&y={y}&z={z}', {
            maxZoom: 20,
            minZoom: 2,
            subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
        });

        var googleTransport = L.tileLayer('http://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png', {
            maxZoom: 18,
            subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
        })

        // Ajouter les couches de tuiles à la carte
        googleStreets.addTo(map);

        L.control.layers({
            "Satellites": googleSat,
            "Terrain": googleTerrain,
            "Traffic": googleTraffic,
            "Transport": googleTransport
        }).addTo(map);

        // Ajouter un marqueur avec popup de heavy metal
        var customIcon = L.icon({
            iconUrl: "guitare-electrique-pour-heavy-metal.png",  // URL de l'icône de marqueur
            iconSize: [30, 30],           // Taille de l'icône en pixels
            iconAnchor: [15, 30],         // Point d'ancrage de l'icône, normalement la moitié de sa taille
            popupAnchor: [0, -30]         // Point d'ancrage de la popup par rapport à l'icône
        });

        // Ajouter le marqueur avec l'icône personnalisée et la popup
        var stationLat = 47.09675;
        var stationLng = -1.26776;
        var stationMarker = L.marker([stationLat, stationLng], { icon: customIcon }).addTo(map)
                            .bindPopup("Hellfest");
    }
}    