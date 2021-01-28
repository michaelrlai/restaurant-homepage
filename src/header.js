
function drawHeader() {
    const header = document.createElement("header"); // Draws header box
    header.classList.add("header");
    header.textContent = "header";
    content.appendChild(header);

    const nav = document.createElement("nav"); // Draws nav controls in header box
    nav.classList.add("nav");
    nav.textContent = "nav";
    header.appendChild(nav);
}



export { drawHeader };