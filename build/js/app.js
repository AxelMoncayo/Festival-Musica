function iniciarApp(){navegacionFija(),crearGaleria(),scrollNav()}function navegacionFija(){const e=document.querySelector(".header"),n=document.querySelector(".sobre-festival"),t=document.querySelector("body");window.addEventListener("scroll",(function(){n.getBoundingClientRect().top<0?(e.classList.add("fija"),t.classList.add("body-scroll")):(e.classList.remove("fija"),t.classList.remove("body-scroll"))}))}function scrollNav(){document.querySelectorAll(".nav-principal a").forEach(e=>{e.addEventListener("click",(function(e){e.preventDefault();const n=e.target.attributes.href.value;document.querySelector(n).scrollIntoView({behavior:"smooth"})}))})}function crearGaleria(){const e=document.querySelector(".galeria-imagenes");for(let n=1;n<=12;n++){const t=document.createElement("div");t.innerHTML=`\n        <img\n          src="build/img/thumb/${n}.jpg"\n          alt="imagen de galeria"\n        /> \n      `,t.onclick=function(){mostrarImagen(n)},e.appendChild(t)}}function mostrarImagen(e){const n=document.createElement("div");n.innerHTML=`\n        <img\n          src="build/img/grande/${e}.jpg"\n          alt="imagen de galeria"\n        /> \n    `;const t=document.createElement("div");t.appendChild(n),t.classList.add("overlay"),t.onclick=function(){document.querySelector("body").classList.remove("fijar-body"),t.remove()};const o=document.createElement("p");o.textContent="X",o.classList.add("boton-cerrar"),o.onclick=function(){document.querySelector("body").classList.remove("fijar-body"),t.remove()},t.appendChild(o);const c=document.querySelector("body");c.appendChild(t),c.classList.add("fijar-body")}document.addEventListener("DOMContentLoaded",(function(){iniciarApp()}));
//# sourceMappingURL=app.js.map
