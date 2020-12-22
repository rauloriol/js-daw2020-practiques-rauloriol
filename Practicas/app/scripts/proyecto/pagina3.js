import { temporizador } from '../proyecto/funcionesgenericas.js';

// Obtener las cookies
const emailCookie = Cookies.get('correo');
const fechaCookie = Cookies.get('fecha');

const botonAtras = document.getElementById('atras');
const botongrabar = document.getElementById('grabar');
const formpagina = document.getElementById('formupagina');

comprobarCampos();

cargarCuestionario(true); // Por defecto retraso es false

//  ======== array de objetos cuestionario ======
const cuestionario = [
  {
    correo: emailCookie,
    fecha: fechaCookie,
    preguntas: [],
  },
];

/**
 * @param {String} nombre | valor del atributo name del  imput de tipo radio
 * @returns El valor de campo radio, en el formulario
 */
function obtenerValorRadio(nombre) {
  const elementos = document.getElementsByName(nombre);

  for (let i = 0, len = elementos.length; i < len; ++i)
    if (elementos[i].checked) {
      return elementos[i].value;
    }
}

/**
 * Funcion que comprueba que mientras los campos del formulario estan vacios, el boton Grabar estará desactivado
 */
function comprobarCampos() {
  formpagina.addEventListener('change', () => {
    const preguntaForm = document.forms.formulario.elements[0];
    const booleanForm = document.querySelector("input[name='elegir']:checked");
    const puntuarForm = document.forms.formulario.elements[3];
    const comprobar = [preguntaForm.value, booleanForm, puntuarForm.value];
    if (
      comprobar.includes(undefined) ||
      comprobar.includes(null) ||
      comprobar.includes('')
    ) {
      botongrabar.disabled = 'true';
    } else {
      botongrabar.removeAttribute('disabled');
    }
  });
}

/** Crear la cookie con los campos de fecha, email mas los introducidos en el formulario
 * @returns {Cookie} Una cookie con los datos del formulario
 */
function crearCookies() {
  const padre = document.getElementById('tablapreguntas');

  const respuesta = JSON.stringify(cuestionario);
  Cookies.set('cuestionario', respuesta, { expires: 7 }, { path: '' });

  const strCuestionario = Cookies.get('cuestionario');
  const objetoCuestionario = JSON.parse(strCuestionario);

  for (const cuestionario of objetoCuestionario) {
    for (const pregunta of cuestionario.preguntas) {
      var hijo = document.createElement('tr');
      var hijo1 = document.createElement('td');
      var hijo2 = document.createElement('td');
      var hijo3 = document.createElement('td');
      var hijo4 = document.createElement('td');

      hijo1.textContent = pregunta.titulo;
      hijo2.textContent = pregunta.elegir;
      hijo3.textContent = pregunta.puntuar;
      hijo4.textContent = 'Guardando..';
    }

    padre.appendChild(hijo);
    padre.appendChild(hijo1);
    padre.appendChild(hijo2);
    padre.appendChild(hijo3);
    padre.appendChild(hijo4);

    const promesa = temporizador(3000);
    promesa
      .then(() => {
        padre.removeChild(hijo4);
        hijo4.textContent = 'OK';
        padre.appendChild(hijo4);
      })
      .catch((error) => {
        hijo4.textContent = 'Error';
        padre.appendChild(hijo4);
        console.log(error.message);
      });
  }
}

/**
 * Funcion para añadir nuevas preguntas al objeto Preguntas
 * mediante un array y crea la cookie
 * @returns Una nueva pregunta escrita en el formulario
 */
function nuevaPregunta() {
  const preguntaForm = document.forms.formulario.elements[0].value;
  const elegirForm = obtenerValorRadio('elegir');
  const puntuarForm = document.forms.formulario.elements[3].value;

  const nuevaPregunta = {
    titulo: preguntaForm,
    elegir: elegirForm,
    puntuar: puntuarForm,
  };

  // recorremos el array de cuestionario y hacemos push al array de preguntas con la nueva pregunta
  for (const items of cuestionario) {
    items.preguntas.push(nuevaPregunta);
    crearCookies(); // creamos la cookie
  }
}

/** Cargamos cuestionaro inicial al cargar la página
 * @param {Boolean} retraso  Es true para cargar con un retraso de 5 seg o false para que carge de forma inmediata
 * @returns Tabla cuestionario con un retraso dependiendo del parametro True | False
 */
async function cargarCuestionario(retraso) {
  botongrabar.disabled = 'true';

  if (retraso == true) {
    const promesa1 = temporizador(0);
    const promesa2 = temporizador(5000);
    try {
      // Espero que se cumpla la promesa 1
      await promesa1;
      const padre = document.getElementById('tablapreguntas');
      const hijo = document.createElement('tr');
      var hijo1 = document.createElement('td');
      hijo1.textContent = 'Cargando preguntas ...';
      padre.appendChild(hijo);
      padre.appendChild(hijo1);

      // Espero que se cumpla la promesa 2
      await promesa2;
      padre.removeChild(hijo1);
      mostrarPreguntas();
    } catch (error) {
      clearTimeout();
      hijo1.textContent = 'Error cargando las preguntas!';
    }
  } else {
    mostrarPreguntas();
  }
}

/**
 * Carga los datos de la cookie y los añade al DOM
 */
function mostrarPreguntas() {
  const strCuestionario = Cookies.get('cuestionario');
  const objetoCuestionario = JSON.parse(strCuestionario);

  for (const cuestionario of objetoCuestionario) {
    for (const pregunta of cuestionario.preguntas) {
      const padre = document.getElementById('tablapreguntas');
      const hijo = document.createElement('tr');
      const hijo1 = document.createElement('td');
      const hijo2 = document.createElement('td');
      const hijo3 = document.createElement('td');
      const hijo4 = document.createElement('td');

      hijo1.textContent = pregunta.titulo;
      hijo2.textContent = pregunta.elegir;
      hijo3.textContent = pregunta.puntuar;
      hijo4.textContent = 'OK';

      padre.appendChild(hijo);
      padre.appendChild(hijo1);
      padre.appendChild(hijo2);
      padre.appendChild(hijo3);
      padre.appendChild(hijo4);
    }
  }
}

/** Funcion asincrona para dar funcionalidad a los botones de atras y grabar */
async function savePregunta() {
  const promesa = temporizador(5000);
  const padre = document.getElementById('tablapreguntas');

  try {
    // Espero que se cumpla la promesa
    await promesa;
    botonAtras.removeAttribute('disabled'); // se elimina el disabled del boton Atras
    botongrabar.disabled = 'true'; // se añade el disabled del boton Grabar
  } catch (error) {
    // cuando la promesa no se cumple se devuelve mensaje de error y se reseta el temporizdor
    console.error(error.message);
    clearTimeout();
    const hijo = document.createElement('tr');
    const hijo1 = document.createElement('td');
    hijo1.textContent = 'Error al guardar pregunta!';
    padre.appendChild(hijo);
    padre.appendChild(hijo1);
  }
}

// Boton para grabar
botongrabar.addEventListener('click', function (ev) {
  ev.preventDefault();
  savePregunta();
  nuevaPregunta();
  formpagina.reset(); // se borran los campos del formulario
  botonAtras.disabled = 'true';
});

// Boton para tirar atras
botonAtras.addEventListener('click', function (ev) {
  ev.preventDefault();
  botongrabar.disabled = 'true';
  location = '../../pages/proyecto/pagina2.html'; // Retorna a la pagina 2
});
