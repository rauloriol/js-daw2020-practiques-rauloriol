$(document).ready(() => {
  // AL hacer click en el boton, seleccionar el numero de elementos hijos
  $('#button1').click(() => {
    // Seleccionamos la clase div y introducimos en la constante el numero de variables
    const numElementossegDiv = $('.div').children().length;

    // crear párrafo en el tercer div con el numero de variables que tiene el segundo parrafo
    $('div')
      .last()
      .append(
        `<p> El numero de elementos del segundo div es:  ${numElementossegDiv} </p>`
      );
  });
});
