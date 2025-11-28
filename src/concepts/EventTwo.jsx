import { useState } from "react";

export default function EventTwo() {
  const [name, setName] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted value is", name);
    setName("");
  }
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
      <p>{name}</p>
    </>
  );
}
