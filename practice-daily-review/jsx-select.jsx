export default function SelectBox({ options }) {
  return <select>{options.map((item) => <option key={item}>{item}</option>)}</select>;
}
