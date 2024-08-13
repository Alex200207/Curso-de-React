//promesas en JavaScript
 //las promesas por naturalesa son asincronas
 /*primero se ejecuta todo el codigo que es secuencial  */
import {getHeroeById} from "../data/08-imp-exp";


 //las promesas se crean con un argumento que es un callback
/*callback resive dos argumentos uno llamado resolve y otro llamado
rejects el nombre que se le ponga no es importante pero es una convencion
resolve cuando la promesa es exitosa y rejects es cuando la promesa falla
*/
 //const promesa = new Promise((resolve,reject) => {
   //setTimeout(() => {//funcion propia de javascript que permite ralizar
        //una tarea en cierto tiempo y resive un callback.


       // const p1 = getHeroeById(2); // el nombre de la variable puede ser cualquiera
       // resolve(p1);
        //---------------------------------------------------------------
        //reject('no se puedo encontrar los heroe')//mostrar un error

 //},2000)//segundo argumento es la cantidad de milisegundos que tiene que 
 //esperar para ejecutar el callback
//});

/*hacer algo cuando la promesa se cumpla */
//3 metodos importantes
/* then: significa que la promesa se hizo correctamente
   catch: que dio error o por alguna razon se llamo el reject
   finally:es lo que se ejecuta despues del then o cacth*/

//promesa.then((heroe) => {//pasamos el argumento
    //console.log('heroe',heroe)//mostramos el heroe dos segundos despues
//})
//-------------------------------------------------
//manejar un error
//.catch(err => console.warn(err));



/*que pasaria si quiero crear una promesa y pasarle el argumento del heroe que deseo buscar */

const getHeroeByIdAsync = (id) =>{
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            const p1 = getHeroeById(id);
            if (p1){// si el p1 existe se llama el resolve
                resolve(p1);
            }else{ // de lo contrario el reject
                reject('no se pudo encontrar el heroe')
            }
            
        },2000)
    });

}

getHeroeByIdAsync(4)
    .then(heroe => console.log('heroe',heroe))
    .catch( err => console.warn( err ))