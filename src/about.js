function drawAbout () {
    const main = document.querySelector(".main");

    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("about-container");
    main.appendChild(aboutContainer);

    const about = document.createElement("div");
    about.classList.add("about");
    about.textContent = "About Plate and Spice";
    aboutContainer.appendChild(about);

    const aboutPara = document.createElement("div");
    aboutPara.classList.add("about-para");
    aboutPara.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum placeat, delectus aut magni sed assumenda dolores deleniti! Culpa reprehenderit explicabo voluptatum, accusamus perspiciatis suscipit ut aspernatur provident, amet, omnis soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum placeat, delectus aut magni sed assumenda dolores deleniti! Culpa reprehenderit explicabo voluptatum, accusamus perspiciatis suscipit ut aspernatur provident, amet, omnis soluta.";
    aboutContainer.appendChild(aboutPara);

}

export { drawAbout };