import React from 'react';
import '../css/Testimonio.css'

//creo un componente funcional que va a retornar un elemento JSX
function Testimonio(props){
    return(
      <div className='contenedor-testimonio'>
        <img className='imagen-testimonio'
        src={require(`../img/testimonio-${props.imagen}.png`)}
        alt='foto de emma'/>
        <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'>
           <strong>{props.nombre}</strong> en {props.pais}
          </p>
          <p className='cargo-testimonio'>
            {props.cargo} en <strong>{props.empresa}</strong> 
            </p>
          <p className='texto-testimonio'>"{props.testimonio}"</p>
        </div>
      </div>
    );
}

export default Testimonio; //aca exporto el componente para que se pueda utilizar en otro archivo