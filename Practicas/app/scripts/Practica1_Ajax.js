const BASE_URL = 'https://reqres.in/api/users/';
const POSTMAN_URL = 'https://httpbin.org/post';

// Código principal dentro del evento load
// para asegurar la carga de los componentes
window.addEventListener('load', (ev) => {
  const numsecs = document.getElementById('numsecs');
  const user = document.getElementById('user');
  const boton = document.querySelector('button');

  boton.addEventListener('click', (ev) => {
    ev.preventDefault();
    clearFields();
    procesarFetch(numsecs.value, user.value);
  });
});

function clearFields() {
  document.querySelectorAll('span').forEach((element) => {
    element.innerHTML = '';
    console.log(element);
  });
}

/**
 * Funcion que de forma asincrona que  obtiene un  usuario del API 'https://reqres.in/api/users/'
 * si la peticion es correcta se hace una  peticion post enviando los datos de ese usuario a 'https://httpbin.org/post'
 * @param {Int} numsecs  Numero de segundos para obtener el usuario
  @param {Int} user numero Id del usuario
 */
async function procesarFetch(numsecs, user) {
  const etiquetaId = document.getElementById('id');
  const etiquetaEmail = document.getElementById('email');
  const etiquetaName = document.getElementById('name');
  const etiquetaStatus = document.getElementById('status');
  const status = '200'; // SI toodo es correcto devuelve un estado 200

  try {
    // Obtengo datos de usuario mediante peticion GET a la BASE_URL
    const obtenerUsuario = await fetch(`${BASE_URL}${user}?delay=${numsecs}`, {
      method: 'GET',
    });

    // En el caso de obtener un estado 404 o otro estado diferente de 200 a 299, creamos un error
    if (obtenerUsuario.ok === false) throw new Error(obtenerUsuario.status);

    // Si la peticion funciona correctamente, transformamos la respuesta a Json
    const usuarioJson = await obtenerUsuario.json();

    // Del objeto Json extraemos el Id y el Email
    etiquetaId.textContent = usuarioJson.data.id;
    etiquetaEmail.textContent = usuarioJson.data.email;

    // Objeto para insertar en la peticion post
    const payload = {
      method: 'POST',
      body: JSON.stringify(usuarioJson.data), // convertir el array data, a string
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    };

    // Envio de datos con el metodo POST
    const addUsuario = await fetch(POSTMAN_URL, payload);

    // If second API answer response.ok = false, throw an error
    if (addUsuario.ok === false) throw new Error(addUsuario.status);

    // Si la peticion funciona correctamente, transformamos la respuesta a Json
    const jsonInsertUser = await addUsuario.json();

    // Del objeto Json extraemos nombre
    etiquetaName.textContent = jsonInsertUser.json.first_name;
    // Si todo va bien el estado sera 200
    etiquetaStatus.textContent = status;

    // Si existe un error se muestra el estado del mensaje
  } catch (error) {
    etiquetaStatus.textContent = error.message;
  }
}
