import React from "react";
import { Tweet } from "./Tweet"; // Import the Tweet component

export const TweetList = ({ tweets, onLike }) => {
  return (
    <div className="tweet-list">
      <h2>Tweets</h2>
      {tweets.length === 0 ? (
        <p>No hay tweets aún. ¡Sé el primero en twittear!</p>
      ) : (
        tweets.map((tweet) => (
          <Tweet key={tweet.id} tweet={tweet} onLike={onLike} />
        ))
      )}
    </div>
  );
};