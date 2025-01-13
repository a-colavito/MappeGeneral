import { mapConfig, initialZoom, initialCoordinates } from './config.js';

export const map = L.map('map', {
    center: [initialCoordinates.lat, initialCoordinates.lng],
    zoom: initialZoom,
    minZoom: mapConfig.minZoom,
    maxZoom: mapConfig.maxZoom,
});

map.zoomControl.setPosition('bottomright');

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | <a href="https://www.flaticon.com/free-icons/uni" title="uni icons">Uni icons created by juicy_fish - Flaticon</a>',
}).addTo(map);
