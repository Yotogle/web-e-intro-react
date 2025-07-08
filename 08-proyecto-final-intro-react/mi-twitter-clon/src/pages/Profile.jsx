import { Link, useNavigate } from "react-router-dom"; // Added useNavigate

export const Profile = ({ user, onLogout }) => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };

  return (
    <div>
      <h1>Perfil de {user.username}</h1>
      <button onClick={handleLogout}>Cerrar sesión</button>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
};