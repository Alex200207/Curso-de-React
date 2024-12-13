import heroes, { owners } from "../data/heroes";

export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

//console.log(getHeroeById(2));
console.log(owners);

export const getHeroesByOwner = (owner) =>
  heroes.filter((heroe) => heroe.owner === owner);
//console.log(getHeroesByOwner('DC'));
//mas formas de exportacion

//para usar una exportacion por defecto no hace falta usar {}
//caundo se hace la exportacion se le da el nombre que quieras
//import heroes,{owners} from './data/heroes';
//se usa una exportacion por defecto creada en el mismo archivo
//se usa desestructuracion se mete el nombre en {}
/*si queremos importar ambos usamos{} con ambos */

// import { getHeroeById } from "./bases/08-imp-exp";

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(2);
      // resolve();
      if (heroe) {
        resolve(heroe);
      } else {
        reject("No se pudo encontrar el heroe");
      }
    }, 2000);
  });
};

getHeroeByIdAsync(2)
  .then((heroe) => console.log("Heroe", heroe))
  .catch((err) => console.warn(err));
