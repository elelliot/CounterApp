import React, {useState} from 'react';//useState es una funcion HOOK, si empieza con use, es hook
import PropTypes from 'prop-types';





const CounterApp = ({ value= 0 }) => {

    //el useState (HOOK) devuelve un arreglo con el state y una funcion (que usualmente se llama setXXXX)
    const [ counter, setCounter ] = useState( value ); //recibe 1 parametro (state)
    


    const handleAdd = () => {
        setCounter( counter + 1 ); //solo se puede modificar el parametro con la función destinada en el useState
    }


    // const handleReset = () => {
        //setCounter( value );
    // }


    const handleSubstract = () => {
        setCounter( (c)=> c - 1 ); //también puede recibir una función cuyo retorno será el nuevo valor del state (counter)
    }

    

    return (
        <>
        <h1>CounterApp</h1>
        <h2>{ counter }</h2>

        <button onClick = { handleAdd } >+1</button>
        <button onClick = { () => { setCounter( value ) } } >Reset</button>
        <button onClick = { handleSubstract } >-1</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number
}


export default CounterApp;



//rafcp + tab CREA ESQUELETO DE FUNCTIONAL COMPONENT