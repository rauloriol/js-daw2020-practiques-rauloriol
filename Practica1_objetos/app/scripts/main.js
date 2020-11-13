const primerPunto = window.prompt('Introduce coordenada X');
const segundoPunto = window.prompt('Introduce coordenada Y');

const nuevopuntoX = window.prompt('Cambiar coordenada X');
const nuevopuntoY = window.prompt('Cambiar coordenada Y');

const sumaPuntoX = window.prompt('Segundo punto X');
const sumaPuntoY = window.prompt('Segundo punto Y');

// Objeto puntos recibe dos parámetros
function Puntos(coordX, coordY) {
  this.puntoX = coordX;
  this.puntoY = coordY;

  // Método del objeto para cambiar los valores de las coordenadas X e Y
  this.cambiar = (c, d) => {
    this.puntoX = c;
    this.puntoY = d;
    document.write(
      '<br>El punto B sera = ' + '(' + this.puntoX + ',' + this.puntoY + ')'
    );
  };

  // Método para copiar el objeto
  this.copia = () => {
    return new Puntos(this.puntoX, this.puntoY);
  };

  // Método para sumar dos coordenadas nuevas a las del punto devolviendo un nuevo punto
  this.suma = (coordA, coordB) => {
    this.sumaX = parseInt(this.puntoX) + parseInt(coordA);
    this.sumaY = parseInt(this.puntoY) + parseInt(coordB);

    document.write(
      '<br>El punto C SUMA  será = ' + '(' + this.sumaX + ',' + this.sumaY + ')'
    );
  };

  if (isNaN(this.puntoX)) {
    this.puntoX = 0;
  } else {
    this.puntoX = coordX;
  }
  if (isNaN(this.puntoY)) {
    this.puntoY = 0;
  } else {
    this.puntoY = coordY;
  }
}

// Declaramos un nuevo objeto
const a = new Puntos(primerPunto, segundoPunto);
document.write('El  punto A será: (' + a.puntoX + ',' + a.puntoY + ')');

// Cambiar las coordenadas del punto
a.cambiar(nuevopuntoX, nuevopuntoY);

// Sumar las coordenadas del punto cambiado con un nuevo punto
a.suma(sumaPuntoX, sumaPuntoY);
// Copia del objeto anterior
console.log(a.copia());
