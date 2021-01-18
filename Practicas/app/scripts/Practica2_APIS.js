// Se pide permiso al usuario para recibir notificaciones solo si hace falta
function notifyMe() {
  // Comprobamos si el navegador soporta las notificaciones
  if (!('Notification' in window)) {
    alert('Este navegador no soporta las notificaciones del sistema');
  }

  // Si no, tendremos que pedir permiso al usuario
  else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
      // Si el usuario acepta, lanzamos la notificación
      if (permission === 'granted') {
        const notification = new Notification('Gracias majo!');
        console.log(notification);
      }
    });
  }
}

notifyMe();
cuentaAtras();

/**
 * Temporizador para la cuenta atrás
 * @param {Number} milisegundos Milisegundos para el temporizador
 */
function temporizador(milisegundos) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve('Tiempo agotado');
    }, milisegundos);
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
    location.href('../pages/Practica2_APIS_video.html');
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
      // se resuelve la promesa
      await promesa;
      contador--;
      temp.innerHTML = contador;
    } catch (error) {
      console.log(error);
    }
  }
  mostrarNotifVideo();
}
