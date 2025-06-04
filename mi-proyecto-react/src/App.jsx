/*
import { Card } from "./Card"


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
*/

function Card() {
  // Definimos la información estática de la tarjeta
  const nombre = "Ana Pérez";
  const profesion = "Desarrolladora Web";
  const mensaje = "¡Bienvenido a mi tarjeta de presentación!";

  // Retornamos el JSX que representa la tarjeta
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', width: '300px', textAlign: 'center' }}>
      {/* JSX permite incrustar variables en HTML utilizando llaves {} */}
      <h2>{nombre}</h2>
      <h4>{profesion}</h4>
      <p>{mensaje}</p>
    </div>
  );
}

export default <Card  />