$(() => {
  const $parrafo = $('p');
  const contenido = $parrafo.text().trim(); // Obtenemos el contenido del <p> parrafo y eliminamos los espacios
  const palabras = contenido.split(' '); // Lo guardo en un array

  const spanPalabras = palabras.map((p) => `<span>${p}</span> `); // Metemos las palabras en <span> con la funcion map creando un nuevo array de palabras

  $parrafo.html(spanPalabras); // Introducir los spanPalabras dentro del parrafo con html()

  // Crear un evento para que cambie las propiedades de color y tipo de fuente al hacer click a los nuevos Spans
  $parrafo.on('click', 'span', function (ev) {
    $(this).css({ background: 'yellow', 'font-weight': 'bold' });
  });
});
