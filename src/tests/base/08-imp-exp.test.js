import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";


describe('Pruebas en funciones de Heroes', () => {
    

    test('Debe retornar un heroe por ID', () => {
        
        const id = 1;
        const heroe = getHeroeById( id );

        // console.log(heroe);
        const heroeData = heroes.find( h => h.id === id );

        //console.log(heroe,heroeData)


        expect( heroe ).toEqual( heroeData );
    });
    





    test('Debe retornar undefined si heroe no existe', () => {
        
        const id = 10;
        const heroe = getHeroeById( id );

        // console.log(heroe);

        expect( heroe ).toBe( undefined );
    });






    //debe retornar un arreglo con los heroes de DC
    //toEqual al arreglo filtrado
    test('Debe retornar un arreglo con los heroes de DC por Owner', () => {
        
        const owner = 'DC';
        const heroes = getHeroesByOwner( owner );

        const heroesData = heroes.filter( h => h.owner === owner );

        // console.log(heroes,heroesData)


        expect( heroes ).toEqual( heroesData );
    });




    //debe retornar un arreglo de los heroes de Marvel
    // length = 2 //toBe
    test('Debe retornar que los heroes filtrados por Marvel sean 2', () => {
        
        const owner = 'Marvel';
        const heroes = getHeroesByOwner( owner );

        expect( heroes.length ).toBe( 2 );
    });
})
