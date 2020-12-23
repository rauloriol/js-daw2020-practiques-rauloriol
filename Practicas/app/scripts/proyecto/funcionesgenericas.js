/**
 * Funcion que devuelve la fecha en formato string
 * @returns {string}  Fecha en formato dd-mm-yyyy hh:m:ss
 */
function obtenerFecha() {
  const hoy = new Date();
  const meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];

  const any = hoy.getFullYear();
  const mes = meses[hoy.getMonth()];
  const dia = hoy.getDate();

  const horas = hoy.getHours();
  const minutos = hoy.getUTCMinutes();
  const segundos = hoy.getSeconds();

  const fecha = ` ${dia}-${mes}-${any} <br> ${horas}:${minutos}:${segundos}`;

  return fecha.toString();
}

/**
 * Funcion donde se declara una promesa, resolve cuando pasa un tiempo
 * y reject cuano pasa el doble de tiempo
 * @param {int} tiempo Milisengundos
 * @returns {Promise} promesa
 */
function temporizador(tiempo) {
  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(clearTimeout());
    }, tiempo);

    setTimeout(() => {
      reject(new Error('Doble de tiempo'));
    }, tiempo * 2);
  });
  return promesa;
}

export { obtenerFecha, temporizador };
