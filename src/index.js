import { drawHeader } from "./header";
import { drawMain } from "./middlecontent";
import { drawFooter } from "./footer";

import { drawHome} from "./home"
import { drawMenu } from "./menu";
import { drawAbout } from "./about";



function draw() {

    
    const content = document.querySelector("#content");

    drawHeader();
    drawMain();
    drawFooter();

    

    drawHome();


    content.addEventListener("click", function(e) {
        console.log(e.target);
        if (e.target.matches("div.nav-home")) {
            document.querySelector(".main").remove();
            drawMain();
            drawHome();
        } else if (e.target.matches("div.nav-menu")) {
            document.querySelector(".main").remove();
            drawMain();
            drawMenu();
        } else if (e.target.matches("div.nav-about")) {
            document.querySelector(".main").remove();
            drawMain();
            drawAbout();
        }

    });

}


draw();