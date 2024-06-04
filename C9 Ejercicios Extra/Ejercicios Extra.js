/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  let arrayPadre = [];

  for (let propiedad in objeto){
  let array = [propiedad, objeto[propiedad]];
  arrayPadre.push(array);
  }
  return arrayPadre;
}


function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:

  var arrayOrdenado = string.split('').sort();
  var contador = 1;
  var objeto = {};
  
  for (var i = 0; i < arrayOrdenado.length; i++){
    if (arrayOrdenado[i] === arrayOrdenado[i + 1]){
      contador ++;
    }else{
      objeto[arrayOrdenado[i]] = contador;
      contador = 1;
    }
  }
  //console.log(objeto); 
  return objeto; 
}
numberOfCharacters("adsjfdsfsfjsdjfhacabcsbajda");




function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:

var mayus = '';
var minus = '';
//console.log(string);
for(var i = 0; i < string.length; i++){
  if(string[i] === string[i].toUpperCase()){
    mayus = mayus + string[i];
  } else{
    minus = minus + string[i];
  }
}
return mayus + minus;
//console.log(mayus+minus);

}

capToFront('holaMUNDO')



function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  
  var palabras = frase.split(' ');
  var stringInvertida = palabras.map(palabra => {
    return palabra.split('').reverse().join('');
  });
 return stringInvertida.join(' ');
 //console.log(stringInvertida.join(' '));
}
asAmirror('Hola Mundo')



function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  var stringNUm = numero.toString();
  console.log(stringNUm);
  var stringInvertido = stringNUm.split('').reverse().join('');
  console.log(stringInvertido);
  if(stringInvertido === stringNUm){
    return 'Es capicua';
  } else {
    return 'No es capicua';
  }
}
capicua(1025201);



function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:

  var nuevoString = '';
  for(var i = 0; i < string.length; i++){
    if(string[i] !== 'a' && string[i] !== 'b' && string[i] !== 'c'){
     nuevoString += string[i]; 
    }
  }
  return nuevoString;

 //return string.replace(/[abc]/g, '');
}
deleteAbc('buenas noches')



function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  
  return arrayOfStrings.sort((a,b) => a.length - b.length);
  
  }
//sortArray(['Buenos', 'dias', 'para', 'todos', 'los', 'presentes'])




function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  var interseccion = [];

  for(var i = 0; i < array1.length; i++){
    for(var j = 0; j < array2.length; j++){
      if(array1[i] === array2[j]){
        interseccion.push(array1[i]);
      }
    }
  }
  return interseccion;
}
buscoInterseccion([10,12,14,16,18,20], [11,13,15,16,17,18,19]);
  //   0  1  2  3  4  5    0   1  2  3  4  5  6
  //([10,12,14,16,18,20], [11,13,15,16,17,18,19]);
  //      array1               array2



/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
