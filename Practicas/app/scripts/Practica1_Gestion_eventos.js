// Al presionar Alt+F12 cambia el fondo de pantalla que viene de un url dado
document.addEventListener('keydown', function (evento) {
  if (evento.altKey && evento.key == 'F12') {
    document.body.style.backgroundImage =
      'url(https://source.unsplash.com/random)';
  }
});
