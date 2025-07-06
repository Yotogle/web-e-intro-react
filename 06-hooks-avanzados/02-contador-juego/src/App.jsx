import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CounterGame } from './components/CounterGame'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CounterGame/>
    </>
  )
}

export default App
