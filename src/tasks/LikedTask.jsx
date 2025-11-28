// Simple exercise: Make a "Follow / Unfollow" button
// Advanced exercise: Like counter
// Instagram-like heart animation (optional)

import { useState } from "react";

export default function LikedTask() {
  const [follow, setFollow] = useState(false);
  const [count, setCount] = useState(0);
  function handleFollow() {
    setFollow((prev) => !prev);
  }
  function handleCount() {
    setCount((prev) => prev + 1);
  }
  return (
    <>
      <div>
        <p>
          <strong>Vinesh Gurram</strong>
          &nbsp; &nbsp;
          <button onClick={() => handleFollow()}>
            {follow ? "Unfollow" : "Follow"}
          </button>
        </p>
        <p>
          {follow
            ? "Hurray!🎉 Vinesh is your friend 🤘"
            : "You are not friend yet 👎"}
        </p>
      </div>
      <button onClick={() => handleCount()}>increment</button>
      <p>{count}</p>
    </>
  );
}
