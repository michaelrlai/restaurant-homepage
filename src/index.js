import { drawHeader } from "./header";
import { drawHome } from "./home";
import { drawFooter } from "./footer";
import { drawMenu } from "./menu";
import { drawAbout } from "./about";






function draw() {

    
    const content = document.querySelector("#content");

    drawHeader();
    drawHome();
    drawFooter();


    content.addEventListener("click", function(e) {
        console.log(e.target);
        if (e.target.matches("div.nav-home")) {
            document.querySelector(".main").remove();
            drawHome();
        } else if (e.target.matches("div.nav-menu")) {
            document.querySelector(".main").remove();
            drawMenu();
        } else if (e.target.matches("div.nav-about")) {
            document.querySelector(".main").remove();
            drawAbout();
        }

    });

}


draw();