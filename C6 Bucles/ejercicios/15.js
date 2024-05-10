function obtenerDiaSemana(numero) {
  // La función recibe un "numero" entre 1 y 7 por argumento.
  // Devuelve el día de la semana correspondiente a este número,
  // por ejemplo, 1 para "Lunes", 2 para "Martes", etc.
  // El día devuelto debe tener mayúscula inicial y no llevar tilde.
  // Si el número no corresponde a un día de la semana, retorna
  // el string "No es un dia de la semana"
  // Tu código:
 var diaDeSemana;
 
 switch (numero){
    case 1:
        diaDeSemana = "Lunes";
        break;
    
    case 2:
        diaDeSemana = "Martes";
        break;

    case 3:
        diaDeSemana = "Miercoles";
         break;

    case 4:
        diaDeSemana = "Jueves";
        break;

    case 5:
        diaDeSemana = "Viernes";
        break;

    case 6:
        diaDeSemana = "Sabado";
        break;

    case 7:
        diaDeSemana = "Domingo";
        break;

    default:
        diaDeSemana = "No es un dia de la semana";
 }

      return diaDeSemana;
  //  console.log (diaDeSemana);
}

obtenerDiaSemana (4);

module.exports = obtenerDiaSemana;