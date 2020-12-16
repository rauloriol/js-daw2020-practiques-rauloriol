// OBTENER EL CORREO DEL USUARIO Y IMPIRMIRLO POR PANTALLA
const padre = document.getElementById('contenedor');
const hijo = document.createElement('p');
const mostrar = document.createElement('p');
const contenido = document.location.search.slice(7).replace('%40', '@');

hijo.innerHTML = `<b>Bienvenido</b>  < ${contenido}> `;
padre.appendChild(hijo);

//* ******************************************************************************** */

function showultimavez(ultimavez) {
  mostrar.innerHTML = `La ulitma vez ha sido: <br>  <b>${ultimavez}</b>`;
  padre.appendChild(mostrar);
}

/**
 * Returns in String UTC format the date that corresponds to the current date plus one month
 *
 * @return {String} UTC
 */
function getTodayPlusMonth() {
  // Get Date object with current date
  const today = new Date();

  // Add today's milliseconds to the result of add all the milliseconds of a month
  const monthMS = today.getTime() + 1000 * 60 * 60 * 24 * 30; // se devuelve en dias (milisegundos,segundos,horaas,horasdia,diasmes)

  // Get Date object with the date in a month
  const dateNextMonth = new Date(monthMS);

  // Return it as UTC
  return dateNextMonth.toUTCString();
}

/**
 * Returns the value of the cookie identified by key
 *
 * @param {String} key Name of the cookie
 * @return {String|boolean} result If the cookie exists, will return it's value. If not, return false
 */
function getCookieValue(key) {
  const cookies = document.cookie.split('; ');
  let result = false;

  for (const cookie of cookies) {
    const [name, value] = cookie.split('=');

    if (name == key) {
      result = value;
    }
  }

  return result;
}

// dependiendo del correo lo tengo que guardar en una cookie
// Get caducity
const caducity = getTodayPlusMonth();

// Check if cookie exists
const ultimavez = getCookieValue('visita');
const persona = getCookieValue('email');

// If not exist, create it , because this is the first visit of the user
if (ultimavez == false) {
  document.cookie = `visita=${getTodayPlusMonth()};email=${contenido};expires=${caducity}`; // cuando creo una cookie le paso la hora de visita el email y la expiracion
  console.log(contenido);
  showultimavez(ultimavez);
} else if (persona !== contenido) {
  document.cookie = `visita=${getTodayPlusMonth()};email=${contenido};expires=${caducity}`; // cuando creo una cookie le paso la hora de visita el email y la expiracion
  console.log(contenido);
  showultimavez(ultimavez);
  // document.cookie = `visita=${getTodayPlusMonth()};email=${contenido};expires=Sat, 01 Jan 2000 00:00:01 GMT`;
} else {
  // document.cookie = `visita=${ultimavez};email=${contenido};expires=${caducity}`;
  showultimavez(ultimavez);
}

// Finally, show el valor de la ultima vez
// showultimavez(ultimavez);
