import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) { 
      onLogin(username);
      navigate("/");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required //
      />
      <button type="submit">Iniciar sesión</button>
    </form>
  );
};