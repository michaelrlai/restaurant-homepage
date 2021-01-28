function drawMenu () {
    const main = document.createElement("main"); // Draw home page content
    main.classList.add("main");
    content.appendChild(main);

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");
    main.appendChild(menuContainer);

    const menu = document.createElement("div");
    menu.classList.add("menu");
    menu.textContent = "MENU";
    menuContainer.appendChild(menu);

}

export { drawMenu };