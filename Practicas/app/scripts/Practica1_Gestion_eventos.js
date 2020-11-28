// Al presionar Alt+F12 cambia el fondo de pantalla que viene de un url dado
document.addEventListener('keyup', function (evento) {
  if (evento.altKey && evento.key === 'F12') {
    const img = document.getElementById('imagen');
    img.style.backgroundImage = 'url(https://source.unsplash.com/random)';
  }
});
