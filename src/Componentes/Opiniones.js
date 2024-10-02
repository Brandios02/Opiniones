import React from "react";
import '../Hojas-estilo/Opiniones.css';
function Opiniones(props){
  return(
    <div className='contenedor-opiniones'>
      <img className='img-opinion' 
        src={require(`../Imagenes/${props.imagen}.png`)} 
        alt={props.alt} />
      <div className='contenedor-texto-opinion' >

        <p className='nombrepais' >
          <strong>{props.nombre}</strong>, en {props.pais}</p>

        <p className='cargo' >
          {props.cargo} en <strong>{props.empresa}</strong></p>

        <p className='Opinion' >
          {props.opinion}.</p>

      </div>

    </div>
  );
}
export default Opiniones;