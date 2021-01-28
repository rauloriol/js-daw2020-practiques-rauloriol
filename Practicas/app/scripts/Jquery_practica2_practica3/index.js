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
  $('a[href^="http"],a[href~="henry"]').addClass('henrylink');

  // Cambiar color de  las filas de una tabla que son impares con odd/even
  $('table tr:nth-child(odd)').addClass('alt');

  // Marcar en negrita las obras referidas a Henry
  $('table tr td:contains("Henry")').addClass('highlight');
  //= ======================================================================
  /**
   * PRÁCTICA 3 JQUERY
   */

  // Marcar en negrita "highligth"  a la celda contigua que tenga henry como texto
  $('table')
    .first()
    .find('tr')
    .children('td:contains("Henry")')
    .next()
    .addClass('highlight');

  // Marcar en negrita "highligth" a la primera tabla de todas las celdas que son contiguas y que tienen el texto "et"
  $('table:nth-of-type(1) tr > td:contains("et")')
    .nextAll()
    .addClass('highlight');
});
