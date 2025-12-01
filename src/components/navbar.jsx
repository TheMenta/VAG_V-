import { useState } from "react";
import "../styles/navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">

     
        <div className="nav-logo">VAG</div>

       
        <div className="nav-toggle" onClick={() => setOpen(!open)}>
          ☰
        </div>

      
        <ul className={`nav-links ${open ? "active" : ""}`}>
          <li><a href="/">Főoldal</a></li>
          <li><a href="/forum">Fórum</a></li>
          <li><a href="/auth" className="login-btn">Bejelentkezés / Regisztráció</a></li>
          <li><a href="/premium" className="premium-btn">Premium</a></li>
        </ul>

      </div>
    </nav>
  );
}
