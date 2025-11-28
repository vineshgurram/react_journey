export default function ButtonBox({ count, setCount }) {
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </>
  );
}
