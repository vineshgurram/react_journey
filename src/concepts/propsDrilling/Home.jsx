import ButtonBox from "./ButtonBox";

export default function Home({ count, setCount }) {
  return (
    <>
      <h3>{count}</h3>
      <ButtonBox count={count} setCount={setCount} />
    </>
  );
}
