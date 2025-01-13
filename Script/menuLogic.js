import { map } from './mapSetup.js';

export const setupMenuLogic = () => {
    const toggleButton = document.getElementById('toggle-menu');
    const leftMenu = document.getElementById('left-menu');
    const campus = document.getElementById('bari-campus');
    const taranto = document.getElementById('taranto');
    const amministrazione = document.getElementById('amministrazione');
    const mapMenu = document.getElementById('map-menu');

    // Funzione per nascondere il mapMenu
    const hideMapMenu = () => {
        mapMenu.classList.add('hidden');
    };

    // Funzione per mostrare il mapMenu
    const showMapMenu = () => {
        mapMenu.classList.remove('hidden');
    };

    // Event listener per il campus
    campus.addEventListener('click', () => {
        map.setView([41.1088530, 16.8789227], 18);
        hideMapMenu();
    });

    // Event listener per Taranto
    taranto.addEventListener('click', () => {
        map.setView([40.526069, 17.281923], 18);
        hideMapMenu();
    });

    // Event listener per Amministrazione
    amministrazione.addEventListener('click', () => {
        map.setView([41.111413, 16.883224], 18);
        hideMapMenu();
    });

    // Toggle del menu laterale
    toggleButton.addEventListener('click', () => {
        leftMenu.classList.toggle('collapsed');
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

    // Riattiva il mapMenu se necessario, ad esempio con un evento sulla mappa
    map.on('click', () => {
        showMapMenu();
    });
};
