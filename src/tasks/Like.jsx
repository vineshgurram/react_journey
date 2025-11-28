import { useState } from "react";

export default function Like() {
  const [like, setLike] = useState(false);
  function handleLike() {
    setLike((like) => !like);
  }
  return (
    <>
      <p
        style={{ fontSize: "25px", cursor: "pointer" }}
        onClick={() => handleLike()}>
        👍
      </p>
      <p>{like ? "Liked" : "Not Liked"}</p>
    </>
  );
}
