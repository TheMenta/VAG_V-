import "../styles/home.css";
import Hero from "../components/hero.jsx";

export default function Home() {
  return (
    <div className="home-container">
      <Hero />

      <section className="features">
        <div className="feature-card" onClick={() => window.location.href="/forum/vw"}>
          <img src="/images/vw-logo.png" alt="VW" className="feature-logo" />
          <h3>VolksWagen</h3>
        </div>

        <div className="feature-card" onClick={() => window.location.href="/forum/skoda"}>
          <img src="/images/skoda-logo.png" alt="Skoda" className="feature-logo" />
          <h3>Skoda</h3>
        </div>

        <div className="feature-card" onClick={() => window.location.href="/forum/seat"}>
          <img src="/images/seat-logo.png" alt="Seat" className="feature-logo" />
          <h3>Seat</h3>
        </div>
      </section>
    </div>
  );
}
