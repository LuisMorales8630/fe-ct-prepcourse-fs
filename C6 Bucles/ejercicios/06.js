function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  var cantidadDigitos = num.toString(); // Convierte el numero a una cadena para contar la cantidad de dígitos.
  if (cantidadDigitos.length === 3){ // .length cuenta la cantidad de caracteres que hay.
    return true;
  } else {
    return false;
  }
}

module.exports = tieneTresDigitos;
