/*

Create a text input

As you type, the heading updates live

*/

import { useState } from "react";

export default function ExcerciseTwo() {
  const [text, setText] = useState("");
  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
          placeholder="Enter text to see magic 🗼"
        />
      </div>
      <h2>{text}</h2>
    </>
  );
}
