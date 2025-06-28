import React, { useState, useEffect, useMemo } from "react";
import { PlanetasVisitados } from "./components/PlanetasVisitados";
import "./App.css";

export function App() {
  // Estado para la distancia recorrida
  const [distancia, setDistancia] = useState(0);
  // Estado para el combustible disponible
  const [combustible, setCombustible] = useState(100);
  // Estado para el estado actual de la nave
  const [estadoNave, setEstadoNave] = useState("En órbita"); 
  // Estado para almacenar los planetas visitados (actualmente vacío, listo para ser llenado)
  const [planetasVisitados, setPlanetasVisitados] = useState([]);
  // Estado para guardar el ID del setInterval, lo usaremos para detenerlo
  const [intervalId, setIntervalId] = useState(null);

  const arrivalMessageThreshold = 135000000;

  // Función para iniciar el intervalo de vuelo
  const startFlightInterval = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }

    console.log("Iniciando el contador de combustible y distancia...");
    const id = setInterval(() => {
      setCombustible((prevCombustible) => {
        const nuevoCombustible = prevCombustible - 1;

        if (nuevoCombustible <= 0) {
          clearInterval(id);
          console.log(
            "¡Combustible agotado! El panel se ha apagado automáticamente."
          );
          setEstadoNave("Aterrizaje forzoso");
          setIntervalId(null);
          return 0;
        }
        return nuevoCombustible;
      });
      setDistancia((prev) => prev + 45000000);
    }, 1000);
    setIntervalId(id);
    setEstadoNave("En órbita");
  };

  useEffect(() => {
    console.log("¡El panel está listo!"); // Se ejecuta al montar el componente App

    // Función de limpieza que se ejecuta cuando el componente se desmonta
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
        console.log("El panel se ha apagado manualmente al desmontar App.");
      }
    };
  }, []);

  // useMemo para optimizar el cálculo del mensaje de estado
  const mensajeEstado = useMemo(() => {
    return `Estado: ${estadoNave}`;
  }, [estadoNave]); // Se recalcula solo cuando estadoNave cambia

  // Función para manejar el clic del botón "Aterrizar"
  const handleAterrizar = () => {
    if (intervalId) {
      // Verificamos si hay un intervalo activo
      clearInterval(intervalId);
      console.log(
        "¡Aterrizaje exitoso! El combustible y la distancia se han detenido."
      );
      setEstadoNave("Aterrizado");
      setIntervalId(null);
    } else {
      console.log("No hay un vuelo activo para aterrizar.");
    }
  };

  // Función para manejar el clic del botón "Despegar"
  const handleDespegar = () => {
    // Resetear estados y luego iniciar el intervalo
    setDistancia(0);
    setCombustible(100);
    startFlightInterval();
    console.log("¡Nave despegando! Vuelo iniciado.");
  };

  // Lógica para deshabilitar botones
  const isFlying = intervalId !== null;
  const canTakeOff = !isFlying && combustible > 0;
  const canLand = isFlying;

  return (
    <div className="app-container">
      {" "}
      <h1 className="app-title">Panel de control espacial</h1>
      <div className="status-panel">
        {" "}
        <ul>
          <li>Distancia: {distancia} Km</li>
          <li>Combustible: {combustible} %</li>
          <li>{mensajeEstado}</li>
        </ul>
        <div className="button-group">
          {" "}
          <button
            onClick={handleDespegar}
            disabled={!canTakeOff}
            className="app-button"
          >
            Despegar
          </button>
          <button
            onClick={handleAterrizar}
            disabled={!canLand}
            className="app-button"
          >
            Aterrizar
          </button>
        </div>
      </div>
      <PlanetasVisitados />
    </div>
  );
}
