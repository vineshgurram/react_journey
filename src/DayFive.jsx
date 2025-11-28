export default function DayFive() {
  const fruits = ["Apple", "Mango", "Banana", "Orange"];
  const users = [
    { id: 1, name: "Vinesh" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Sneha" },
  ];
  return (
    <>
      {
        // A key helps React identify which item changed, added, or removed.
      }
      <p>
        <strong>Day 05 - Lists</strong>
      </p>
      <ol>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ol>

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}
