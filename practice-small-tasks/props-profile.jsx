export default function Profile({ user }) {
  return <p>{user.name} - {user.email}</p>;
}
