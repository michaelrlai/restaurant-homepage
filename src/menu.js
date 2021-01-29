function drawMenu () {
    const main = document.querySelector(".main");

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");
    main.appendChild(menuContainer);

    const menu = document.createElement("div");
    menu.classList.add("menu");
    menu.textContent = "MENU";
    menuContainer.appendChild(menu);

}

export { drawMenu };