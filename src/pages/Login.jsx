import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  function handleLogin(e) {
    e.preventDefault();
    navigate("/home");
  }

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <br /><br />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
