
export const Message = ({text}) => {
  return (
   <div style={{ margin: '20px 0', padding: '10px', border: '1px solid #ddd', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
      <p style={{ fontSize: '1.2em', fontWeight: 'bold', color: text === '¡Correcto!' ? 'green' : '#333' }}>
        {text}
      </p>
    </div>
  )
}