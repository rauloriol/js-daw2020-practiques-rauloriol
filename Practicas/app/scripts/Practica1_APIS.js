// Si tenemos un valor en el session storage este se muestra en el parrafo, en caso contrario
// no se muestra nada
const seccionNombre = document.getElementById('nombreGuardado');
const entradaDatos = document.getElementById('nombreCampo');

seccionNombre.textContent = sessionStorage.getItem('nombre');

// Añadimos un evento al campo imput, al presionar Enter, se crea en sessionStorage
// una entrada que se mostrara en seccionNombre
entradaDatos.addEventListener('keyup', function (evento) {
  if (evento.key === 'Enter') {
    evento.preventDefault();
    const valor = document.getElementById('nombreCampo').value;
    sessionStorage.setItem('nombre', valor);
  }
});
