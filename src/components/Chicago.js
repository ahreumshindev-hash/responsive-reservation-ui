import aboutImg from "../assets/restaurant.jpg";

export default function Chicago() {
  return (
    <section className="section">
      <div className="container two-grid">
        <div>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            Little Lemon is a charming neighborhood bistro that serves simple food
            and classic cocktails in a lively but casual environment.
          </p>
        </div>

        <div>
          <img src={aboutImg} alt="Little Lemon restaurant" />
        </div>
      </div>
    </section>
  );
}