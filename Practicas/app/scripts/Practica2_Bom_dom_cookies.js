/**
 * Funcion para crear una cookie
 * @param {string} nombre Nombre de la cookie
 * @param {int} valor   Valor numero visitas
 * @param {string} expires Fecha de expiracion en string
 * @param {string} path ruta raiz donde se lee la cookie
 * @returns Se crea una cookie
 */
function setCookie(nombre, valor, expires, path) {
  const micookie =
    nombre +
    '=' +
    escape(valor) +
    (expires ? '; expires=' + expires.toGMTString() : '') +
    (path ? '; path=' + path : '');

  document.cookie = micookie;
}

/**
 * Funcion para leer la cookie recorriendo el string
 * @param {string} nombre Nombre de la cookie
 */
function getCookie(nombre) {
  const prefijo = nombre + '=';
  const cookieStartIndex = document.cookie.indexOf(prefijo);
  if (cookieStartIndex === -1) return null;
  let cookieEndIndex = document.cookie.indexOf(
    ';',
    cookieStartIndex + prefijo.length
  );
  if (cookieEndIndex === -1) cookieEndIndex = document.cookie.length;
  return unescape(
    document.cookie.substring(cookieStartIndex + prefijo.length, cookieEndIndex)
  );
}

/**
 * Funcion para contar las visitas que se hacen a la pagina hasta 10, donde se resetea
 * @param {string} nombre Nombre de la cookie
 * @param {int} duracionDias Duracion en dias hasta su expiracion
 * @returns {int} Numero de visitas
 */
function contarVisitas(nombre, duracionDias) {
  let visitas = getCookie(nombre);

  const now = new Date();
  now.setTime(now.getTime() + duracionDias * 24 * 60 * 60 * 1000);

  // Mientras no existan visitas, visitas = 1
  if (!visitas) {
    visitas = 1;
  }

  // Mientras suma de visitas sea menor de 10, suma +1 a visitas
  if (parseInt(visitas) <= 9) {
    visitas = parseInt(visitas) + 1;
    setCookie(nombre, visitas, now);

    document.write('Esta es tu visita numero: ' + visitas);
  }
  // cuando pasen de 10 visitas se elimina la cookie
  else {
    document.cookie = 'contador=; max-age=0';
  }
}

contarVisitas('contador', 30);
