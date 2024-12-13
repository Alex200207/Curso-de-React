// const getSlaudo = (nombres) => {
//   const saludo = {
//     nombres,
//     edad: 25,
//     url: "https://www.google.com",
//   };

//   return saludo;
// };

//pasando props a un componente y destructurando

//importando las propsType para validar los tipos de datos que se pasan a los componentes con props
import PropTypes from "prop-types";

//las defaulProps se usan para definir valores por defecto en caso de que no se pasen los props

export const FirstApp = ({ title = "titulo por defaul", subTitle = 1235 }) => {
  //cuando se manejan disintos elementos se deben de agrupar en un div o en un fragment
  //imprimir un objto y mostralo con la el metodo JSON.stringify(objeto,null,3) para que se vea mas ordenado

  // if (!title && !subTitle) {//validacion de props si el titulo y el subtitulo no estan definidos se lanza un error
  //   throw new Error("El titulo y el subtitulo son obligatorios");
  // }

  return (
    <>
      <h1>{title}</h1>
      {/* <code>{JSON.stringify(saludo)}</code> */}
      {/* <h1>{JSON.stringify(getSlaudo("eddy"))}</h1> */}
      <p>{subTitle}</p>
    </>
  );
};

FirstApp.propTypes = {//nombre del componente y el tipo de dato que se espera
  title: PropTypes.string.isRequired, //validacion de props pasamos el tipo y decimos que es obligatorio
  subTitle: PropTypes.number.isRequired, //validacion de props pasamos el tipo y decimos que es obligatorio
};

//otra forma de definir los valores por defecto
// FirstApp.defaultProps = {
//   title: "titulo por defaul",
//   subTitle: 1235,
// };

