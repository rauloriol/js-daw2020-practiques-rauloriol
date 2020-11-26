document.addEventListener('keydown', function (evento) {
  if (evento.altKey && evento.keyCode == 123) {
    document.body.style.backgroundImage =
      'url(https://source.unsplash.com/random)';
  }
});
