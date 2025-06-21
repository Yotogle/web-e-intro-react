import { useState } from "react";

export function PerfilUsuario() {

  const [usuario, setUsuario] = useState({ nombre: "Joan", edad: 27, peril: "Desarrollador" });

  const actualizarEdad = () => {

    setUsuario({ ...usuario, edad: usuario.edad + 1 });
  };

   const regresarTiempo = () => {

    setUsuario({ ...usuario, edad: usuario.edad - 1 });
  };

  return (

    <div>

      <p>Nombre: {usuario.nombre}</p>

      <p>Edad: {usuario.edad}</p>

      <p>Perfil: {usuario.peril}</p>

      <button onClick={actualizarEdad}>Cumplir años</button>
      <button onClick={regresarTiempo}>Cumplir menos años</button>

    </div>

  );

}