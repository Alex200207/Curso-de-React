
//describe sirve para agrupar pruebas
describe("Pruebas en el archivo demo", () => {
  //creando una prueba estas recibe dos parametros el nombre de la prueba y una funcion
  test("Esta prueba no debe fallar", () => {
    //pasos en la prueba

    //1. inicializacion
    //arrange
    const message1 = "Hola Mundo";
    //es el estado inicial de la aplicacion

    //act
    //2. estimulo: es lo que aplicamos al sujeto de prueba
    const message2 = message1.trim();

    //assert
    //3. observar el comportamiento
    //es lo que esperamos que pase

    expect(message1).toBe(message2);
    //toBe es un metodo que compara dos valores
    //estamos esperando que el valor de message1 sea igual al valor de message2
  });
});
