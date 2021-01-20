const video = document.getElementById('video');
const parrafoDuracion = document.getElementById('duracion');

// Evento del video que al hacer click se pausa o se reaunda
video.addEventListener('click', (ev) => {
  if (video.paused) video.play();
  else video.pause();
});

// Al hacer click derecho se muestra en pantalla los minutos y
// segundos que tiene de duracion el video
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
