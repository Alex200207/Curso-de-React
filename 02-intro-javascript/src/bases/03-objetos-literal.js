//objetos literales (diccionarios) {}

const persona = {
    nombre:'eddy',
    apellido:' Stark',
    edad :45,
    direccion: {
        ciudad: 'jalapa',
        zip:'15',
        lat:'262',
        lng:'2626',
    }

}


//console.table(persona)si usamos table podemos ver una tabla

console.log(persona)


//no hacer jamas esto para crear un clon
//const persona2 = persona;haciedno una copia asignacion de referencia

//persona2.nombre = 'alex'

//console.log(persona2)

//recomendado
const persona2 = {...persona}//usando el operador spread para hacer un clon 
//y extraer las propiedades y asignarselas a un uevo objeto se usa tres puntos
//y luego el nombre del objeto a clonar

console.log(persona2)