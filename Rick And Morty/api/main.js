import { buscarPersonajes } from "./controllers/controllers.js";

let root = document.getElementById("root");
let previousBtn = document.getElementById("previous");
let nextBtn = document.getElementById("next");
let previousUrl = "";
let nextUrl = "";

async function mostrarPersonajes(url) {
  root.innerHTML = `CARGANDO`;

  let objetoPersonajes = await buscarPersonajes(url);

  previousUrl = objetoPersonajes.previous;
  nextUrl = objetoPersonajes.next;

  let html = "";
  objetoPersonajes.arrayDePersonajes.forEach((personaje) => {
    let cardPersonaje = `<div class='card'>
                            <span>${personaje.nombre}</span>
                            <span>${personaje.especie}</span>
                            <img class='card-image' src='${personaje.imagen}'/>
                        </div>`;

    html += cardPersonaje;
  });
  root.innerHTML = html;
}



previousBtn.addEventListener("click", async () => {
  mostrarPersonajes(previousUrl);
});
nextBtn.addEventListener("click", async () => {
  mostrarPersonajes(nextUrl);
});

mostrarPersonajes();