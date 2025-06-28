import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'
import { CambiarFondo } from './components/CambiarFondo'

export const App = () => {
  const {user} = useContext(UserContext)
  return (

    <div>
      <h1>Información del usuario</h1>
      <ul>
        <li>Nombre: {user.nombre}</li>
        <li>Correo: {user.correo}</li>
        <li>Tema: {user.tema}</li>
      </ul>
      <CambiarFondo/>
    </div>
  )
}


/*import React, { useActionState, useState } from 'react'
import { CambiarFondo } from './components/CambiarFondo'

export const App = () => {

  const [mostrar, setMostrar] = useState(false)
  return (
    <>
         <h1>Hola</h1>
         <button onClick={() => setMostrar( prev => !prev )}>{mostrar ? "Mostrar fondo" : "Ocultar fondo"}</button>
         {mostrar && <CambiarFondo/>}

       
    </>
  )
}

*/
