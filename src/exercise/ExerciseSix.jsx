/*
Create a small form with name + email

On submit:

prevent page reload

console.log the entered values

*/

import { useState } from "react";

export default function ExerciseSix() {
  const [form, setForm] = useState({ name: "", email: "" });
  function handleSubmit(e) {
    e.preventDefault();
    if (form.name && form.email) {
      console.log(`submitted name is ${form.name} and email is ${form.email}`);
      setForm({ name: "", email: "" });
    }
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="input-box">
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            value={form.name}
          />
        </div>
        <div className="input-box">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            value={form.email}
          />
        </div>
        <div className="submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}
