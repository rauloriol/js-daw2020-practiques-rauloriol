const lista = document.getElementById('listado');
const lista1 = document.getElementsByTagName('li');
const arrayLetra = [];

/**
 * Recorrer los li, introducirlos en un array y ordenarlos
 */
const ordenados = () => {
  for (const items of lista1) {
    arrayLetra.push(items.innerHTML);
    arrayLetra.sort();
  }
};

/**
 * Mostrar los elementos del array ordenado
 * @returns {Array} Array ordenado de elementos de A - Z
 */
function mostrar() {
  const mensaje = confirm('¿Quieres ordenar la lista?');

  if (mensaje === true) {
    ordenados();

    // Borrar la lista ,mientras ul tenga hijos ir borrando
    while (lista.hasChildNodes()) {
      lista.removeChild(lista.firstChild);
    }
    // Mostrar lista nueva ordenada
    for (const elemento of arrayLetra) {
      document.write(`${elemento}<br>`);
    }
  }
}

// despues de 3 segundos preguntar si ordenar
setTimeout(() => {
  mostrar();
}, 3000);
