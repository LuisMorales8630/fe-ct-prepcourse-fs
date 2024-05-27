function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  var contador;
  var elementosMAyoresA10 = array.filter(numero => numero > 10).length;
  return elementosMAyoresA10;
}

module.exports = contarElementosMayoresA10;
