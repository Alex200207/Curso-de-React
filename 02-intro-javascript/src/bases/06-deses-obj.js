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
  rango:'soladado'
};

//const { nombre:nombre2, clave, edad } = persona;

//console.log(nombre2)
//console.log(edad)
//console.log(clave)

//dentro de una funcio
//desestructuracion en el argumento
const useContext = ({clave,nombre,edad, rango ='capitan'}) =>{


    //console.log(nombre,edad,rango)

    return {
      nombreClave:clave,
      anios:edad,
      lati:{
        lat: 14.2625,
        lng: 236332
      }
    }
}

//Asignacion Desestructurante
//de esta forma podemos extraer objetos anidados y asignarlos a constntes
//no es muy comun
// eslint-disable-next-line react-hooks/rules-of-hooks
const {nombreClave,anios,lati:{lat,lng}} = useContext(persona);

console.log(nombreClave,anios)
console.log(lat,lng);


