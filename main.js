(()=>{"use strict";const t=document.querySelector("#content"),e=document.createElement("main");e.classList.add("main"),e.textContent="main",t.appendChild(e),function(){const t=document.createElement("header");t.classList.add("header"),content.appendChild(t);const e=document.createElement("ul");e.classList.add("nav"),t.appendChild(e),function(){const t=["home","menu","about"];for(let n=0;n<t.length;n++){const c=document.createElement("ul");c.classList.add(`nav-${t[n]}`,"nav-Button"),c.textContent=t[n],e.appendChild(c)}}()}(),function(){const t=document.createElement("footer");t.classList.add("footer"),content.appendChild(t)}()})();