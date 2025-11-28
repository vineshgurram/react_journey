export default function IfElse() {
  const isLoggedIn = true;
  if (isLoggedIn) {
    return <p>Welcome</p>;
  } else {
    return <p>Please Login</p>;
  }
}
