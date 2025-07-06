import { useRef, useState } from 'react';

export function Contador() {

  const renderCount = useRef(0);

  const [count, setCount] = useState(0);

  renderCount.current += 1;

  return (

    <div>

      <p>Contador: {count}</p>

      <p>Renderizado: {renderCount.current} veces</p>

      <button onClick={() => setCount(count + 1)}>Incrementar</button>

    </div>

  );

}