import { map } from './mapSetup.js';

export const setupMenuLogic = () => {
    const toggleButton = document.getElementById('toggle-menu');
    const leftMenu = document.getElementById('left-menu');
    const campus = document.getElementById('bari-campus');

    campus.addEventListener('click', () => {
        map.setView([41.1088530, 16.8789227], 18);
    });

    const taranto = document.getElementById('taranto');
    taranto.addEventListener('click', () => {
        map.setView([40.526069, 17.281923], 18);
    });

    const amministrazione = document.getElementById('amministrazione');
    amministrazione.addEventListener('click', () => {
        map.setView([41.111413, 16.883224], 18);
    });

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
};
