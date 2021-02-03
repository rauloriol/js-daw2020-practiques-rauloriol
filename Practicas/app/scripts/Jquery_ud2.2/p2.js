const $switcher = $('div.switcher');

// Creacion de los botones
const $boton = $('<div/>', {
  html:
    '<button data-style="default">Defecto</button>' +
    '<button data-style="narrow">Estrecho</button>' +
    '<button data-style="large">Grande</button>',
  class: 'cambiarEstilos hidden',
});

$(document).ready(() => {
  $switcher.children('button').remove(); // cuando carge la pagina borrar los botones de dentro
  $switcher.append($boton); // añadimos los nuevos botones

  const $botonesEstilos = $switcher.children('div.cambiarEstilos');

  // Seleccionar cada uno de los botones segun su posicion
  const $defecto = $switcher.find('div button').eq(0);
  $defecto.addClass('selected'); // por defecto el primer boton tiene la clase (Selected)
  const $estrecho = $switcher.find('div button').eq(1);
  const $ancho = $switcher.find('div button').eq(2);

  // Cuando pasa el raton por encima, se pone y se quita la clase hover
  $switcher.hover(function (ev) {
    $(this).toggleClass('hover');
  });

  // Al hacer click se activa o desactiva la clase hidden
  $switcher.on('click', function (ev) {
    $botonesEstilos.toggleClass('hidden');
  });

  /*************************************************
   *
   *        Funcionalidades de los botones
   *
   **************************************************/

  // Elimina los estilos aplicados, elimina la clase selected de los demás
  $defecto.on('click', function (ev) {
    $botonesEstilos.toggleClass('hidden');
    $estrecho.removeClass('selected');
    $ancho.removeClass('selected');
    $(this).addClass('selected');
    $('main').removeClass();
  });

  // Aplica el estilo estrecho, elimina la clase selected de los demás
  $estrecho.on('click', function (ev) {
    $botonesEstilos.toggleClass('hidden');
    $defecto.removeClass('selected');
    $ancho.removeClass('selected');
    $(this).addClass('selected');
    $('main').removeClass().addClass('narrow chapter ');
  });

  // Aplica el estilo ancho, elimina la clase selected de los demás
  $ancho.on('click', function (ev) {
    $botonesEstilos.toggleClass('hidden');
    $defecto.removeClass('selected');
    $estrecho.removeClass('selected');
    $(this).addClass('selected');
    $('main').removeClass().addClass('large chapter ');
  });
});
