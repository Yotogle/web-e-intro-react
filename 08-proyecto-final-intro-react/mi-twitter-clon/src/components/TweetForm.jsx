import { useState } from "react";

export const TweetForm = ({ onAddTweet }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) {

      alert("El tweet no puede estar vacío."); 
    }
    onAddTweet(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="¿Qué estás pensando?"
        maxLength="280" 
      />
      <button type="submit">Tweet</button>
    </form>
  );
};