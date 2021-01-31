$('body')
  .children('p')
  .on('click', function (evento) {
    evento.preventDefault();
    console.log('has hecho click');
    $(this).css({ background: 'yellow', 'font-weight': 'bold' });
  });
