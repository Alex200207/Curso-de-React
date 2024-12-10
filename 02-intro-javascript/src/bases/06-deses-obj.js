// Desestructuracion de objetos clase muy importante
//Asignacion Desestructurante


/*La sintaxis de desestructuración es una expresión de JavaScript que 
permite desempacar 
valores de arreglos o propiedades de objetos en distintas variables. */

//ejemplo basico
const persona = {
  nombre: "eddy",
  edad: 22,
  clave: "iroman",
  rango: "soladado",
};

//const { nombre:nombre2, clave, edad } = persona;

//console.log(nombre2)
//console.log(edad)
//console.log(clave)

//dentro de una funcio
//desestructuracion en el argumento
const useContext = ({ clave, nombre, edad, rango = "capitan" }) => {
  //console.log(nombre,edad,rango)

  return {
    nombreClave: clave,
    anios: edad,
    lati: {
      lat: 14.2625,
      lng: 236332,
    },
  };
};

//Asignacion Desestructurante
//de esta forma podemos extraer objetos anidados y asignarlos a constntes
//no es muy comun
// eslint-disable-next-line react-hooks/rules-of-hooks
const {
  nombreClave,
  anios,
  lati: { lat, lng },//extrayendo objetos anidados
} = useContext(persona);

console.log(nombreClave, anios);
console.log(lat, lng);

//------------------------------------------------------------

// const objet = {
//   nombre: "tony",
//   edad: 45,
//   clave: "iroman",
//   rango: "soladado",
// };

// //extrar lo que se ponene en la llave y asignarlo a una constante
// const { nombre: p, edad, clave } = objet; //desestructuracion de objetos

// console.log(p, edad, clave);

// //ejemplo de desestructuracion de objetos en una funcion

// const retornaAlgo = ({ nombre, edad, clave , rango= 'capitan'}) => {
//   console.log(nombre, edad, clave, rango);
// };

// retornaAlgo(objet);




