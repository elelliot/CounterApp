import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";


describe('Pruebas con Promesas', () => {
    
    test('Debe retornar un heroe Async ', ( done ) => {//done es un callback que dice a mi test suite  cuando debe terminar la prueba
        
        const id = 1;

        getHeroeByIdAsync( id )
            .then( heroe => {
                
                //por defecto las pruebas son síncronas, por tanto hay que usar el callback done del test
                expect( heroe ).toBe( heroes[0] );
                
                //si no ponemos el expect o el done se ejecuta y a los 5 segundos da un timeout
                done();//aquí termina el proceso async
                //aunque tengamos solo 1 expect siempre hay que llamar el done


            })
            .catch( done );

    });




    test('Debe obtener un error si el heroe por id no existe', ( done ) => {
        
        const id = 10;

        getHeroeByIdAsync( id )
            .catch( e => {

                expect( e ).toBe('No se pudo encontrar el héroe'); //también pasa el error del timeout, no se como arreglarlo :c
                done();

            })
    });
    
    
})
