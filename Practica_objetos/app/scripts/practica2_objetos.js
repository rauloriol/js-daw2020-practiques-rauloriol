// Creacion de un método propio para cálculo de media Aritmética en Arrays
if (!Array.prototype.mediaAritmetica) {
  Array.prototype.mediaAritmetica = function () {
    this.array1 = [];
    let cadena = window.prompt('Introduce numeros para llenar el array');
    this.array1.push(parseInt(cadena));

    // Mientras el usuario no deje en blanco el campo y de en aceptar, se siguen introduciendo numeros en el array
    while (cadena.length > 0) {
      cadena = window.prompt(
        'Introduce otro numero,  (deja en blanco + Aceptar) para terminar'
      );
      this.array1.push(parseInt(cadena));
    }
    this.array1.pop(-1);

    /** Ejecuta una función reductora sobre cada elemento del array devolviendo un único valor y se divide por la longitud del
     *array devolviendo como resultado la media aritmética del array
     */
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    this.elementosArray = this.array1.length;
    const resultado = this.array1.reduce(reducer) / this.elementosArray;
    return resultado;
  };
}

const arrayVacio = [];
document.write('La media  aritmetica es:  ' + arrayVacio.mediaAritmetica());
