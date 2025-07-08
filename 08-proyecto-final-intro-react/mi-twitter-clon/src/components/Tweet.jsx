import { useState } from "react";

export const Tweet = ({ tweet, onLike }) => {
  return (
    <div className="tweet">
      <p>{tweet.text}</p>

      <button className="like" onClick={() => onLike(tweet.id)}>{tweet.likes} ❤</button>
    </div>
  );
};
