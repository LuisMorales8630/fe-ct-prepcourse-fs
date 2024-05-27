function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:

  var invertida = "";

  for (var i = texto.length -1; i >= 0; i--){
    invertida += texto[i];
  }
  return invertida;
}

module.exports = invertirTexto;
