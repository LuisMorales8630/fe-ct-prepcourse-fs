function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  var numeroRepetido = new Set();

  for (var elemento of numeros){
    if(numeroRepetido.has(elemento)) {
      return elemento;
    }
    numeroRepetido.add(elemento);
  }

}

module.exports = encontrarElementoRepetido;