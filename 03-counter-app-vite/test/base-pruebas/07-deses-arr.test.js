import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('Pruebas en el archivo 07-deses-arr', () => {
    test('debe retornar un string y entero', () => { 

        const [letters, numbers] = retornaArreglo();// destructuracion de arreglos 

        expect( letters ).toBe( 'ABC' );
        expect( numbers ).toBe( 123 );//toBe es un metodo que compara dos valores

        //usar typeof para comparar tipos de datos
        expect( typeof letters ).toBe( 'string' );
        expect( typeof numbers ).toBe( 'number' );

        //esperar cualquier tipo de estring
        expect( letters ).toEqual( expect.any(String) );


     })
})