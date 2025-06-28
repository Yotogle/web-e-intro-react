import React, { useEffect } from "react";
import './Planetas.css';

export function Planetas({
  nombre,
  descripcion,
  distanciaMediaSol,
  temperaturaMedia,
  imagen,
}) {
  useEffect(() => {
    // Este mensaje aparecerá cuando el componente PlanetaIndividual se "monte" (aparezca en la pantalla)
    console.log(`¡El planeta ${nombre} ha aparecido!`);
  }, [nombre]); 

  return (
      <li>
      <div className="card-planeta">
       
        <div className="card-content"> 
          <div className="card-text"> 
            <h3>Planeta: {nombre}</h3>
            <p>Descripción: {descripcion}</p>
            <p>Distancia media al sol: {distanciaMediaSol}</p>
            <p>Temperatura: {temperaturaMedia}</p>
          </div>
          <img src={imagen} alt={nombre} /> 
        </div>
      </div>
    </li>
  );
}
