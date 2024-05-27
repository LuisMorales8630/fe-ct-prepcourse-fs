function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:

  var soloNumerosPares = array.filter (numero => numero % 2 === 0);
  return soloNumerosPares;
}

module.exports = filtrarNumerosPares;
