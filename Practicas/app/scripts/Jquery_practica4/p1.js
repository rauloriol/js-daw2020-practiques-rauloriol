/**
 * PUNTO 1
 * Crear links para back to the top
 */

// creacion de un p donde se dirige el href
/* $('body').find('h1').before().append('<p id="inicio"></p>'); */
// despues de cada p inserta el enlace
/* $('div.chapter').find('p').after('<a href="#inicio">Back to the top</a>'); */

/**
 * PUNTO2
 * Mover los foodnoter
 */
const $footer = $('.footnote').get(); // seleccionar los spans
$('div#footer').before($footer); // Seleccionar el footer y instroducir los spans antes

/**
 * PUNTO3
 * Introducir las notas en una lista numerada
 */
$('div#footer').before('<ol id="listanumerada"></ol>'); // crear una lista ordenda antes del footer
const $lista2 = $('ol#listanumerada'); // seleccionar la lista
const $footer2 = $('.footnote').get(); // seleccionar los spans

// Recorrer los spans y añadirlos dentro de la lista ordendada
for (const elemento of $footer2) {
  $lista2.append($('<li>').append(elemento));
}
/* ================================================================================= */

/**
 * PUNTO 4
 * Mover los foodnoter y introducirlos en una lista ordenada
 */

/**
 * PUNTO 5
 * Crear links para back to the top
 */

$('<p id="inicio"></p>').prependTo('body h1'); // insertar un parrafo antes de body h1
$('<a href="#inicio">Back to the top</a>').insertAfter('div.chapter p'); // Despues de cada p entro del div de clase chapter introducir el contenido
