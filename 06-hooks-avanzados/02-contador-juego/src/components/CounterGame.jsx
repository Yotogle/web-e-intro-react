import { useReducer, useRef, useCallback, useEffect, useState } from "react";

const initialState = { count: 0, history: [] };
const LOCAL_STORAGE_KEY = "counterGameHistory";

const getInitialState = () => {
  try {
    const storedHistory = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedHistory) {
      const parsedHistory = JSON.parse(storedHistory);

      let currentCount = 0;
      parsedHistory.forEach(entry => {
        const matchValue = entry.match(/^([+-]?\d+) \(Nuevo valor: \d+\)$/);
        if (matchValue && matchValue[1]) {
          currentCount += parseInt(matchValue[1], 10);
        }
      });

      return {
        count: currentCount,
        history: parsedHistory
      };
    }
  } catch (error) {
    console.error("Error al recuperar el historial de localStorage:", error);
  }
  return { count: 0, history: [] }; 
};

function reducer(state, action) {

  switch (action.type) {

    case "increment":
       const valueToIncrement = action.payload || 1
      return {
        count: state.count + valueToIncrement,
        history: [...state.history, `+${valueToIncrement} (Nuevo valor: ${state.count + valueToIncrement})`]
      };

    case "decrement":

      return {
        count: state.count - 1,
        history: [...state.history, `-1 (Nuevo valor: ${state.count - 1})`]
      };

    case "reset":
      return initialState;

    case "undo":
      if (state.history.length === 0) {
        return state;
      }
      
      const newHistory = [...state.history];
      const lastEntry = newHistory.pop();

      let previousCount = state.count;
      if (lastEntry) {
        const matchValue = lastEntry.match(/^([+-]?\d+) \(Nuevo valor: (\d+)\)$/); 
        if (matchValue && matchValue[1] && matchValue[2]) {
          const changeAmount = parseInt(matchValue[1], 10);
          const recordedFinalValue = parseInt(matchValue[2], 10);
            previousCount = recordedFinalValue - changeAmount;
        } else{
          const oldMatch = lastEntry.match(/Nuevo valor: (\d+)/);
        if (oldMatch && oldMatch[1]) {
          const recordedValue = parseInt(oldMatch[1], 10);
          if (lastEntry.startsWith('+')) {
            previousCount = recordedValue - 1;
          } else if (lastEntry.startsWith('-')) {
            previousCount = recordedValue + 1;
          }
          }
        }
      }
      
      return{
        count: previousCount,
        history: newHistory
      };

    default:
      return state;

  }
}

export function CounterGame() {

  const [incrementAmount, setIncrementAmount] = useState('');

  const [state, dispatch] = useReducer(reducer, getInitialState());

  const incrementBtnRef = useRef(null);

  useEffect(() => {
    incrementBtnRef.current.focus();
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.history));
    } catch (error) {
      console.error("Error al guardar el historial en localStorage:", error);
    }
  }, [state.history]);

  const handleIncrement = useCallback(() => {
  dispatch({ type: "increment" });
  }, []);


const handleDecrement = useCallback(() => {
  dispatch({ type: "decrement" });
  }, []);


  return (

    <>
      <h2>Contador: {state.count}</h2>

      <section>
      <input 
      type="number" 
      value={incrementAmount} 
      onChange={(e) => setIncrementAmount(e.target.value)} 
      placeholder="Incrementar en"
      />
      <button onClick={() => dispatch({ type: "increment", payload: Number(incrementAmount) || 1 })}>
      Incrementar por valor</button>
      </section>
      <br />
      <button ref={incrementBtnRef} onClick={handleIncrement}>Incrementar</button>

      <button onClick={handleDecrement}>Reducir</button>

      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>

      <button onClick={() => dispatch ({ type : "undo" }) }>Deshacer</button>


      <h3>Historial de cambios:</h3>

      <ul>
        {state.history.map((entry, index) => (

          <li key={index}>{entry}</li>
        ))}
      </ul>
    </>
  );
} 