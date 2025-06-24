import { useState, useEffect } from "react";

export function DatosAPI() {
  const [datos, setDatos] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => { setDatos(data); })
      .catch((error) => {
        console.error("Error al obtener los datos de la API:", error);
        setDatos(null);
        return () => {

        };
      });
  }, []);
  return (
    <div>
      <h2>Personajes de Rick and Morty</h2>
      {!datos && <p>Cargando personajes...</p>}

      {datos && datos.results && (
        <ul>
          {datos.results.map((character) => (
            <li key={character.id}>
              <strong>{character.name}</strong> <br />
              Especie: {character.species} <br />
              Origen: {character.origin.name} <br />
              Estatus: {character.status} <br />
              {character.image && (
                <img
                  src={character.image}
                  alt={character.name}
                  style={{
                    width: "250px",
                    height: "250px",
                    borderRadius: "10%",
                    marginBottom: "50px",
                    border: "5px solid #777",
                  }}
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
