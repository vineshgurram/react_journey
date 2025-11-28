// Build a small component that displays your name + a button.

let name = "Vinesh Gurram";
function handleClick(name) {
  console.log("Hello,", name);
}
const DayOne = () => {
  return (
    <>
      <p>
        <strong>Day 01</strong>
      </p>
      <h1>{name}</h1>
      <button onClick={() => handleClick(name)}>Greeting</button>
    </>
  );
};

export default DayOne;
