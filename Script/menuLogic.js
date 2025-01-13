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

    // Offset per spostare la mappa lateralmente
    const offset = { lat: 0, lng: 0.002 }; // Modifica "lng" per spostare la mappa orizzontalmente

    // Funzione per spostare la vista della mappa con offset
    const setMapViewWithOffset = (lat, lng, zoom) => {
        map.setView([lat + offset.lat, lng + offset.lng], zoom);
    };

    // Event listener per il campus
    campus.addEventListener('click', () => {
        setMapViewWithOffset(41.1088530, 16.8789227, 18);
        hideMapMenu();
        toggleleftmenu();
    });

    // Event listener per Taranto
    taranto.addEventListener('click', () => {
        setMapViewWithOffset(40.526069, 17.281923, 18);
        hideMapMenu();
        toggleleftmenu();
    });

    // Event listener per Amministrazione
    amministrazione.addEventListener('click', () => {
        setMapViewWithOffset(41.111413, 16.883224, 18);
        hideMapMenu();
        toggleleftmenu();
    });

    // Toggle del menu laterale
    let toggleleftmenu = () =>{
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

    // Riattiva il mapMenu se necessario, ad esempio con un evento sulla mappa
    map.on('click', () => {
        showMapMenu();
    });
};
