import { getUser,getUsuarioActivo } from "../../base/05-funciones"

describe('Pruebas en 05-funciones', () => {
    

    test('getUser debe retornar un objeto ', () => {
        
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }


        const user = getUser();

        //no se puede evaluar objetos con el expect.toBe ya que ambos apuntan a lugares de memoria diferentes 
        expect( user ).toEqual( userTest);

    })


    test('getUsuarioActivo debe retornar un objeto ', () => {
        
        const nombre = 'ElElliot';
        const userTest = {
            uid: 'ABC567',
            username: nombre
        }

        const user = getUsuarioActivo(nombre);
        
        expect( user ).toEqual( userTest);

    })
    
})
