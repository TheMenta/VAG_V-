import React from "react";
import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-text">
        <h1>VAG</h1>
        <p>Csak a Skoda</p>

        {/* Kereső a szöveg alatt */}
        <div className="hero-search">
          <input type="text" placeholder="Keresés..." />
          <button>Keresés</button>
        </div>
      </div>
    </section>
  );
}
