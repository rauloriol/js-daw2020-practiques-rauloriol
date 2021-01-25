$(() => {
  /**
   * PRÁCTICA 2 JQUERY
   */

  // A todos los li de ul con id selected-plays apliacarles la clase horizontal y sub-level
  $('ul#selected-plays > li').addClass('horizontal sub-level');

  // Primera letra de li en mayuscula
  $('div#container > ul > li').addClass('big-letter');

  // Añadir logos a los enlaces
  $('a[href^="mailto"]').addClass('mailto');
  $('a[href$=".pdf"]').addClass('pdflink');
  $('a[href^="http"],a[href~="henry"]').addClass('external');

  // Cambiar color de  las filas de una tabla que son impares con odd/even
  $('table tr:nth-child(odd)').addClass('alt');

  // Marcar en negrita las obras referidas a Henry
  $(
    'table tr:nth-child(7) td:first-child, tr:nth-child(6) td:first-child '
  ).addClass('highlight');
  //= ======================================================================
  /**
   * PRÁCTICA 3 JQUERY
   */

  // Marcar en negrita "highligth"  history
  $(
    'table tr:nth-child(7) td:first-child, table tr:nth-child(6) td:first-child'
  )
    .next()
    .addClass('highlight');

  // Marcar en negrita "highligth"
  $('table tr:nth-child(6) td:first-child').next().addClass('highlight');
});
