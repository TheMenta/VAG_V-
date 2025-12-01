import { useState } from "react";
import { Link } from "react-router-dom"; 
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
          <li><Link to="/">Főoldal</Link></li>
          <li><Link to="/forum">Fórum</Link></li>
          <li><Link to="/auth" className="login-btn">Bejelentkezés</Link></li>
          <li><Link to="/premium" className="premium-btn">Premium</Link></li>
        </ul>

      </div>
    </nav>
  );
}
