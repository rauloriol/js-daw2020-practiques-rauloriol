// Al empezar a arrastrar cambia la opacidad al 50% y transferir los datos q contiene
document.getElementById('capa1').addEventListener('dragstart', function (e) {
  this.style.opacity = 0.5;
  e.dataTransfer.setData('primerElemento', e.target.id);
});

// Cambia la opacidad a 0 y se resetea el texto del div
document.getElementById('capa1').addEventListener('dragend', function (e) {
  this.style.opacity = 0;
  this.innerHTML = '';
});

// Cuando entras capa1 en la capa 2, la capa 2 cambia a fondo rojo
document.getElementById('capa2').addEventListener('dragenter', function (e) {
  this.style.backgroundColor = 'red';
});

// Cancelar la accion por defecto de arrastrar capa 1 sobre capa2
document.getElementById('capa2').addEventListener('dragover', function (e) {
  e.preventDefault();
});

// Al dejar caer capa uno en dos, cambia el fondo a amarillo y el texto en capa2 y elimina capa1
document.getElementById('capa2').addEventListener('drop', function (e) {
  const primerElemento = e.dataTransfer.getData('primerElemento');

  // Si se cumple la condicion, se elimina la capa1
  if (primerElemento == 'capa1') {
    const capa1Arrastrada = document.getElementById('capa1');
    capa1Arrastrada.parentNode.removeChild(capa1Arrastrada);
  }
  this.style.backgroundColor = 'yellow';
  this.innerHTML = '¡Lo has logrado!';
});
