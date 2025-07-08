import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { NotFound } from "./pages/NotFound";


export const App = () => {
  const [user, setUser] = useState(null);
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedTweets = localStorage.getItem("tweets");

    if (storedUser) setUser(JSON.parse(storedUser));
    if (storedTweets) setTweets(JSON.parse(storedTweets));
  }, []);

  useEffect(() => {
    localStorage.setItem("tweets", JSON.stringify(tweets));
  }, [tweets]);

  const login = (username) => {
    const userData = { username };
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const addTweet = (text) => {

    if (!user) {
      console.error("No hay usuario logueado para añadir un tweet.");
      return; 
    }

    const newTweet = {
      id: Date.now(),
      text,
      likes: 0,
      username: user.username,
    };
    setTweets([newTweet, ...tweets]);
  };

  const likeTweet = (id) => {
    setTweets(
      tweets.map((tweet) =>
        tweet.id === id ? { ...tweet, likes: tweet.likes + 1 } : tweet
      )
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={!user ? <Login onLogin={login} /> : <Navigate to="/" />} />
        <Route
          path="/"
          element={
            user ? (
              <Home user={user} onLogout={logout} tweets={tweets} onAddTweet={addTweet} onLike={likeTweet} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/profile"
          element={user ? <Profile user={user} onLogout={logout} /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};