$(() => {
  // A todos los li de ul con id selected-plays apliacarles la clase horizontal y sub-level
  $('ul#selected-plays > li').addClass('horizontal sub-level');

  // Primera letra de li en mayuscula
  $('div#container > ul > li').addClass('big-letter');

  $('a[href^="mailto"]').addClass('mailto');
  $('a[href$=".pdf"]').addClass('pdflink');
  $('a[href^="http"],a[href~="henry"]').addClass('external');
});
