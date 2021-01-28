
function drawFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");
    footer.textContent = "footer";
    content.appendChild(footer);
}

export { drawFooter };