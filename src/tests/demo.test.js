// Agrupamos las pruebas en el describe y describimos
describe('Pruebas en el Archivo demo.test.js', () => {
    
    test('deben de ser iguales los strings ', () => {
    
        //1. Inicializacion
        const mensaje = 'Hola Mundo';
    
        //2. Estímulo
        const mensaje2 = `Hola Mundo`;
    
        //3. Observar el comportamiento
        expect( mensaje ).toBe( mensaje2 ); //=== tanto tipo como contenido sea el mismo
    })








});


