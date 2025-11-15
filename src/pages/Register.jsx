import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  function handleSubmite(e) {
    e.preventDefault();
    navigate("/login");
  }

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Register Page</h2>
      <form onSubmit={handleSubmite}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <br />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
