function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:

  var mesesBuscados = [];
  var mesesEncontrados = ["Enero", "Marzo", "Noviembre"];

  for (var i = 0; i < array.length; i++){
    if (mesesEncontrados.includes(array[i])){
      mesesBuscados.push(array[i]);
    }
  }
    if (mesesBuscados.length === mesesEncontrados.length){
     return mesesBuscados;
    } else {
     return "No se encontraron los meses pedidos";
    }


}

module.exports = mesesDelAño;
