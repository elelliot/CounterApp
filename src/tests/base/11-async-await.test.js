import { getImagen } from "../../base/11-async-await"

describe('Pruebas con asyn-await y Fetch', () => {
    
    test('Debe retornar el url de la imagen', async() => {
        

        const url = await getImagen();//sin el sync await esto retorna la promesa en pending
        console.log(url);

        expect( url.includes('https://')).toBe( true );
    })
    
})
