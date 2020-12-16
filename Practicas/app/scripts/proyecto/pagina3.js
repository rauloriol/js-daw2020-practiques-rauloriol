// TODO Hemos conseguido parsear y crear la cookie y que se muestre en el tablon falta lo que se escriba en formulario que por evento se guarde

// Objeto JSOn
const padre = document.getElementById('tablacontenedora');
const hijo1 = document.createElement('td');
const hijo2 = document.createElement('td');
const hijo3 = document.createElement('td');

let rezpuesta;
// const preguntaForm = document.forms.formulario.elements[0];
const preguntaForm = document.querySelector("textarea[name='pregunta']");
preguntaForm.addEventListener('blur', function (ev) {
  console.log(preguntaForm.value);
  console.log(ev.target.value);
  rezpuesta = ev.target.value;
});

// TODO tengo que añadir al array preguntas el valor del campo

const preguntas = {
  pregunta1: [
    {
      pregunta: rezpuesta,
      elegir: (document.forms.formulario.elements[1].value = false),
      puntuar: (document.forms.formulario.elements[3].value = 5),
    },
  ],
  // array de objetos llamados frutas, cada elemento dle array un objeto json
};

// añadir
// preguntas.pregunta1[0].pregunta.add(rezpuesta);

const respuesta = JSON.stringify(preguntas);
// console.log(respuesta);

Cookies.set('preguntas', respuesta, { expires: 1 });

const strFruteria2 = Cookies.get('preguntas');
const newFruteria = JSON.parse(strFruteria2);
console.log(
  'Tras escribir en la cookie, Es lo que hay que escribir en la tabla = ' +
    newFruteria.pregunta1[0].pregunta
);
console.log(
  'Tras escribir en la cookie, Es lo que hay que escribir en la tabla = ' +
    newFruteria.pregunta1[0].elegir
);
console.log(
  'Tras escribir en la cookie, Es lo que hay que escribir en la tabla = ' +
    newFruteria.pregunta1[0].puntuar
);

hijo1.textContent = newFruteria.pregunta1[0].pregunta;
hijo2.textContent = newFruteria.pregunta1[0].elegir;
hijo3.textContent = newFruteria.pregunta1[0].puntuar;

padre.appendChild(hijo1);
padre.appendChild(hijo2);
padre.appendChild(hijo3);

/* const loginForm = document.querySelector("form[name='formulario']");
const preguntaForm = document.querySelector("textarea[name='pregunta']");
const elegirForm = document.querySelector("input[name='elegir']");
const puntuarForm = document.querySelector("input[name='puntuar']"); */
/*
const boton = document.getElementById('boton'); */

// blur pierde el foco
/* preguntaForm.addEventListener('blur', function (ev) {
  console.log(ev.target.value);
});
elegirForm.addEventListener('blur', function (ev) {
  console.log(ev.target.value);
});
puntuarForm.addEventListener('blur', function (ev) {
  console.log(ev.target.value);
});

boton.addEventListener('submit', function (ev) {
  console.log(ev.target.value);
}); */

/*  const preguntaForm = document.forms.formulario.elements[0].value
const preguntaForm = document.forms.formulario.elements[0];
preguntaForm.addEventListener('blur', function (ev) {
  console.log(preguntaForm.value);
});

const elegirForm = document.forms.formulario.elements[1];
elegirForm.addEventListener('blur', function (ev) {
  console.log(elegirForm.value);
});

const puntuarForm = document.forms.formulario.elements[3];
puntuarForm.addEventListener('blur', function (ev) {
  console.log(puntuarForm.value); */
