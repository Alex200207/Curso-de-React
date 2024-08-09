import {heroes} from './data/heroes';


/*const getHeroreById = (id) =>{
  return heroes.find((heroe) => {
    if(heroe.id === id){
      return true;
    }else{
      return false;
    }
  });
}*/

//mismo codigo resumido 
/*uso de find para encontrar el id numero 2 y mostrar el objeto */
const getHeroreById = (id) => heroes.find((heroe) => heroe.id ===id)

console.log(getHeroreById(2));

//filtrando los superHeroes que son de DC
//uso de filter
const getHeroesByOwner = ( owner ) => heroes.filter((heroe) => heroe.owner ===owner)
console.log(getHeroesByOwner('DC'));