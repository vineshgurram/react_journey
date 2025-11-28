/*
Render a list of objects:
[
  { id: 1, title: "React", level: "Intermediate" },
  { id: 2, title: "JavaScript", level: "Advanced" },
  { id: 3, title: "CSS", level: "Beginner" }
]

*/

export default function ExerciseNine() {
  const data = [
    { id: 1, title: "React", level: "Intermediate" },
    { id: 2, title: "JavaScript", level: "Advanced" },
    { id: 3, title: "CSS", level: "Beginner" },
  ];
  return (
    <>
      {data.map((el) => (
        <p key={el.id}>
          {el.title} - {el.level}
        </p>
      ))}
    </>
  );
}
