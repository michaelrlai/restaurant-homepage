function drawHome () {
    const main = document.createElement("main"); // Draw home page content
    main.classList.add("main");
    content.appendChild(main);

    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "Plate and Spice";
    main.appendChild(title);

}

export { drawHome };