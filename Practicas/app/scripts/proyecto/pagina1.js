// SI de deja pasar el tiempo
const tiempo = setTimeout(() => {
  const formulario = document.getElementById('formulario');
  const formu = document.createElement('div');
  const mensaje = document.createElement('div');
  const frase =
    "<form name='login' action='../../pages/proyecto/pagina2.html' method='get'>Email: <input name='email' type='text' id='correo'><br><button type='submit' id='boton'>Validar</button></form>";

  const frase1 = "<p id='mensaje1'></p>";
  formu.innerHTML = frase;
  mensaje.innerHTML = frase1;
  formulario.appendChild(formu); // añadimos nuevo formulario en contenedor padre
  formulario.appendChild(mensaje); // añadimos nuevo parrafo en contenedor padre

  comprobarCampo(); // comprobamos el campo de formulario
}, 5000);

// Al hacer control + F10
document.addEventListener('keyup', function (evento) {
  if (evento.ctrlKey && evento.key === 'F10') {
    clearTimeout(tiempo); // detenemos el tiempo
    const formulario = document.getElementById('formulario');
    const formu = document.createElement('div');
    const mensaje = document.createElement('div');
    const frase =
      "<form name='login' action='../../pages/proyecto/pagina2.html' method='get'>Email: <input name='email' type='text' id='correo'><br><button type='submit' id='boton'>Validar</button></form>";

    const frase1 = "<p id='mensaje1'></p>";
    formu.innerHTML = frase;
    mensaje.innerHTML = frase1;
    formulario.appendChild(formu); // añadimos nuevo formulario en contenedor padre
    formulario.appendChild(mensaje); // añadimos nuevo parrafo en contenedor padre

    comprobarCampo(); // comprobamos el campo de formulario
  }
});

/** Funcion que comprueba mediante una expresion regular si se cumple el campo email
 * @returns {Boolean} | Devuelve si es verdadero o falso
 */
function comprobarCampo() {
  const email = document.forms.login.email;
  const mens1 = document.getElementById('mensaje1');
  const boton = document.getElementById('boton');

  // Al salir del foco de correo comprobar si cumple la expresion regular
  // mirar con blur
  const corr = document.getElementById('correo');
  corr.addEventListener('blur', function (ev) {
    const exp = /\S+@\S+\.\S+/;

    // Comparar el valor introducido en campo email y compararlo con la expresion regular
    if (exp.test(email.value) === false) {
      ev.preventDefault();
      boton.disabled = 'true';
      mens1.style.color = 'red';
      mens1.textContent = 'Error formato incorrecto xxx@####.####';
    }

    // Si cumple la expresion regular eliminar el mensaje de aviso
    else {
      ev.preventDefault();
      mens1.textContent = '';
      boton.removeAttribute('disabled');
    }
  });
  // Cancelar la accion del submit
  boton.addEventListener('submit', function (ev) {
    ev.preventDefault();
  });
}
