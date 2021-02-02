const $switcher = $('div.switcher');
const $boton = $('<div/>', {
  html:
    '<button data-style="default">Defecto</button><button data-style="narrow">Estrecho</button><button data-style="large">Grande</button>',
  class: 'cambiarEstilos hidden',
});

$(document).ready(() => {
  // cuando carge la pagina borrar los botones de dentro
  $switcher.children('button').remove();
  $switcher.append($boton); // añadimos los nuevos botones

  const $botonesEstilos = $switcher.children('div.cambiarEstilos');
  const $defecto = $switcher.find('div button').eq(0);
  $defecto.addClass('selected');
  const $estrecho = $switcher.find('div button').eq(1);
  const $ancho = $switcher.find('div button').eq(2);

  $switcher.hover(function (ev) {
    $(this).toggleClass('hover'); // cuando pasa el raton por encima, se pone y se quita
  });

  $switcher.on('click', function (ev) {
    $botonesEstilos.toggleClass('hidden');
  });

  $defecto.on('click', function (ev) {
    $botonesEstilos.toggleClass('hidden');
    $estrecho.removeClass('selected');
    $ancho.removeClass('selected');
    $(this).addClass('selected');
    $('main').removeClass();
  });
  $estrecho.on('click', function (ev) {
    $botonesEstilos.toggleClass('hidden');
    $defecto.removeClass('selected');
    $ancho.removeClass('selected');
    $(this).addClass('selected');
    $('main').removeClass().addClass('narrow chapter ');
  });
  $ancho.on('click', function (ev) {
    $botonesEstilos.toggleClass('hidden');
    $defecto.removeClass('selected');
    $estrecho.removeClass('selected');
    $(this).addClass('selected');
    $('main').removeClass().addClass('large chapter ');
  });
});
