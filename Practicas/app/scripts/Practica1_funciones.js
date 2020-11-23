const cadenaLetras = [];

/**
 * Pedir letras, meterlas dentro de un array y ordenarlas de forma inversa
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

  const cadena1 = cadenaLetras.sort((z, a) => z.localeCompare(a));
  const cadenaInvertida = cadena1.reverse();
  const lista1 = new Set(cadenaInvertida);
  const listaString = [...lista1];
  alert(listaString);
}
pedirLetras(); // Ejecutamos la funcion
