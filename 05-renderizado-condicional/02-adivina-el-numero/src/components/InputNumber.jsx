import { useState } from 'react'

export const InputNumber = ({ onNumberChange }) => {
  const [number, setNumber] = useState("");

  const handleClick = (event) => {
    const value = event.target.value;
    setNumber(value);
    if (onNumberChange) {
      onNumberChange(value);
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <label htmlFor="userGuess">Ingresa tu número:</label>
      <input
        type="number"
        id="userGuess"
        name="userGuess"
        value={number}
        onChange={handleClick}
        min="1" 
        max="100"
        style={{ padding: '8px', marginRight: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
      />  
    </div>
  );
};