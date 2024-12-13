//arreglo con muchos objetos
//import ,export y funcicones comunes

 const heroes = [

//usamos exportaciones por defecto
//export default [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
  ];
  //exportar owwers
const owners = ['DC','Marvel']

//se puede hacer asi y es mas comun cuando
//hay muchaas exportaciones dentro de un archivo
export {
    heroes as default,//especificar por defecto
    owners,
}


 //export default heroes;