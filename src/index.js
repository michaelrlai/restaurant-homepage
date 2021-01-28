import { drawHeader } from "./header";
import { drawFooter } from "./footer";


const content = document.querySelector("#content");


const main = document.createElement("main");
main.classList.add("main");
main.textContent = "main";
content.appendChild(main);


function draw() {
    drawHeader();
    drawFooter();
}

draw();