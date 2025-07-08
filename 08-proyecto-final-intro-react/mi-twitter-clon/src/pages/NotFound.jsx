import React from 'react'
import { Link } from 'react-router-dom'; 

export const NotFound = () => {
  return (
    <div>
      <h1>404 - No encontrado ⚠️</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  )
}