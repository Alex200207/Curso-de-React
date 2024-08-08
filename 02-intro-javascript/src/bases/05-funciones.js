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

const usuarioActivo = geUsuarioActivo('eddy');

console.log(usuarioActivo);
