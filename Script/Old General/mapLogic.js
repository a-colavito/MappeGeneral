/* eslint-disable no-undef */

// Configurazione della mappa
let config = {
    minZoom: 6,
    maxZoom: 18,
};
// Ingrandimento iniziale della mappa
const zoom = 8;
// Coordinate iniziali
const lat = 41.10871;
const lng = 16.87884;
const map = L.map("map", config).setView([ lat, lng ], zoom);
map.zoomControl.setPosition('bottomright')
// Aggiunta del layer di base
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);




// Array di coordinate con popup associati e tipo di icona
let points = [
    ...[
        [ 41.1088530, 16.8789227, "Cappella del Politecnico di Bari", "chapel", "Chiesa", "Campus “Ernesto Quagliariello”,\n Via E. Orabona, 4 - 70125 Bari", "Piano Terra", "Corpo Biblioteca Centrale" ],
        [ 41.1089143, 16.8790429, "Biblioteca Michele Brucoli", "library", "Biblioteche", "Campus “Ernesto Quagliariello”,\n Via E. Orabona, 4 - 70125 Bari", "Secondo Piano", "Corpo Biblioteca Centrale", "Posti a sedere: 136 \nPostazioni Internet: 7" ],
        [ 41.1085440, 16.8790838, "Punto Ristoro Ladisa", "restaurant", "Bar", "Campus “Ernesto Quagliariello”,\n Via E. Orabona, 4 - 70125 Bari", "Piano Terra", "Atrio Coperto Cherubini" ],
        [ 41.108923, 16.879638, "Aula Magna Attilio Alto", "auditorium", "Aula Magna", "Campus “Ernesto Quagliariello”,\n Via E. Orabona, 4 - 70125 Bari", "Primo Piano", "Aula Magna Attilio Alto" ],
        [ 41.108857, 16.878390, "Biblioteca Polilibrary", "library", "Biblioteche", "Campus “Ernesto Quagliariello”,\n Via E. Orabona, 4 - 70125 Bari", "Terzo Piano", "Corpo a Z", "Posti a sedere: 128\nPostazioni Internet: 16" ],
        [ 41.109444, 16.878766, "Biblioteca Vitruvius", "library", "Biblioteche", "Campus “Ernesto Quagliariello”,\n Via E. Orabona, 4 - 70125 Bari", "Piano Terra", "Dipartimento di Architettura, Costruzione e Design", "Posti a sedere: 86 \n Postazioni Internet: 7" ],
        [ 41.109429, 16.878465, "Aula Magna Domus Sapientiae", "auditorium", "Aula Magna", "Campus “Ernesto Quagliariello”,\n Via E. Orabona, 4 - 70125 Bari", "Piano Terra", "Dipartimento di Architettura, Costruzione e Design" ],
    ],
    ...[
        [ 40.526069, 17.281923, "Politecnico di Bari sede di Taranto", "auditorium", "Aula Magna" ],
        [ 40.526446, 17.281896, "Biblioteca Magna Grecia", "library", "Biblioteche", ],
    ],
    ...[
        [ 41.111413, 16.883224, "Politecnico di Bari, Servizi Amministrativi", "desk", "Amministrazione", "Via Giovanni Amendola 126/b, 70126 Bari BA" , "Piano Terra", "Politecnico di Bari - Segreteria Uffici" ],
    ],
];

// Elemento contenitore per i bottoni delle sedi





// Definizione delle icone personalizzate
const iconConfig = {
    library: L.icon({
        iconUrl: 'Icone/library-icon.png',
        iconSize: [ 32, 32 ],
        iconAnchor: [ 16, 32 ],
        popupAnchor: [ 0, -32 ]
    }),
    chapel: L.icon({
        iconUrl: 'Icone/chapel-icon.png',
        iconSize: [ 32, 32 ],
        iconAnchor: [ 16, 32 ],
        popupAnchor: [ 0, -32 ]
    }),
    restaurant: L.icon({
        iconUrl: 'Icone/restaurant-icon.png',
        iconSize: [ 32, 32 ],
        iconAnchor: [ 16, 32 ],
        popupAnchor: [ 0, -32 ]
    }),
    auditorium: L.icon({
        iconUrl: 'Icone/auditorium-icon.png',
        iconSize: [ 32, 32 ],
        iconAnchor: [ 16, 32 ],
        popupAnchor: [ 0, -32 ]
    }),
    desk: L.icon({
        iconUrl: 'Icone/desk-icon.png',
        iconSize: [ 32, 32 ],
        iconAnchor: [ 16, 32 ],
        popupAnchor: [ 0, -32 ]
    }),
};

