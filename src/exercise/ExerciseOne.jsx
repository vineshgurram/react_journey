/*

Exercise 1 — Counter (Increment / Decrement)

A number displayed on screen

Two buttons: + and –

Count should never go below 0

*/

import { useState } from "react";

export default function ExcerciseOne() {
  const [count, setCount] = useState(1);
  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}
