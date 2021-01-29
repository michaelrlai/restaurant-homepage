
function drawHome () {
    const main = document.querySelector(".main");
    
    const home = document.createElement("h1");
    home.classList.add("home");
    home.textContent = "Plate and Spice";
    main.appendChild(home); 
}

export { drawHome };