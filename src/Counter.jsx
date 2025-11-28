import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>
        <strong>Counter</strong>
      </p>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Increase by 1</button>
    </>
  );
}
