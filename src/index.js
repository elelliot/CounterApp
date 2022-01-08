// import React from 'react';// ya no necesita importarse desde cierta version de react
import ReactDOM from 'react-dom';
//import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
import './index.css';

const divRoot = document.querySelector('#root');

// <Componente propiedad= 'saludo'> las properties solo se declaran en el comp padre (donde se usan la primera vez)
//ReactDOM.render( <PrimeraApp saludo = 'Saludo Verguero' /> , divRoot); 
ReactDOM.render( <CounterApp value= { 0 } /> , divRoot); 
