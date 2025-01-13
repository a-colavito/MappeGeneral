document.addEventListener("DOMContentLoaded", function () {
    const mapMenu = document.getElementById("map-menu");
    const menuHeader = mapMenu.querySelector(".menu-header");

    menuHeader.addEventListener("click", function () {
        mapMenu.classList.toggle("expanded");
    });
});
