// Desestructuración
// Asignación Desestructurante
// const persona = {
//     nombre: 'Tony',
//     edad: 45,
//     clave: 'Ironman'
// };

// // const { edad, clave, nombre, } = persona;

// // console.log( nombre );
// // console.log( edad );
// // console.log( clave );

export const usContext = ({ nombre }) => {
  // console.log( nombre, edad, rango );

  return {
    nombre,
  };
};

// const { nombreClave, anios, latlng: { lat, lng } } = usContext( persona );

// console.log(nombreClave, anios);
// console.log( lat, lng );
