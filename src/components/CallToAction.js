import Restaurant from '../assets/restaurant.jpg'

export default function CallToAction() {
  return (
        <section className="section hero">
        <div className="hero-grid">
          <div className="hero-text">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <a className="btn" href="/reservations">Reserve a Table</a>
          </div>

          <div className="hero-image" aria-hidden="true">
            <img src={Restaurant} alt="Little Lemon restaurant interior" />
          </div>
        </div>
      </section>
  );
}