const nombre = document.forms.formulario.elements[0];

document.addEventListener('keyup', function (evento) {
  if (evento.key === '13') {
    console.log(nombre.value);
    localStorage.setItem('nombre', nombre.value);
  }
});
