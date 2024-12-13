import { useState } from "react";
import PropType from "prop-types";

export const CounterApp = ({ value }) => {
  //pasando props a un componente funcional
  //useState es un hook que nos permite manejar el estado de un componente funcional

  const [ counter, setCounter ] = useState( value ); //estado del counter , pasondo el valor de las props

  const handleAdd = () => {
    //funcion para cambiar el estado del counter
    setCounter( counter + 1 ); //cambiar el estado del counter
  };

  const handleSubstract = () => setCounter(counter - 1);

  const handleReset = () => setCounter(value);

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>

      <button onClick={ handleAdd }> +1 </button>
      <button onClick={ handleSubstract }>-1</button>
      <button onClick={ handleReset }>Reset</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropType.number.isRequired,
};
