// al empezar a arrastrar cambia la opacidad al 50%
document.getElementById('capa1').addEventListener('dragstart', function () {
  this.style.opacity = 0.5;
});

// cambia la opacidad a 0 y se elimina el texto del div
document.getElementById('capa1').addEventListener('dragend', function () {
  this.style.opacity = 0;
  this.innerHTML = '';
});

// cuando pasas por encima de la capa 2, la capa 2 cambia a fondo rojo
document.getElementById('capa2').addEventListener('dragover', function () {
  this.style.backgroundColor = 'red';
});

// Al dejar de arrastrar cambia el fondo a amarillo y el texto
document.getElementById('capa2').addEventListener('dragleave', function () {
  this.style.backgroundColor = 'yellow';
  this.innerHTML = '¡Lo has logrado!';
});
