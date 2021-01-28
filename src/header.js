
function drawHeader() {
    const header = document.createElement("header"); // Draws header box
    header.classList.add("header");
    content.appendChild(header);

    const nav = document.createElement("ul"); // Draws nav controls in header box
    nav.classList.add("nav");
    header.appendChild(nav);

    function navButtons() { // Draws buttons of nav bar
        const buttons = ["home", "menu", "about"] 
        for (let i = 0; i < buttons.length; i++) {
            const button = document.createElement("ul");
            button.classList.add(`nav-${buttons[i]}`, "nav-Button");
            button.textContent = buttons[i];
            nav.appendChild(button);
        }
    }
    navButtons();

}



export { drawHeader };