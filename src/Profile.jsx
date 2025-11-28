import { useState } from "react";

export default function Profile() {
  const [profile, setProfile] = useState({
    name: "Vinesh",
    age: 24,
    qualification: "B.Scit",
  });
  return (
    <>
      <p>
        <strong>PROFILE</strong>
      </p>
      <p>
        <strong>Name :</strong> {profile.name}
      </p>
      <p>
        <strong>Age :</strong> {profile.age}
      </p>
      <p>
        <strong>Qualification :</strong> {profile.qualification}
      </p>
      {/* Using single state as an object*/}
      <button
        onClick={() =>
          setProfile({ name: "Mahesh", age: 26, qualification: "B.Com" })
        }>
        Next Profile
      </button>
    </>
  );
}
