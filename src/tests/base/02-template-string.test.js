import { getSaludo } from "../../base/02-template-string";
import '@testing-library/jest-dom';

describe('Pruebas en 02/template.string.js', () => {
    
    test('Debe retornar Hola ElElliot', () => {
        
        const nombre = 'ElElliot';

        const saludo = getSaludo(nombre);

        expect( saludo ).toBe( 'Hola ' + nombre);
    })


    
    //getSaludo debe retornar Hola Carlos! si no hay argumento en nombre
    test('Debe retornar Hola Carlos si no hay argumento en el nombre', () => {
        

        const saludo = getSaludo();
        // console.log(saludo);

        expect( saludo ).toBe( 'Hola Carlos');
    })

    
})
/*si quiero solo hacer pruebas en un archivo:
  0- npm run test,)  
  1- Press W
  2- Press P (filter by filename or regex pattern
  3- Write filename till' match appear
  4- Arrow down to selesct (should glow yellow) and Press Enter  */