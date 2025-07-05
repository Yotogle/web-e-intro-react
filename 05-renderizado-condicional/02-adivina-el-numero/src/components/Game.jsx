
import { useState, useEffect } from 'react';
import { InputNumber } from './InputNumber';
import { Message } from './Message';
import { RestartButton } from './RestartButton';

export const Game = () => {
  const [targetNumber, setTargetNumber] = useState(0); 
  const [userGuess, setUserGuess] = useState("");
  const [message, setMessage] = useState("¡Adivina un número entre 1 y 100!");
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    const newTarget = Math.floor(Math.random() * 100) + 1;
    setTargetNumber(newTarget);
    setUserGuess("");
    setMessage("¡Adivina un número entre 1 y 100!");
    setGameOver(false);
  };

  const handleUserGuessChange = (value) => {
    setUserGuess(value);
    if (gameOver) {
        setMessage("¡Adivina un número entre 1 y 100!");
        setGameOver(false); 
    } else if (value === "" || isNaN(parseInt(value, 10))) {
        setMessage("¡Adivina un número entre 1 y 100!");
    }
  };

  const handleCheckGuess = () => {
    if (gameOver) {
      return;
    }

    const guessedNumber = parseInt(userGuess, 10);

    if (guessedNumber === targetNumber) {
      setMessage("¡Correcto! ¡Has adivinado el número!");
      setGameOver(true);
    } else if (guessedNumber < targetNumber) {
      setMessage("El número es mayor.");
    } else {
      setMessage("El número es menor.");
    }
  };

  return (
    <div style={{ textAlign: 'center', maxWidth: '500px', margin: '50px auto', padding: '20px', border: '1px solid #eee', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
      <h1>Adivina el Número</h1>
      
      <Message text={message} />

      <InputNumber 
        onNumberChange={handleUserGuessChange} 
        value={userGuess}
        disabled={gameOver}
      />

      {!gameOver && (
        <button
          onClick={handleCheckGuess}
          disabled={userGuess === "" || isNaN(parseInt(userGuess, 10))} 
          style={{ 
            padding: '10px 20px', 
            backgroundColor: '#28a745', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer', 
            fontSize: '1em',
            marginTop: '10px',
            opacity: (userGuess === "" || isNaN(parseInt(userGuess, 10))) ? 0.6 : 1
          }}
        >
          Comprobar
        </button>
      )}
      {gameOver && <RestartButton onRestart={startNewGame} />}
    </div>
  );
};