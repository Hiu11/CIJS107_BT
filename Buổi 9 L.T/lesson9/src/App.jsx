import { useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav style={{ display: "flex", gap: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/my-profile">My Profile</Link>
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Hello MindX</h1>} />
        <Route path="/my-profile" element={<h1>My Profile</h1>} />
        <Route path="/login" element={<h1>Login Page</h1>} />
      </Routes>

      <footer>Đây là footer</footer>
    </>
  );
}

export default App;
