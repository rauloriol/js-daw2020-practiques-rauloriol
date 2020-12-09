const padre = document.getElementById('padre');
/**
 * Funcion donde se declara una promesa, resolve cuando pasa un tiempo
 * y reject cuano pasa el doble de tiempo
 * @param {int}  milisegundos| Milisengundos
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

// Ejecutamos la funcion temporizador pasandole tiempo en milisegundos
temporizador(5000)
  // cuando La promesa finaliza con exito
  .then(() => {
    const nuevoparrafo = document.createElement('p');
    nuevoparrafo.textContent = 'Tiempo concluido';
    padre.appendChild(nuevoparrafo);
  })
  // cuando la promesa no finaliza con exito
  .catch(() => {
    const nuevoparrafo = document.createElement('p');
    nuevoparrafo.textContent = 'El tiempo no va bien';
    padre.appendChild(nuevoparrafo);
  });
