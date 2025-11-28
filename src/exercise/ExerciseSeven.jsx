/*

Textarea

Show the number of characters typed

*/

import { useState } from "react";

export default function ExerciseSeven() {
  const [charater, setCharacter] = useState("");

  return (
    <>
      <form>
        <div className="input-box">
          <textarea
            onChange={(e) => setCharacter(e.target.value)}
            value={charater}></textarea>
        </div>
      </form>

      <p>Number of Characters are : {charater.length}</p>
      <p>
        Number of Words are :{" "}
        {charater.trim().split(/\s+/).filter(Boolean).length}
      </p>
    </>
  );
}
