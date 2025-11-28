export default function EventOne() {
  function handleClick() {
    console.log("button clicked");
  }
  return (
    <>
      <button onClick={() => handleClick()}>Click me</button>
    </>
  );
}
