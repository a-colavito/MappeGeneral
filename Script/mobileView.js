const mapMenu = document.getElementById('map-menu');
const menuHeader = mapMenu.querySelector('.menu-header');

// Aggiungi l'evento click sull'header
menuHeader.addEventListener('click', () => {
    mapMenu.classList.toggle('expanded'); // Alterna la classe "expanded"
});
