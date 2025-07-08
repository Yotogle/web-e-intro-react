import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { TweetForm } from "../components/TweetForm";
import { TweetList } from "../components/TweetList";

export const Home = ({ user, onLogout, tweets, onAddTweet, onLike }) => { // Added tweets, onAddTweet, onLike
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };

  return (
    <div>
      <h1>Bienvenido a Twitter</h1>
      {user && (
        <div>
          <p>Hola, {user.username}!</p>
       
          <Link to="/profile">Ir a mi perfil</Link>
        </div>
      )}
      <TweetForm onAddTweet={onAddTweet} />
      <TweetList tweets={tweets} onLike={onLike} />
      <br />
      <button className="cerrarbtn" onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
};