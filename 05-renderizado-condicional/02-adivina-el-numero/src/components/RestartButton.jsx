
export const RestartButton = ({ onRestart }) => { 
  return (
    <button
      onClick={onRestart} 
      style={{ padding: '10px 20px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1em' }}
    >
      Reiniciar Juego
    </button>
  );
};