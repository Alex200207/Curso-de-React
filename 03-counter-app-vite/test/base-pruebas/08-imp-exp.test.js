import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";
import heroe from '../../src/data/heroes'


describe("Pruebas el archivo 08-imp-exp.test.js", () => {
  test("getHeroeById debe retornar un heroe por id", () => {
    const id = 1;
    const heroe = getHeroeById(id);

    expect(heroe).toEqual({
      id: 1,
      name: "Batman",
      owner: "DC",
    });
  });

  test("getHeroeById debe retornar undefined si no existe", () => {
    const id = 100;
    const heroe = getHeroeById(id);

    //esperramos que heroe sea undefined
    expect(heroe).toBeFalsy(); //forma corta de decir que es undefined
    //false es considerado un valor falsy en js
  });

  //tarea
  //retornar un arreglo con los heroes de DC
  //length = 3
  //toEqual al arreglo filtrado

  //debe retornar un arreglo con los heroes de Marvel
  //length = 2

  test("debe retornar un arreglo con los heroes de DC", () => {
    const owner = "DC";

    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(3);
    //filtra los heroes que tengan owner DC desde el arreglo de heroes
    expect( heroes ).toEqual(heroe.filter( h => h.owner === owner ) );
  });

  test("debe retornar un arreglo con los heroes de Marvel", () => {
    const owner = "Marvel";

    const heroe = getHeroesByOwner(owner);

    expect(heroe.length).toEqual(2);
    expect(heroe).toEqual([
      { id: 2, name: "Spiderman", owner: "Marvel" },
      { id: 5, name: "Wolverine", owner: "Marvel" },
    ]);
  });
});
