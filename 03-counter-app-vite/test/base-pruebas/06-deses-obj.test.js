import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe("Pruebas en el archivo 06-deses-obj", () => {
  test("debe de retornar un objeto ", () => {
    //inicializacion

    const user = {
      nombre: "Eddy",
    };

    //estimulo

    const { nombre } = usContext(user);

    //observar el comportamiento

    expect(user).toEqual({ nombre });
  });
});
