function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:

  var stringConvertido = array.map(elemento => {
    if (typeof elemento === 'string'){
      return elemento.toUpperCase();
    } else {
      return elemento;
    } 
  })
  return stringConvertido;
}

module.exports = convertirStringAMayusculas;
