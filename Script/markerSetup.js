import { map } from './mapSetup.js';
import { points } from './pointsDataset.js';
import { iconConfig } from './iconConfig.js';

export const setupMarkers = () => {
    const allMarkers = L.markerClusterGroup({
        spiderfyOnMaxZoom: false,
        showCoverageOnHover: false,
        zoomToBoundsOnClick: true,
        disableClusteringAtZoom: 18,
    });

    points.forEach(([lat, lng, popupText, type, group, sede, piano, struttura, capacita, orari]) => {
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
            const capacityLabel = document.getElementById('capacita-title');
            const orariSection = document.getElementById('orari');
            const orariLabel = document.getElementById('orari-title');

            if (type === 'library') {
                capacityLabel.classList.remove('hidden');
                capacitySection.innerText = capacita.charAt(0).toUpperCase() + capacita.slice(1); // O qualunque altro testo da mostrare
            } else {
                capacityLabel.classList.add('hidden');
                capacitySection.innerText = "";// Rimuove il contenuto quando non è una biblioteca
            }
            if(type === 'hospital' || type === 'consueling') {
                orariLabel.classList.remove('hidden');
                orariSection.innerText = orari.charAt(0).toUpperCase() + orari.slice(1);
            }
            else{
                orariLabel.classList.add('hidden');
                orariSection.innerText = "";
            }
            const googleDirectionsLink = document.getElementById('google-directions');
            googleDirectionsLink.href = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
            map.setView([lat, lng], 18);
        });
        allMarkers.addLayer(marker);
    });
    //chiusura infobox
    document.getElementById('close-menu').addEventListener('click', () => {
        const infobox = document.getElementById('map-menu');
        infobox.classList.remove('visible');
        infobox.classList.add('hidden');
    });
    map.addLayer(allMarkers);
};
