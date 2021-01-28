
const content = document.querySelector("#content");

const page = document.createElement("div");
content.appendChild(page);

const header = document.createElement("h1");
header.textContent = "Good Restaurant";
page.appendChild(header);

const burger = document.createElement("img");
burger.src = "burger.jpg";
burger.classList.add("burger");
page.appendChild(burger);

const paragraph = document.createElement("p");
paragraph.textContent = "Grand opening of Good Restaurant...";
page.appendChild(paragraph);