//Crear un archivo JavaScript con los ejercicios sincrónicos y asincrónicos mencionados

// Ejercicios Sincrónicos y Asincrónicos en JavaScript

// Ejercicio 1: Ejecución Secuencial de Funciones
function mensaje1() {
    console.log('Mensaje 1');
}

function mensaje2() {
    console.log('Mensaje 2');
}

function mensaje3() {
    console.log('Mensaje 3');
}

mensaje1();
mensaje2();
mensaje3();

// Ejercicio 2: Operaciones Aritméticas Secuenciales
function sumar(a, b) {
    return a + b;
}

function multiplicar(a, b) {
    return a * b;
}

const resultado = multiplicar(sumar(2, 3), 4);
console.log('Resultado:', resultado); // Debería mostrar 20

// Ejercicio 3: Uso de setTimeout para Ejecución Diferida
console.log('Inicio');

setTimeout(() => {
    console.log('Mensaje retrasado');
}, 3000);

console.log('Fin');
// El orden de salida debería ser: Inicio, Fin, Mensaje retrasado

// Ejercicio 4: Crear y Usar Promesas
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promesa cumplida');
        // Puedes probar el caso de error usando reject('Error en la promesa');
    }, 2000);
});

promesa
    .then(mensaje => console.log(mensaje))
    .catch(error => console.error(error));

// Ejercicio 5: Uso de async y await
const promesaAsync = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promesa cumplida con async/await');
        }, 2000);
    });
};

async function ejecutarPromesa() {
    try {
        const mensaje = await promesaAsync();
        console.log(mensaje);
    } catch (error) {
        console.error(error);
    }
}

ejecutarPromesa();

// Ejercicio 6: Esperar múltiples promesas con Promise.all
const promesa1 = new Promise(resolve => setTimeout(resolve, 1000, 'Promesa 1')); 
const promesa2 = new Promise(resolve => setTimeout(resolve, 2000, 'Promesa 2')); 
const promesa3 = new Promise(resolve => setTimeout(resolve, 3000, 'Promesa 3')); 

Promise.all([promesa1, promesa2, promesa3])
    .then(valores => console.log('Todas las promesas se cumplieron:', valores));

