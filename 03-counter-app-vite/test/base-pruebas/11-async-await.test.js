import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Pruebas en 11-async-await.js', () => {
    test('getImagen deberia retornar el url de la imagen', async () => {


        const url = await getImagen()//esperamos que la promesa se resuelva
        console.log(url)

        expect( typeof url ).toBe('string')//esperamos que el tipo de dato sea string
    })
})
