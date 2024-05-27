function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  /* var resultado = 0;
  for (var i = 0; i < arrayOfNums.length; i++){
    resultado = resultado + arrayOfNums[i];
  }
  return resultado; */

  var resultado = arrayOfNums.reduce((acum, elemento) => acum + elemento, 0); // reduce(), permite reducir un array a un solo valor 
  return resultado;                                                           //aplicando una función acumuladora a cada elemento del array.
  
} 

module.exports = agregarNumeros;
