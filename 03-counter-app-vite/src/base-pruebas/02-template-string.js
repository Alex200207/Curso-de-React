

//exportamos para hacer pruebas
export function getSaludo(nombre) {
    return 'Hola ' + nombre;

}

const nombre = '';

console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );