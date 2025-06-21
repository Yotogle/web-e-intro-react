import { useState } from "react";

export function Contador() {

  const [contador, setContador] = useState(0);

  return (

    <div>

      <p>El contador está en: {contador}</p>

      <button onClick={() => setContador(contador + 1)}>Incrementar</button>

    </div>

  );

}