// Trova il bottone del triangolo e l'elemento del menu
const toggleButton = document.getElementById('toggle-menu');
const leftMenu = document.getElementById('left-menu');



// Aggiungi i marker ai rispettivi gruppi
const allMarkers = L.markerClusterGroup({
    spiderfyOnMaxZoom: false,
    showCoverageOnHover: false,
    zoomToBoundsOnClick: true,
    disableClusteringAtZoom: 18
});

points.forEach(([lat, lng, popupText, type, group, sede, piano, struttura, capacita]) => {
    const marker = new L.marker([lat, lng], { icon: iconConfig[type] });
    marker.on('click', () => {
        const infobox = document.getElementById('map-menu');
        infobox.classList.remove('hidden');
        infobox.classList.add('visible');
        document.getElementById('menu-title').innerText = popupText;
        document.getElementById('sede').innerText = sede.charAt(0).toUpperCase() + sede.substring(1);
        document.getElementById('piano').innerText = piano.charAt(0).toUpperCase() + piano.substring(1);
        document.getElementById('struttura').innerText = struttura.charAt(0).toUpperCase() + struttura.substring(1);
        const capacitySection = document.getElementById('capacita');
        const capacityLabel = document.querySelector('h4[style=".hidden {display: none}"]'); // "Capacità"

        if (type === 'library') {
            capacityLabel.classList.remove('hidden');
            capacitySection.innerText = capacita.charAt(0) + capacita.slice(1); // O qualunque altro testo da mostrare
        } else {
            capacityLabel.classList.add('hidden');
            capacitySection.innerText = ""; // Rimuove il contenuto quando non è una biblioteca
        }

        map.setView([lat, lng], 18);

        // Nascondi gli altri elementi del menu a sinistra tranne l'intestazione
        const leftMenu = document.getElementById('left-menu');
        const leftMenuHeader = document.getElementById('left-menu-header');
        const locationButtons = document.getElementById('location-buttons');
        const resourceList = document.getElementById('resource-list');

        // Nascondi gli altri elementi
        locationButtons.style.display = 'none';
        resourceList.style.display = 'none';

        // Mantieni visibile solo l'intestazione
        // Assicurati che l'intestazione sia visibile
    });
    allMarkers.addLayer(marker);
});



map.addLayer(allMarkers);

// Chiudi il menu
document.getElementById('close-menu').addEventListener('click', () => {
    const infobox = document.getElementById('map-menu');
    infobox.classList.remove('visible');
    infobox.classList.add('hidden');
});

// Popola il menu con le risorse
function populateResourceMenu() {
    const resourceList = document.getElementById('resource-list');
    resourceList.innerHTML = '';
    const types = [ ...new Set(points.map(p => p[4])) ];

    types.forEach(type => {
        const section = document.createElement('li');
        section.innerHTML = <button>${type.charAt(0).toUpperCase() + type.slice(1)}</button>;
        section.addEventListener('click', () => filterMarkersByType(type));
        resourceList.appendChild(section);
    });
}

// Barra di ricerca
document.getElementById('search-input').addEventListener('input', e => {
    const searchTerm = e.target.value.toLowerCase();
    allMarkers.clearLayers();
    points
        .filter(p => p[2].toLowerCase().includes(searchTerm))
        .forEach(([ lat, lng, popupText, type ]) => {
            const marker = L.marker([ lat, lng ], { icon: iconConfig[type] });
            allMarkers.addLayer(marker);
        });

});

// Popola il menu e aggiunge tutti i marker alla mappa all'avvio
document.addEventListener('DOMContentLoaded', () => {
    populateResourceMenu();

});
let campus = document.getElementById('bari-campus');

campus.addEventListener('click', e => {
    map.setView([41.1088530, 16.8789227], 18);
});
let taranto  = document.getElementById('taranto');

taranto.addEventListener('click', e => {
    map.setView( [40.526069, 17.281923],18)
})
let amministrazione = document.getElementById('amministrazione');
amministrazione.addEventListener('click', e => {
    map.setView([ 41.111413, 16.883224] ,18)

})
// Aggiungi evento di clic al triangolo
toggleButton.addEventListener('click', () => {
    leftMenu.classList.toggle('collapsed');
    // Se il menu è ridotto, nascondi gli altri elementi
    const locationButtons = document.getElementById('location-buttons');
    const resourceList = document.getElementById('resource-list');

    if (leftMenu.classList.contains('collapsed')) {
        locationButtons.style.display = 'none';
        resourceList.style.display = 'none';
    } else {
        locationButtons.style.display = 'block';
        resourceList.style.display = 'block';
    }
});