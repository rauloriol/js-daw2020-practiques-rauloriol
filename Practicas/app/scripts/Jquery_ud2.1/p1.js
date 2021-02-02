$(() => {
  const $p = $('p');
  const texto = $p.text().trim(); // Obtenemos el texto en el <p>
  const palabras = texto.split(' '); // Obtenemos un arreglo de palabras
  const spans = palabras.map((p) => `<span>${p}</span> `); // Metemos las palabras en <span>

  // Metemos los <span> dentro del <p>
  $p.html(spans);

  // Suscribimos una funcion para escuchar el click sobre los <span>
  $p.on('click', 'span', function () {
    $(this).css({ background: 'yellow', 'font-weight': 'bold' });
  });
});
