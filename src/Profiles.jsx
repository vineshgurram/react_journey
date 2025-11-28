import { useState } from "react";

export default function Profiles() {
  const [name, setName] = useState("Vinesh");
  const [age, setAge] = useState(24);
  const [qualification, setQualification] = useState(24);
  return (
    <>
      <p>
        <strong>PROFILE</strong>
      </p>
      <p>
        <strong>Name :</strong> {name}
      </p>
      <p>
        <strong>Age :</strong> {age}
      </p>
      <p>
        <strong>Qualification :</strong> {qualification}
      </p>
      {/* Using single state as an object*/}
      <button
        onClick={() => {
          setName("Mahesh");
          setAge(26);
          setQualification("B.Com");
        }}>
        Next Profile
      </button>
    </>
  );
}
