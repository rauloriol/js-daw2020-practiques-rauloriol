// Se pide permiso al usuario para recibir notificaciones solo si hace falta
const permisoNotif = Notification.permission;

if (permisoNotif == 'default') {
  Notification.requestPermission();
}

/**
 * Temporizador para la cuenta atrás
 * @param {Number} ms Milisegundos para el temporizador
 */
function temporizador(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve('Tiempo agotado');
    }, ms);
  });
}

/**
 * Crea la notificación y el evento de "click" que lo lleva a la página del video
 */
function mostrarNotifVideo() {
  const notif = new Notification('Información', {
    body: 'Se ha publicado un nuevo vídeo!',
  });

  notif.addEventListener('click', () => {
    window.open('../pages/Practica2_APIS_video.html');
  });
}

/**
 * Se hace una cuenta atrás desde 5.
 * Cuando llega a 0 se llama a la función mostrarNotifVideo().
 */
async function cuentaAtras() {
  const temp = document.getElementById('temporizador');
  let contador = 5;
  temp.innerHTML = contador;

  while (contador > 0) {
    const promesa = temporizador(1000);

    try {
      await promesa;
      contador--;
      temp.innerHTML = contador;
    } catch (error) {
      console.log(error);
      contador = -1;
    }
    /* await promesa
      .then(() => {
        num--;
        temp.innerHTML = num;
      })
      .catch((error) => {
        console.log(error);
        num = -1;
      }); */
  }
  mostrarNotifVideo();
}

cuentaAtras();
