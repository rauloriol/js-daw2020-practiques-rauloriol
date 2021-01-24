// Al hacer click con e boton1
$('#boton1').click(() => {
  // Eliminar los elementos option de select
  $('select').find('option').remove();
  // Añadir un elemento option en su lugar
  $('select').append('<option value="Blanco" selected>Blanco</option>');
});
