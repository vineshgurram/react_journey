import { useState } from "react";

/*
A heart icon ❤️

Clicking toggles:

empty 🤍

filled ❤️

*/
export default function ExerciseFive() {
  const [like, setLike] = useState(false);
  return (
    <>
      <span
        onClick={() => setLike((prev) => !prev)}
        style={{ cursor: "pointer" }}>
        <strong>{like ? "Liked ❤️" : "Like 🤍"}</strong>
      </span>
    </>
  );
}
