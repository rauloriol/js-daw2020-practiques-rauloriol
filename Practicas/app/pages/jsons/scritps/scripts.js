fruteria = {
  frutas: [
    {
      nombre: 'naranja',
      cantidad: 10,
    },
    {
      nombre: 'platanos',
      cantidad: 25,
    },
    {
      nombre: 'peras',
      cantidad: 15,
    },
  ], // array de objetos llamados frutas, cada elemento dle array un objeto json
  verduras: [
    {
      nombre: 'alcachofa',
      cantidad: 10,
      propiedades: ['vitaminaB', 'agua'],
    },
    {
      nombre: 'tomates',
      cantidad: 25,
      preciounidad: 0.25,
    },
  ],
};

console.log(fruteria.frutas[1].nombre);
fruteria.frutas[1].preciounidad = 1;
console.log(fruteria.verduras[0].propiedades);

// se puede hacer un push en ese objeto json ya qe es un array

// funcion Json
/* JSON.stringify; // crea un string a partir de un objeto json
JSON.stringify(fruteria); // crea un string a partir de un objeto json
document.cookie = 'clave';

JSON.parse; // de strin hace objeto
 */

// con JSON.stringify pasamos de un objeto a un string
const fruits = JSON.stringify(fruteria);
console.log('String que viene de un objeto' + fruits);

// con JSON.parse pasamos un string a un Objeto Json
const frutitas = JSON.parse(fruits);
console.log(frutitas);
