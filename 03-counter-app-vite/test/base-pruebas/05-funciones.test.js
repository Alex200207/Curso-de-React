import { getUser } from "../../src/base-pruebas/05-funciones";
import { getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Pruebas en el archivo 05-funciones", () => {
  test("getUser debe de retornar un objeto", () => {
    //1. inicializacion
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    //2. estimulo
    const user = getUser();

    //assercion
    //dos objetos se comparan en base a su ubicacion en memoria

    //usar el toStrictEqual para comparar objetos o toEqual
    expect(testUser).toEqual(user);
  });

  test("getUsuarioActivo debe retornar un objeto", () => {
    //. incializacion

    const name = "Eddy";

    //2. estimulo

    const user = getUsuarioActivo(name);

    //assercion
    expect(user).toEqual({
        uid: "ABC567",
        username: name,
    });
  });
});
