import {heroes} from './data/heroes.js';


const getHeroeById = (id) => {//
    return heroes.find((h) => h.id === id);//el find regresa el primer elemento que cumpla con la condicion 
}

console.log(getHeroeById(3));


const getHeroeByOwner = (owner) => {    
    return heroes.filter((h)=> h.owner === owner);//filter regresa un nuevo arreglo con los elementos que cumplan con la condicion  
}

//que hace filter? regresa un nuevo arreglo con los elementos que cumplan con la condicion

console.log(getHeroeByOwner('DC'));