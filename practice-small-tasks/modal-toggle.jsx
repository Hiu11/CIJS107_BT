import { useState } from "react";

export default function ModalToggle() {
  const [open, setOpen] = useState(false);
  return <button onClick={() => setOpen(!open)}>{open ? "Close" : "Open"}</button>;
}
