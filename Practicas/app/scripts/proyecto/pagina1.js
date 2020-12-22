import { obtenerFecha } from '../proyecto/funcionesgenericas.js';

// Si de deja pasar el tiempo 5 SEG
const tiempo = setTimeout(() => {
  crearFormulario();
  comprobarCampo();
  document.removeEventListener('keyup', presionTeclas); // detenemos el evento de presion de teclas
}, 5000);

// Al hacer control + F10
document.addEventListener('keyup', presionTeclas);

/**
 * Funcion que recibe un evento
 *  al presionar Control +F10 detiene el contador,
 * crea un campo input
 * y comprueba si este campo cumple las condiciones
 * @param {Event} event Combinacion de teclas
 */
function presionTeclas(event) {
  event.preventDefault();
  if (event.ctrlKey && event.key === 'F10') {
    clearTimeout(tiempo); // detenemos el contador
    crearFormulario();
    comprobarCampo();
    document.removeEventListener('keyup', presionTeclas); // detenemos el evento de presion de teclas
  }
}

/** Funcion que comprueba mediante una expresion regular si se cumple el campo email
 * crea dos cookies que son correo y fecha de creacion con duracion de 7 días
 * @returns {Boolean} | Devuelve si es verdadero o falso
 */
function comprobarCampo() {
  const email = document.forms.login.email;
  const mens1 = document.getElementById('mensaje1');
  const padremensaje = document.getElementById('padremensaje');
  const corr = document.getElementById('correo');

  corr.addEventListener('blur', function (ev) {
    const exp = /\S+@\S+\.\S+/; // expresion regular a comparar

    // Comparar el valor introducido en campo email y compararlo con la expresion regular
    if (exp.test(email.value) === false) {
      ev.preventDefault();
      mens1.style.color = 'red';
      mens1.textContent = 'Error formato incorrecto xxx@####.####';
    }

    // Si cumple la expresion regular, desaparece el mensaje de aviso, se crean las cookies y pasamos a pagina2.html
    else {
      padremensaje.removeChild(mens1);
      const correo = Cookies.get('correo');
      const fecha = Cookies.get('fecha');

      // Validacion de correo y fecha, si existen pasar a pagina dos, si no fuera así crearlos
      if (correo && fecha) {
        location = '../../pages/proyecto/pagina2.html';
      } else {
        Cookies.set('correo', email.value, { expires: 7 }, { path: '' });
        Cookies.set('fecha', obtenerFecha(), { expires: 7 }, { path: '' });
        location = '../../pages/proyecto/pagina2.html';
      }
    }
  });
}

/**
 * Crea un formulario en la pagina1.html y un parrafo que se mostrará si no se cumplen
 * unas condiciones dadas
 */
function crearFormulario() {
  const formulario = document.getElementById('formulario'); // Nodo padre
  const formu = document.createElement('div');
  const mensaje = document.createElement('div');
  const frase =
    "<form name='login' action='../../pages/proyecto/pagina2.html' method='get'>Email: <input name='email' type='text' id='correo'></form>";

  const frase1 = "<p id='mensaje1'></p>";
  mensaje.setAttribute('id', 'padremensaje');
  formu.innerHTML = frase;
  mensaje.innerHTML = frase1;
  formulario.appendChild(formu);
  formulario.appendChild(mensaje);
}
