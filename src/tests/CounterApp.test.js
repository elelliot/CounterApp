import CounterApp from "../CounterApp";
import { shallow } from 'enzyme' //shallow es parecido al render
import '@testing-library/jest-dom';

describe('Pruebas en <CounterApp />', () => {
    

    // si está afuera de los tests, puede servir para cualquiera, como en el 2do lo cambio un poco, lo declare de nuevo
    let wrapper = shallow( <CounterApp />);
    //será redundante pero los métodos si se ven

//    let wrapper;// undefined, al estar así se pierden las sugerencias de metodos pero igual sirve
    beforeEach( () => {

        wrapper= shallow( <CounterApp />); //es variable de scope así que lo cambiamos a let para que funcione aquí
        //wrapper se reinicializa antes de cada prueba, menos en el 2do test ya que ahí fue redeclarado
    });




    test('Debe mostrar <CounterApp /> correctamente ', () => {
        
        

        expect( wrapper ).toMatchSnapshot();

    })


    test('Debe mostrar por defecto el valor de 100 ', () => {
        

        const wrapper = shallow( <CounterApp value = {100} />
             );
        const counter = wrapper.find('h2').text();

        expect( counter).toBe( '100' );
    })



    test('Debe de incrementar con el boton +1 ', () => {
        
        // const btn1 = wrapper.find('button').at(0);// agarramos el boton en la posición indice osea el primero
        //console.log(btn1.html());

        wrapper.find('button').at(0).simulate('click');//evento ,valores del evento
        const counter = wrapper.find('h2').text();

        expect(counter).toBe('1');

    })

    test('Debe de bajar con el boton -1 ', () => {
        
        /*como la prueba anterior a fuerzas tiene que clickear el boton anterior, ese valor se pasa al de esta prueba
          por eso la prueba da 0, por tanto se debe reiniciar el componente, por lo que usaremos el beforeEach*/

        wrapper.find('button').at(2).simulate('click');
        const counter = wrapper.find('h2').text();
        expect(counter).toBe('-1');

    })


    test('Debe reiniciar al valor inicial con el reset button ', () => {
        
        const wrapper = shallow( <CounterApp value = { 105 } /> );//el valor inicial será 105 en esta prueba

        wrapper.find('button').at(0).simulate('click');//daremos un +1 para asegurarnos que el reset funciona como debe
        wrapper.find('button').at(1).simulate('click');//reseteamos

        const counter = wrapper.find('h2').text();

//        console.log(counter);
        expect( counter ).toBe('105');

        
    })
    
    
    
    
})
