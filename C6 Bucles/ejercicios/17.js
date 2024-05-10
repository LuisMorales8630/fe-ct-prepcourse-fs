function colors(color) {
  // La función recibe un color. Retorna el string correspondiente:
  // En caso que el color recibido sea "blue"   --> "This is blue".
  // En caso que el color recibido sea "red"    --> "This is red".
  // En caso que el color recibido sea "green"  --> "This is green".
  // En caso que el color recibido sea "orange" --> "This is orange".
  // Si no es ninguno de esos colores           --> "Color not found".
  // PISTA: utilizar el statement SWITCH.
  // Tu código:

  var nombreColor;
  switch (color){
    case 'blue':
      nombreColor = "This is blue";
      break;

    case 'red':
      nombreColor = "This is red";
      break;

    case 'green':
      nombreColor = "This is green";
      break;

    case 'orange':
      nombreColor = "This is orange";
      break;

    default:
      nombreColor = "Color not found";
  }
  return nombreColor;
}

module.exports = colors;
