import { getSaludo } from "../../src/base-pruebas/02-template-string";

//agrupo las pruebas en un describe
describe("Pruebas en el archivo template strings", () => {
  test("getSaludo debe de retornar Hola Eddy", () => {//creo una prueba

    //1. inicializacion

    const name = 'Eddy';

    //2. estimulo

    const message = getSaludo(name);

    //3. observar el comportamiento

    expect(message).toBe(`Hola ${ name } `);




  });
});
