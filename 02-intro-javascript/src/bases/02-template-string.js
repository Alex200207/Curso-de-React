/*template strings es una manera interesante para concatenar strings
para poner variables dentro de strings o resultado de operaciones tambien
caracteres multi linea entre otras*/

//ejercico basico

const nombre = "Eddy";
const apellido = "Talavera";

//const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = ` ${nombre} ${apellido}`; //forma mas sencilla template strings
console.log(nombreCompleto);



console.log(`este es un texto: ${getSaludo(nombre)} `);

let texto = "hola que tal como estas";

console.log(`este es un texto: ${texto}`);

console.log("forma normal de mostrar un texto" + texto);

console.log("otra forma", texto);

console.log(`esta es una suma de 1 + 1: ${1 + 1}`);


function getSaludo(nombre) {
  return ' hola mundo ' + nombre;//pasando un parametro
}

console.log(`este es un texto: ${getSaludo('eddy')}`) //pasando un argumento

