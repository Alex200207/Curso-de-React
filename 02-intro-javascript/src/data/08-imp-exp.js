//mas formas de exportacion 

//para usar una exportacion por defecto no hace falta usar {}
//caundo se hace la exportacion se le da el nombre que quieras
//import heroes,{owners} from './data/heroes';
//se usa una exportacion por defecto creada en el mismo archivo
//se usa desestructuracion se mete el nombre en {}
/*si queremos importar ambos usamos{} con ambos */
import heroes,{owners} from './data/heroes';

const getHeroreById = (id) => heroes.find((heroe) => heroe.id ===id)

console.log(getHeroreById(2));


const getHeroesByOwner = ( owner ) => heroes.filter((heroe) => heroe.owner ===owner)
console.log(getHeroesByOwner('DC'));