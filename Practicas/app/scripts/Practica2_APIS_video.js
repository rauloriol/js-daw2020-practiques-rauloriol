const video = document.getElementById('video');
const pDuracion = document.getElementById('duracion');

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
    min = Math.floor(tiempoReproduccion / 60);
    seg = tiempoReproduccion % 60;
  } else {
    min = 0;
    seg = tiempoReproduccion;
  }

  pDuracion.innerHTML = 'Duracion: ' + min + ':' + seg;
});
