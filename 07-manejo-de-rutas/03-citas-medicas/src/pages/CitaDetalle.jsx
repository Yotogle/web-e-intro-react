import { useParams } from 'react-router-dom';
import { citas } from './Citas';

export function CitaDetalle() {
  const { id } = useParams();
  const cita = citas.find(c => c.id === Number(id));

  if (!cita) {
    return <div>Cita no encontrada</div>;
  }

  return (
    <div>
      <h2>Detalles de la Cita</h2>
      <p>ID de la cita: {cita.id}</p>
      <p>Paciente: {cita.paciente}</p>
      <p>Fecha de cita: {cita.fecha}</p>
      <p>Motivo de consulta: {cita.motivo}</p>
    </div>
  );
}