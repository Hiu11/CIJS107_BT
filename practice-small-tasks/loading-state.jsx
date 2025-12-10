export default function LoadingState({ isLoading }) {
  return isLoading ? <p>Loading...</p> : <p>Ready</p>;
}
