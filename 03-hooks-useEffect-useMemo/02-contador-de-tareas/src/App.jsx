import React, { useState, useEffect, useMemo, use } from 'react';
import './App.css'; 

function App() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');
  const [duracion, setDuracion] = useState('');

 

  // Cálculo de tiempo total optimizado con useMemo
  const totalTiempoCalculado = useMemo(() => {
    console.log("Calculando tiempo total...");
    return tareas.reduce((Total, tarea) => Total + tarea.duracion, 0);
  }, [tareas]);

   // Efecto secundario: Actualizar el título del documento cada vez que cambia el total
  useEffect(() => {
   document.title = `Total: ${totalTiempoCalculado} minutos`;
  }, [totalTiempoCalculado]);

  // Función para agregar una nueva tarea
  const agregarTarea = () => {
    if (nuevaTarea && duracion) {
      const nuevaTareaObj = {
        id: Date.now(),
        nombre: nuevaTarea.trim(),
        duracion: parseInt(duracion)
      };
      setTareas([...tareas, nuevaTareaObj]);
      setNuevaTarea('');
      setDuracion('');
    }
  };
  
  //Función para eliminar tareas
const eliminarTarea = (idAEliminar) => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== idAEliminar);
    setTareas(tareasActualizadas);
  };

return (
    <div className="task-counter-container">
      <h1 className="main-title">Contador de Tareas</h1>

      <div className="input-section"> 
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Nombre de la tarea"
          className="task-input"
        />
        <input
          type="number"
          value={duracion}
          onChange={(e) => setDuracion(e.target.value)}
          placeholder="Duración en minutos"
          className="duration-input"
        />
        <button onClick={agregarTarea} className="add-button">Agregar tarea</button>
      </div>

      <h2 className="section-title">Tareas</h2>
      {tareas.length === 0 ? (
        <p className="empty-list-message">No hay tareas. ¡Agrega una!</p>
      ) : (
        <ul className="task-list">
          {tareas.map((tarea) => (
            <li key={tarea.id} className="task-item">
              <span className="task-info">
                {tarea.nombre}: {tarea.duracion} minutos
              </span>
              <button
                onClick={() => eliminarTarea(tarea.id)}
                className="delete-button" 
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}

      <h3 className="total-time">Total de tiempo: {totalTiempoCalculado} minutos</h3>
    </div>
  );
}

export default App;