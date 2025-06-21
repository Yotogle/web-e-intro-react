import { Card } from "./components/Card"


function App() {
  
  return (
    <>
      <Card 
        nombre="Carlos" 
        profesion="Diseñador web" 
        descripcion="Carlos es un gran diseñador web"
      />
      <Card 
        nombre="Maria" 
        profesion="Desarrolladora full stack" 
        descripcion="Maria es una gran desarrolladora full stack"
      />
      <Card 
        nombre="Pepe" 
        profesion="Barista" 
        descripcion="Pepe es un gran Barista"
      />
    </>
  )
}

export default App