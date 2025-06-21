
import React from 'react';
import './Tarjeta.css';

export function Tarjeta({ nombre, titulo, empresa, email, telefono }) {
  return (
    <div className="tarjeta-presentacion">
      <div className="tarjeta-contenido">
        <h2 className="tarjeta-nombre">{nombre}</h2>
        <p className="tarjeta-titulo">{titulo}</p>
        <p className="tarjeta-empresa">{empresa}</p>
        <div className="tarjeta-contacto">
          {email && <p className="tarjeta-email">Email: {email}</p>}
          {telefono && <p className="tarjeta-telefono">Teléfono: {telefono}</p>}
        </div>
      </div>
    </div>
  );
}