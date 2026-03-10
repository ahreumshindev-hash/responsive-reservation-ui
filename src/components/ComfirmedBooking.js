import { Link } from "react-router-dom";

export default function ConfirmedBooking() {
  return (
    <section className="confirmed-page">
        <div className="confirmed-card">
          <span className="confirmed-badge">Reservation Successful</span>
          <h1>Booking Confirmed</h1>
          <p>
            Your table reservation has been confirmed. We look forward to seeing
            you at Little Lemon.
          </p>

          <div className="confirmed-actions">
            <Link to="/" className="btn btn-primary" >
              Back to Home
            </Link>
            <Link to="/menu" className="btn btn-secondary">
              View Menu
            </Link>
          </div>
        </div>
    </section>
  );
}