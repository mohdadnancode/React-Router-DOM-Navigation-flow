import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h2>Welcome to home page</h2>
        <br /><br />
        <button onClick={() => navigate("/login")}>Logout</button>
    </div>
  )
}

export default Home