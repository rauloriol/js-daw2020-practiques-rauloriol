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

/**
 * Funcion asincrona que muestra dos contadores dentro del elemento body, realizan una
 * cuenta atras definida por una variable (intervalo) y  al finalizar se ejecuta una funcion
 * callback
 * @param {Int} numeroInicial  Numero desde que se inicia el contador
 * @param {Nodo} contenedor Elemento padre donde se escribe la cuenta atrás
 * @param {Int} intervalo  Intervalo en milisegundos por los que cambia cada numero
 * @param {Function} callbackFunction Funcion que se ejecuta al finalizar el contador
 */
async function cuenta(
  numeroInicial,
  contenedor = document.getElementsByTagName('body'),
  intervalo = 1000,
  funcionCallback = () => {}
) {
  let contador = numeroInicial; // Establecemos un contador

  // Mientras el tiempo no sea cero
  do {
    const promesa = temporizador(intervalo);

    try {
      // Espero a que la promsea se cumpla
      await promesa;
      contenedor.textContent = contador--; // Disminuye el valor del contador
    } catch (error) {
      // cuando la promesa no se cumple se devuelve mensaje de error y se reseta el temporizdor
      console.error(error.message);
      clearTimeout();
    }
  } while (contador >= 0);

  funcionCallback(); // Funcion que se ejecutara al llevar el contador a cero
}

export { temporizador, cuenta }; // Exportar las funciones
