import { useState } from "react";

export default function InputState() {
  const [name, setName] = useState("");
  return <input value={name} onChange={(event) => setName(event.target.value)} />;
}
