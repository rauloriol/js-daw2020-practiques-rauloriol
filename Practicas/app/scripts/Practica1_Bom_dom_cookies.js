/**
 * Funcion para redigir en 5 segundos a google.es
 * @returns  A la pagina web www.google.es
 */
function redigir() {
  document.write('Nos vamos');
  setTimeout(() => {
    location = 'https://www.google.es';
  }, 5000);
}
redigir();
