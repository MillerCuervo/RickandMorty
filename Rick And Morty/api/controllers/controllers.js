export async function buscarPersonajes(url) {
  let urlParaBuscar = url || "https://rickandmortyapi.com/api/character/";

  let data = await fetch(urlParaBuscar);
  let dataParseada = await data.json();

  let arrayDePersonajes = dataParseada.results.map((personaje) => {
    return {
      id: personaje.id,
      nombre: personaje.name,
      especie: personaje.species,
      imagen: personaje.image,
    };
  });

  return {
    previous: dataParseada.info.prev,
    next: dataParseada.info.next,
    arrayDePersonajes: arrayDePersonajes,
  };
}