
document.addEventListener("DOMContentLoaded", function () {
    const mapMenu = document.getElementById("map-menu");
    const menuHeader = mapMenu.querySelector(".menu-header");

    menuHeader.addEventListener("click", function () {
        // Aggiunge/rimuove la classe "expanded" per espandere/ridurre il menu
        mapMenu.classList.toggle("expanded");
    });
});
