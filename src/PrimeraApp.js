//import React from 'react'; 
//import { Fragment } from "react";

import PropTypes from 'prop-types';
const PrimeraApp = ( { saludo, subtitulo } ) => { 
    
    return (
        //<div>
        //<Fragment>
        <>
            <h1>{ saludo }</h1>
            {/* <pre> { JSON.stringify( saludo, null, 3 ) } </pre> */}
            <p>{subtitulo}</p>
        </>
        //</Fragment>
        //</div>
    );

    
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired 
}

PrimeraApp.defaultProps = {
    subtitulo: 'Subtitulo miado'
}

export default PrimeraApp;