import { Link } from 'react-router-dom';

export const citas = [
  { id: 1, paciente: 'Juan Pérez', fecha: '2023-05-15', motivo: 'Consulta general' },
  { id: 2, paciente: 'María García', fecha: '2023-05-16', motivo: 'Control rutinario' },
  { id: 3, paciente: 'Carlos López', fecha: '2023-05-17', motivo: 'Examen médico' },
];

export function Citas() {
  return (
    <div>
      <h2>Lista de Citas</h2>
      <ul>
        {citas.map((cita) => (
          <li key={cita.id}>
            <Link to={`/cita/${cita.id}`}>
              Cita #{cita.id}-({cita.fecha})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}