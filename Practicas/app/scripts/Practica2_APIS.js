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
        console.info('Notificaciones habilitadas');
      }
    });
  }
}

notifyMe();
cuentaAtras();

/**
 * Temporizador realiza la cuenta atrás
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
 * Se crea la notificacion y con el evento click se redigire a la pagina donde
 * se encuentra el video
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
 * Funcion que ejecuta una cuentra atras de 5 segundos
 * al final la cuentra atrás se ejecuta la notificacion
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
