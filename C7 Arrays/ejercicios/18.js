function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:

  var sumaDeNotas = resultadosTest.reduce((acum, nota) => acum + nota);
  var promedioNotas = sumaDeNotas / resultadosTest.length;
  return promedioNotas;
}

module.exports = promedioResultadosTest;
