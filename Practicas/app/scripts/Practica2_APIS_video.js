const video = document.getElementById('video');
const parrafoDuracion = document.getElementById('duracion');

// Cuando se haga click izquierdo en el video se pausará o reanudará.
video.addEventListener('click', (ev) => {
  if (video.paused) video.play();
  else video.pause();
});

// Cuando se haga click derecho se mostrarán los minutos y segundos que dura el vídeo
// en un párrafo situado debajo del vídeo
video.addEventListener('contextmenu', (event) => {
  event.preventDefault();
  const tiempoReproduccion = parseInt(video.duration);
  let min = '';
  let seg = '';

  if (tiempoReproduccion > 59) {
    min = tiempoReproduccion / 60;
    seg = min / 60;
  } else {
    min = 0;
    seg = tiempoReproduccion;
  }

  parrafoDuracion.innerHTML = `Duracion: ${min}:${seg}`;
});
