// src/App.jsx
import React from 'react';
import { Tarjeta } from './Componentes/Tarjeta';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f0f2f5' }}>
      <Tarjeta
        nombre="Sofía Hernández"
        titulo="Diseñadora UX/UI Senior"
        empresa="Innovatech Solutions"
        email="sofia.hernandez@example.com"
        telefono="+52 55 1234 5678"
      />
      {
      <Tarjeta
        nombre="Juan Pérez"
        titulo="Desarrollador Frontend"
        empresa="Creative Digital"
        email="juan.perez@example.com"
        telefono="+52 55 8765 4321"
      />
      }
      {
      <Tarjeta
        nombre="Inna Afinogenova"
        titulo="Desarrollador Frontend"
        empresa="Creative Digital"
        email="Inna.Afinogenova@example.com"
        telefono="+52 55 8765 4321"
      />
      }
      {
      <Tarjeta
        nombre="Rebeca Buendia"
        titulo="Desarrollador Frontend"
        empresa="Creative Digital"
        email="Rebeca.Buendia@example.com"
        telefono="+52 55 8765 4321"
      />
      }
      {
      <Tarjeta
        nombre="Pedro Paramo"
        titulo="Desarrollador Frontend"
        empresa="Creative Digital"
        email="Pedro.Paramo@example.com"
        telefono="+52 55 8765 4321"
      />
      }
    </div>
  );
}

export default App;