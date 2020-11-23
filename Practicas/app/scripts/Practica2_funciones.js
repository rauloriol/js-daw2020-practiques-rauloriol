const cadenaLetras = []; // array vacio
const mapeo = new Map();
let contador = 0;

/**
 * Devuelve letras mediante la funcion Map con clave y valor
 */
function pedirLetras() {
  var cadena = window.prompt('Introduce una cadena de texto');
  const letra = cadena.toString();
  cadenaLetras.push(letra);

  while (cadena.length > 0 && cadena != null) {
    var cadena = window.prompt('Introduce una cadena de texto');
    cadenaLetras.push(cadena);
  }
  cadenaLetras.pop(-1); // quitamos la ultima letra

  // añadimos el array en un set para que no se repita
  // ordenamos el array
  const lista1 = new Set(cadenaLetras.sort());

  const listaString = [...lista1]; // pasamos el set a array para imprimirlo

  for (i = 0; i < listaString.length; i++) {
    contador++;
    mapeo.set(contador, listaString[i]);
  }
  // recorrer el MAP desestructurado
  for (const [clave, valor] of mapeo) {
    alert(`Clave: [${clave}] valor-> [${valor}]`);
  }
}

pedirLetras(); // Ejecutamos la funcion
