import { mapConfig, initialZoom, initialCoordinates } from './config.js';

export const map = L.map('map', mapConfig).setView(
    [initialCoordinates.lat, initialCoordinates.lng],
    initialZoom
);

map.zoomControl.setPosition('bottomright');

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | icon-pack: <a href="https://www.flaticon.com/free-icons/uni" title="uni icons">Uni icons created by juicy_fish - Flaticon</a>',
}).addTo(map);
