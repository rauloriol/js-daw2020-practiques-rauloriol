/**
 * PUNTO 1
 * Crear links para back to the top
 */

/* var $link = $('<a href="#container">Back to the top</a>'); */
/* $('div.chapter').find('p').after($link); */

/**
 * PUNTO2
 * Mover los foodnoter
 */
// const $footer = $('.footnote').get(); // seleccionar los spans
/// $('div#footer').before($footer); // Seleccionar el footer y instroducir los spans antes

/**
 * PUNTO3
 * Introducir las notas en una lista numerada
 */
/* $('div#footer').before('<ol id="listanumerada"></ol>'); // crear una lista ordenda antes del footer
const $lista2 = $('ol#listanumerada'); // seleccionar la lista
const $footer2 = $('.footnote').get(); // seleccionar los spans

// Recorrer los spans y añadirlos dentro de la lista ordendada
for (const elemento of $footer2) {
  $lista2.append($('<li>').append(elemento));
} */
/* ================================================================================= */

/**
 * PUNTO 4
 * Mover los foodnoter y introducirlos en una lista ordenada
 */

$('div.chapter')
  .after($('span.footnote'))
  .nextAll(':not(#footer)')
  .wrapAll('<ol></ol>')
  .wrapInner('<li></li>');

/**
 * PUNTO 5
 * Crear links para back to the top
 */

const $link = $('<a href="#container">Back to the top</a>');
$link.insertAfter('div.chapter  p'); // Despues de cada p entro del div de clase chapter introducir el contenido
