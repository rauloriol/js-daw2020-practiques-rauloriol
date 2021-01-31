// cuando carge la pagina borrar los botones de dentro
// pasar raton por encima cambiar a verde

const $switcher = $('div.switcher');
const $boton = $('<div/>', {
  html:
    '<button id="default">Defecto</button><button id="narrow">Estret</button><button id="large">Gran</button>',
  class: 'cambiarEstilos',
}); /* Falta añadir hidden en class */

$(document).ready(() => {
  // cuando carge la pagina borrar los botones de dentro
  $switcher.children('button').remove();
  $switcher.append($boton); // añadimos los nuevos botones
  const $estrecho = $switcher.find('div button').eq(1);
  const $ancho = $switcher.find('div button').eq(2);

  $switcher.hover(function (ev) {
    $(this).toggleClass('hover'); // cuando pasa el raton por encima, se pone y se quita
  });

  /* $switcher.on('click', function (ev) {
    $(this).children('div.cambiarEstilos').toggleClass('hidden');
    poner hidden en cambiarestlos
  }); */

  $estrecho.on('click', function (ev) {
    console.log('has hecho click');
    $('main').toggleClass('narrow chapter');
  });
  $ancho.on('click', function (ev) {
    console.log('has hecho click');
    $('main').toggleClass('large chapter');
  });
});
