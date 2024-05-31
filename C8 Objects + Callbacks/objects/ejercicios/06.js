const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  var sumaProp = 0;

  for(propiedades in objeto){
    if(objeto.hasOwnProperty(propiedades))
    sumaProp = sumaProp + 1;
  }
  return sumaProp;
};

module.exports = contarPropiedades;
