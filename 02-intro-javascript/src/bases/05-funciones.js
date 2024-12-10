//Funciones en JavaScript

//funcion de tipo expresion
/*const saludar = function(nombre){
    return `Hola, ${nombre}`;
}*/

//funcion de tipo flecha

const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};
/*ventajas:  mas ligeras y faciles de mantener*/
const saludar3 = (nombre) => `Hola, ${nombre}`;

/*una funcion mas simplificada  */
const saludar4 = () => `Hola Mundo`;

//console.log(saludar('eddy'))

console.log(saludar2("Alex"));
console.log(saludar3("Alex"));
console.log(saludar4());

const getUser = () =>
  /*regresando el cuerpo de la funcion de manera
inplicita altamente usado en react que el return es un objeto*/
  ({
    id: 123,
    username: "eddy",
  });

const user = getUser();

console.log(user);

//tarea

//transformar a una funcion de flecha
//tiene que retornar un obejto inplicito
//pruebas
const geUsuarioActivo = (nombre) => ({
  id: "5d5d5",
  username: nombre,
});

const usuarioActivo = geUsuarioActivo("eddy");

console.log(usuarioActivo);

//------------------------------------------------

const getSaludar = function (nombre) {
  //usar funciones de tipo expresion o que usen constante
  //para que no se pueda modificar
  return "Hola mundo " + nombre;
};

console.log(getSaludar("eddy"));

const getSaludar3 = (nombre) => `Hola mundo ${nombre}`;

console.log(getSaludar3("eddy"));
//puedes hacerlo de esta manera tambien si es una sola linea

//retornan un objeto de manera inplicita
//-sin return y usando parentesis y llaves

const getUser2 = () => ({
  uid: "ABC123",
  username: "El_Papi1502",
});

console.log(getUser2());

//tarea

//transformar a una funcion de flecha
//retornar un objeto implicito
//pruebas

const getUsuariActivo = (nombre) => ({ uid: "ABC567", username: nombre });

const usuarioActivo2 = getUsuariActivo("eddy");
console.log(usuarioActivo2);

//listo
