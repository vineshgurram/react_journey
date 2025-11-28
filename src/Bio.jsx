/*"Show / Hide Bio"

A button

Clicking toggles between showing and hiding a paragraph

Button text changes: "Show Bio" / "Hide Bio"

*/

import { useState } from "react";

export default function Bio() {
  const [show, setShow] = useState(true);
  function handleShow() {
    setShow((prev) => !prev);
  }
  return (
    <div>
      <button onClick={() => handleShow()}>
        {show ? "Hide Bio" : "Show Bio"}
      </button>
      {show && (
        <div>
          <p>
            I'm a Front-End Developer with 2+ years of experience in building
            responsive and user-friendly websites using HTML, CSS, JavaScript,
            and React.
          </p>
          <p>
            I enjoy creating clean and fast interfaces, and I’ve worked with
            tools like Bootstrap, and Tailwind CSS. I’m always ready to learn
            new things and build real-world projects.
          </p>
        </div>
      )}
    </div>
  );
}
