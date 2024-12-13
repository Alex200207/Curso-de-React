
import {heroes} from './heroes';


 export const getHeroreById = (id) =>{
  return heroes.find((heroe) => {
    if(heroe.id === id){
      return true;
    }else{
      return false;
    }
  });
}



//mismo codigo resumido 
/*uso de find para encontrar el id numero 2 y mostrar el objeto */
//const getHeroreById = (id) => heroes.find((heroe) => heroe.id ===id)

//console.log(getHeroreById(2));

//filtrando los superHeroes que son de DC
//uso de filter
//const getHeroesByOwner = ( owner ) => heroes.filter((heroe) => heroe.owner ===owner)
//console.log(getHeroesByOwner('DC'));
// import {heroes} from './data/heroes.js';


// const getHeroeById = (id) => {//
//     return heroes.find((h) => h.id === id);//el find regresa el primer elemento que cumpla con la condicion 
// }

// console.log(getHeroeById(3));


// const getHeroeByOwner = (owner) => {    
//     return heroes.filter((h)=> h.owner === owner);//filter regresa un nuevo arreglo con los elementos que cumplan con la condicion  
// }

// //que hace filter? regresa un nuevo arreglo con los elementos que cumplan con la condicion

// console.log(getHeroeByOwner('DC'));