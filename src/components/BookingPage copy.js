import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const timeOptions = ["6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM"];

export default function BookingPage() {
  const navigate = useNavigate();

  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);

  // Step1: Reservation
  const [date, setDate] = useState(today);
  const [time, setTime] = useState(timeOptions[1]);
  const [guests, setGuests] = useState(2);

  // Step2: Customer details
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contact, setContact] = useState(""); // email or phone

  const canGoNext = date && time && guests >= 1;
  const canSubmit = firstName.trim() && lastName.trim() && contact.trim();

  function handleReservationSubmit(e) {
    e.preventDefault();
    if (!canGoNext) return;
    setStep(2);
  }

  function handleCustomerSubmit(e) {
    e.preventDefault();
    if (!canSubmit) return;
    setStep(3);
  }

  function resetAndGoHome() {
    navigate("/");
  }

  return (
    <section className="section" >
      <div className="booking">
        <h2>Reserve a Table</h2>

        {step === 1 && (
          <form className="booking-card" onSubmit={handleReservationSubmit}>
            {/* Date */}
            <label className="field">
              <span className="label">Select Date</span>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </label>

            {/* Time (radio buttons) */}
            <fieldset className="fieldset">
              <legend className="label">Select Time</legend>
              <div className="radio-group">
                {timeOptions.map((t) => (
                  <label key={t} className="radio">
                    <input
                      type="radio"
                      name="time"
                      value={t}
                      checked={time === t} 
                      onChange={() => setTime(t)}
                    />
                    <span>{t}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            {/* Guests */}
            <label className="field">
              <span className="label">Number of Guests</span>
              <input
                type="number"
                min={1}
                max={12}
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                required
              />
            </label>

            <button className="btn btn-primary" type="submit" disabled={!canGoNext}>
              Confirm Reservation
            </button>
          </form>
        )}

        {step === 2 && (
          <form className="booking-card" onSubmit={handleCustomerSubmit}>
            <h3>Enter Details</h3>

              <label className="field">
                <span className="label">First Name</span>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </label>

              <label className="field">
                <span className="label">Last Name</span>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </label>

            <label className="field">
              <span className="label">Contact Information</span>
              <input
                type="text"
                placeholder="Email or Phone"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                required
              />
            </label>

            <div className="actions">
              <button className="btn" type="button" onClick={() => setStep(1)}>
                Back
              </button>
              <button className="btn btn-primary" type="submit" disabled={!canSubmit}>
                Submit Details
              </button>
            </div>

            <p className="summary">
              <strong>Summary:</strong> {date} • {time} • {guests} guests
            </p>
          </form>
        )}

        {step === 3 && (
          <div className="booking-card">
            <h3>Booking Confirmed</h3>
            <p>
              Thanks, {firstName}! Your table is reserved for <strong>{date}</strong> at{" "}
              <strong>{time}</strong> for <strong>{guests}</strong> guests.
            </p>
            <button className="btn btn-primary" onClick={resetAndGoHome}>
              Back to Home
            </button>
          </div>
        )}
      </div>
    </section>
  );
}