/**
 * Borra la lista previa y ordena los elementos
 */
function mostrar() {
  const $lista = $('ul#listado'); // tomar el elemento ul como objeto Jquery
  const $lista1 = $('ul#listado').find('li').get(); // tomar todos los li de ul creando un array  dentro de un objeto Jquery

  // Ordenar las palabras con localeCompare, en idioma español
  const ordenado = $lista1.sort((a, b) =>
    $(a).text().toString().localeCompare($(b).text(), 'es')
  );

  // Recorremos el array añadimos a ul los elementos li ordenados
  for (const elemento of ordenado) {
    $lista.append(elemento);
  }
}
// despues de 3 segundos preguntar si ordenar
setTimeout(() => {
  const mensaje = confirm('¿Quieres ordenar la lista?');
  if (mensaje === true) {
    mostrar();
  }
}, 3000);
