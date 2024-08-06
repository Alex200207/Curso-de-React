/*template strings es una manera interesante para concatenar strings
para poner variables dentro de strings o resultado de operaciones tambien
caracteres multi linea entre otras*/

//ejercico basico

const nombre = "Eddy";
const apellido = "Talavera";

//const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = ` ${nombre} ${apellido}`; //forma mas sencilla template strings
console.log(nombreCompleto);

function getSaludo(nombre) {
  return " hola " + nombre;
}

console.log(`este es un texto: ${getSaludo(nombre)} `);
