const email = document.forms.login.email;
const pass = document.forms.login.password;
const mens1 = document.getElementById('mensaje1');
const mens2 = document.getElementById('mensaje2');
const boton = document.getElementById('boton');

// Al salir del foco de correo comprobar si cumple la expresion regular
const corr = document.getElementById('correo');
corr.addEventListener('focusout', function (ev) {
  const exp = /\S+@\S+\.\S+/;

  // Comparar el valor introducido en campo email y compararlo con la expresion regular
  if (exp.test(email.value) === false) {
    ev.preventDefault();
    mens1.style.color = 'red';
    mens1.textContent = 'Error formato incorrecto xxx@####.####';
  }

  // Si cumple la expresion regular eliminar el mensaje de aviso
  else {
    ev.preventDefault();
    mens1.textContent = '';
  }
});

// Al salir del foco de constraseña comprobar si cumple la expresion regular
const contrasenya = document.getElementById('passwd');
contrasenya.addEventListener('focusout', function (ev) {
  const exp = /^[a-zA-Z]{8,10}$/;
  // Comparar el valor introducido en campo contraseña y compararlo con la expresion regular
  if (exp.test(pass.value) === false) {
    ev.preventDefault();
    mens2.style.color = 'red';
    mens2.textContent = 'Error! Constraseña de 8 a 10 caracteres';
  }
  // Si cumple la expresion regular eliminar el mensaje de aviso
  else {
    ev.preventDefault();
    mens2.textContent = '';
  }
});

// Cancelar la accion del submit
boton.addEventListener('submit', function (ev) {
  ev.preventDefault();
});
