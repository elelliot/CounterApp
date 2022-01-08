//import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";
import { shallow } from 'enzyme' //shallow es parecido al render
import '@testing-library/jest-dom';

describe('Pruebas en <PrimeraApp />', () => {
    
    //esto usaba el extend-expect
    // test('Debe mostrar el mensaje "Verguerito saludo" ', () => {
        

    //     const saludo = 'Verguerito saludo';

    //     const {getByText} = render( <PrimeraApp saludo= { saludo } />);


    //     expect( getByText( saludo ) ).toBeInTheDocument();
    // })


    test(' Debe mostrar <PrimeraApp /> Correctamente ', () => {
        
        const saludo = 'Saludo Verguero';
        const wrapper = shallow( <PrimeraApp saludo = { saludo } />);

        expect( wrapper ).toMatchSnapshot();
    })

    test('Debe mostrar el subtitulo enviado por props', () => {
        const saludo = 'Saludo Verguero';
        const subTitulo = 'Subtitulo Verguero';
        const wrapper = shallow( 
            <PrimeraApp 
            saludo = { saludo }
            subtitulo = { subTitulo }
             />
             );

        const textoParrafo = wrapper.find('p').text();
        //console.log(textoParrafo);

        expect( textoParrafo).toBe( subTitulo );
    })
    
    
    
})
