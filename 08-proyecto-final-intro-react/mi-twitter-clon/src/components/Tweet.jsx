import { useState } from "react";

export const Tweet = ({ tweet, onLike }) => {
  return (
    <div className="tweet">
      <p>
        <strong>@{tweet.username}</strong>: {tweet.text} {/* Added username display */}
      </p>
      <button className="like" onClick={() => onLike(tweet.id)}>
        {tweet.likes} ❤
      </button>
    </div>
  );
};





