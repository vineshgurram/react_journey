/* 

Create buttons: Red, Green, Blue

Clicking each changes the background color of a box

*/

import { useState } from "react";

export default function ExcerciseThree() {
  const [color, setColor] = useState("");

  function randomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    setColor(`rgb(${red}, ${green}, ${blue})`);
  }
  return (
    <>
      <div
        className="box"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          fontFamily: "cursive",
          width: "200px",
          height: "200px",
          border: "1px solid #000",
          background: color,
        }}>
        <p>{color}</p>
      </div>
      <br />
      <br />

      <button onClick={() => randomColor()}>Change Color</button>
    </>
  );
}
