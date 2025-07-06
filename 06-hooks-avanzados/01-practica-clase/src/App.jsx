import React from 'react'
import { Contador } from './components/Contador'
import { Temporizador } from './components/Temporizador'
import { ContadorConCallback } from './components/ControladorConCallBack'
import { Formulario } from './components/Formulario' 

export const App = () => {
  return (
    <div>
<h1>Hola</h1>
<Contador/>
<br />
<Temporizador/>
<br />
<ContadorConCallback/>
<br />
<Formulario/>
    </div>
  )
}

export default App
