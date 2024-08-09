//Asignacion Desestructurante de Arreglos

const personajes = ['Goku','Goyo','Naruto']

console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);

//desestructuracion
/*creamos llaves cuadradas significa desestructuracion de un arreglo
luego el igual que tiene que apuntar a su arreglo personajes*/
const [ , ,p3 ] = personajes;
/*como hago para mostrar la posicion 2 y que ignore la posicion 1
usamos una , antes del valor que queremos mostrar de esta forma
ignora la posicion 0 pues lo arreglos trabajan por posiciones */

console.log( p3 );

//creamos una funcion flecha
const retornaArreglo = () =>{
  return ['ABC',123]
}
console.log(retornaArreglo())

//desestructuracion separames letras y numeros
const [letras, numeros ] = retornaArreglo();
console.log(letras,numeros)


//tarea
//1. el primer valor del arr se llamara nombre
//2. se llamara setNombre
const useState = (valor) => {
  return [valor, ()=>{console.log('Hola Mundo')}];
}

const [nombre, setNombre] = useState('Goku')


console.log(nombre);
setNombre();