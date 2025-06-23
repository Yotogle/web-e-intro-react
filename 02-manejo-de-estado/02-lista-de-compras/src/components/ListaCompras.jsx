import { useState } from "react";
import './ListaCompras.css'

export function ListaCompras() {
  // Definir el estado para la lista de compras
  const [productos, setProductos] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState("");

  // Función para agregar un nuevo producto a la lista
  const agregarProducto = () => {
    if (nuevoProducto.trim() !== "") {
      setProductos([...productos, nuevoProducto]);
      setNuevoProducto("");
    }
  };

  // Función para eliminar un producto de la lista
  const eliminarProducto = (index) => {
    // Completar la lógica para eliminar un producto
    const nuevaLista = productos.filter((_,i) => i != index);
    setProductos(nuevaLista);
  };

return (
    <div className="shopping-list-container"> {/* Main container */}
      <h2 className="shopping-list-title">Lista de Compras</h2>
      <div className="input-section"> {/* Wrapper for input and add button */}
        <input
          type="text"
          placeholder="Añadir nuevo producto..." // Added placeholder
          value={nuevoProducto}
          onChange={(e) => setNuevoProducto(e.target.value)}
          className="product-input"
        />
        <button onClick={agregarProducto} className="add-button">Agregar</button>
      </div>
      {/* Conditional rendering for empty list message */}
      {productos.length === 0 ? (
        <p className="empty-list-message">Tu lista de compras está vacía. ¡Añade algo!</p>
      ) : (
        <ul className="product-list"> {/* List of products */}
          {productos.map((producto, index) => (
            <li key={index} className="product-item">
              <span className="product-text">{producto}</span> {/* Wrap text in span */}
              <button onClick={() => eliminarProducto(index)} className="delete-button">Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}


