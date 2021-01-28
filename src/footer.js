
function drawFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");
    content.appendChild(footer);

    const footerNav = document.createElement("div"); // Draws nav controls in footer box
    footerNav.classList.add("footer-nav");
    footer.appendChild(footerNav);

    function navButtons() { // Draws buttons of nav bar
        const buttons = ["careers", "menu", "about", "contact"] 
        for (let i = 0; i < buttons.length; i++) {
            const button = document.createElement("div");
            button.classList.add(`nav-${buttons[i]}`, "footer-button");
            button.textContent = buttons[i];
            footerNav.appendChild(button);
        }
    }
    navButtons();

}

export { drawFooter };