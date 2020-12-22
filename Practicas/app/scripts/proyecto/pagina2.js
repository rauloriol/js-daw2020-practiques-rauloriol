// Obtener las cookies
const email = Cookies.get('correo');
const fecha = Cookies.get('fecha');

// Manipular el DOM
const padre = document.getElementById('contenedor');

// Creacion de los objetos hijos
const hijo1 = document.createElement('p');
const hijo2 = document.createElement('p');

const contenido1 = email;
const contenido2 = fecha;

function verCorreo() {
  hijo1.innerHTML = `<b>Bienvenido</b>  < ${contenido1}> `;
  padre.appendChild(hijo1);
}

function verUltimaVez() {
  hijo2.innerHTML = `La ulitma vez ha sido: <br>  <b>${contenido2}</b>`;
  padre.appendChild(hijo2);
}

verCorreo();
verUltimaVez();
