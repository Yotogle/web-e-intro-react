import React from 'react'
import { Mensaje } from './components/Mensaje'
import { TarjetaUsuario } from './components/TarjetaDeUsuario'
import { useState } from "react";
import { Contador } from './components/Contador';
import { PerfilUsuario } from './components/PerfilUsuario';


const App = () => {
  return (
  <>

      <h1>Ejemplo de Props en React</h1>

      <Mensaje texto="¡Hola, mundo!" />

      <Mensaje texto="Bienvenido a React" />

      <TarjetaUsuario nombre="Ana Pérez" edad={28} ocupacion="Ingeniera de Software" />
      <TarjetaUsuario nombre="Carlos Gómez" edad={35} ocupacion="Diseñador UX" />
      <Contador/>
      <PerfilUsuario/>

    </>
  )
}

export default App
