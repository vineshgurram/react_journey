/*
Input type should toggle: password → text

Button text changes accordingly
*/

import { useState } from "react";

export default function ExcerciseFour() {
  const [passwordToggle, setPasswordToggle] = useState(false);
  const [password, setPassword] = useState("");
  return (
    <>
      <form>
        <input
          type={passwordToggle ? "text" : "password"}
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button
          onClick={() => setPasswordToggle((prev) => !prev)}
          style={{ cursor: "pointer" }}>
          {passwordToggle ? "😎Hide Password" : "🧐Show Password"}
        </button>
      </form>
    </>
  );
}
