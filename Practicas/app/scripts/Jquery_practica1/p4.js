$('ul').last().find('li').eq(0).css({ background: 'red' }); // Primer Li del ultimo ul
$('ul').first().find('li').last().css({ background: 'blue' }); // Ultimo elemento de la primera lista
$('ul').eq(1).find('li').eq(2).css({ background: 'yellow' }); // Tercer elemento de la segunda lista
