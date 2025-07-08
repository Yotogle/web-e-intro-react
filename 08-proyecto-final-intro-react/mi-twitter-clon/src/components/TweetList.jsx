import { Tweet } from "./Tweet";

export const TweetList = ({ tweets, onLike }) => {
  return (
    <div>
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} onLike={onLike} />
      ))}
    </div>
  );
};
