function drawAbout () {
    const main = document.createElement("main"); // Draw home page content
    main.classList.add("main");
    content.appendChild(main);

    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("about-container");
    main.appendChild(aboutContainer);

    const about = document.createElement("div");
    about.classList.add("about");
    about.textContent = "ABOUT";
    aboutContainer.appendChild(about);

}

export { drawAbout };