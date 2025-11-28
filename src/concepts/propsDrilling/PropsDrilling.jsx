/*

  PropsDrilling→ Home → Button

*/
import Home from "./Home";

export default function PropsDrilling({ count, setCount }) {
  return (
    <>
      <p>
        <strong>Props Drillings</strong>
      </p>
      <Home count={count} setCount={setCount} />
    </>
  );
}
