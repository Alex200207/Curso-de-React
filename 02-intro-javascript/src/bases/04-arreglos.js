//areglos en js

/*coleccion de informacion que se encuentra dentro de una misma 
variable*/

//no se recomienda hacerlo de esta forma
//const arreglo = new Array(100);
const arreglo = [1,2,3,4]
//no es recomendable utilizar el push 
//ya que este modifica el objeto principal
//los arreglos son objetos tambien

//arreglo.push(1)
//arreglo.push(2)
//arreglo.push(3)
//arreglo.push(4)


/*el opereadoe spread es sumamente utilizado para realizar copias
lo que hace es extraer la informacion y manda individualmente cada uno de los
elementos del arreglo en este caso*/
let arreglo2 =[...arreglo,5]
//arreglo2.push(5)

/*Array.prototype.map() */
/*metodo map que viene en los arreglos 
el metodo map() crea un nuevo array con los resultados de la
llamada a la funcion indicada aplicada a cada uno de sus
elementos

esto implicitamente rompe la referencia que hay en js de los 
objetos y nos crea un nuevo arreglo que podemos trabajar perfectamente
en el*/
const arreglo3 = arreglo2.map( function(numero){//numero va ser los numeros del arreglo
    return numero * 2;//retornamos numero multplicado por 2
})
//podemos usar map para multiplicar cada uno de los valores del arreglo por 2
//esta forma es concida como un callback abrir una funcion dentro de otra funcion(metodo)


console.log(arreglo)
console.log(arreglo2)
console.log(arreglo3)

//------------------------------------------------------------------------

const array = []
array.push(1)//modifica el obejto principal no se usa
array.push(2)
array.push(3)
array.push(4)
array.push(5)

console.log(array)

const array2 = [...array, 6]//usar el operador spread para hacer una copia

console.log(array2)


const array3 = array2.map(function(x) {//callback
    return x * 2
})//crea un nuevo arreglo con los valores del arreglo multiplicados por 2

console.log(array3)

// si no pones el return de retornara undefined y no se mostrara nada

