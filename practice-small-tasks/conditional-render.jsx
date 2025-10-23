export default function LoginStatus({ isLoggedIn }) {
  return <p>{isLoggedIn ? "Welcome back" : "Please login"}</p>;
}
