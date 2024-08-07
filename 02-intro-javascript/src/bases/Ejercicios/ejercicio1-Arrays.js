/*Ejercicio 1: Crear un arreglo y agregar un elemento con spread operator
Crea un arreglo con los números del 1 al 4.
Crea un nuevo arreglo que incluya los números del primer arreglo y el número 5, usando el operador spread.
Imprime ambos arreglos en la consola. */


const arreglo = [1,2,3,4]
let arreglo2 = [...arreglo, 5]//usando operador spread

console.log(arreglo)
console.log(arreglo2)

/*Ejercicio 2: Duplicar valores con map
Utiliza el arreglo [1, 2, 3, 4, 5].
Crea un nuevo arreglo donde cada valor sea el doble del valor original, usando el método map.
Imprime el nuevo arreglo en la consola. */

const arreglo3 = arreglo2.map(function(numero){
    return numero * 2
})

console.log(arreglo3)

/*Ejercicio 3: Añadir elementos con push y spread
Crea un arreglo con los números del 1 al 3.
Añade el número 4 al arreglo usando push.
Crea un nuevo arreglo que incluya los números del arreglo original más el número 5, usando el operador spread.
Imprime todos los arreglos en la consola. */


let arreglo4 = [1,2,3]
arreglo4.push(4)
console.log(arreglo4)

let arreglo5 =[...arreglo4,5]

console.log(arreglo5)