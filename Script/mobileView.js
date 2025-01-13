const mapMenu = document.getElementById('map-menu');
const menuHeader = mapMenu.querySelector('.menu-header');

let startY, startHeight, isDragging = false;

// Inizio trascinamento
menuHeader.addEventListener('mousedown', (e) => {
    isDragging = true;
    startY = e.clientY;
    startHeight = mapMenu.offsetHeight;
    document.body.style.userSelect = 'none'; // Disabilita selezione durante il trascinamento
});

menuHeader.addEventListener('touchstart', (e) => {
    isDragging = true;
    startY = e.touches[0].clientY;
    startHeight = mapMenu.offsetHeight;
});

// Durante il trascinamento
document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const deltaY = startY - e.clientY;
    mapMenu.style.height = `${Math.min(window.innerHeight, Math.max(60, startHeight + deltaY))}px`;
});

document.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const deltaY = startY - e.touches[0].clientY;
    mapMenu.style.height = `${Math.min(window.innerHeight, Math.max(60, startHeight + deltaY))}px`;
});

// Fine trascinamento
document.addEventListener('mouseup', () => {
    if (!isDragging) return;
    isDragging = false;
    document.body.style.userSelect = ''; // Ripristina la selezione
    // Aggiungi logica per espandere o chiudere del tutto
    const currentHeight = mapMenu.offsetHeight;
    if (currentHeight > window.innerHeight * 0.4) {
        mapMenu.classList.add('expanded');
        mapMenu.style.height = '70vh';
    } else {
        mapMenu.classList.remove('expanded');
        mapMenu.style.height = '60px';
    }
});

document.addEventListener('touchend', () => {
    isDragging = false;
    const currentHeight = mapMenu.offsetHeight;
    if (currentHeight > window.innerHeight * 0.4) {
        mapMenu.classList.add('expanded');
        mapMenu.style.height = '70vh';
    } else {
        mapMenu.classList.remove('expanded');
        mapMenu.style.height = '60px';
    }
});
