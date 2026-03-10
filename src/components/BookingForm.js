import { useEffect, useState } from "react";
import { isFormValid } from "./BookingFormValidation";

export default function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [step, setStep] = useState(1);

  const [date, setDate] = useState("");
  const [time, setTime] = useState(availableTimes?.[0] || "");
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState("Birthday");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (availableTimes && availableTimes.length > 0) {
      setTime(availableTimes[0]);
    }
  }, [availableTimes]);

  function handleDateChange(e) {
    const selected = e.target.value;
    setDate(selected);
    dispatch({ type: "dateChanged", date: selected });
  }

  const isStepOneValid =
    date.trim() !== "" &&
    time.trim() !== "" &&
    guests >= 1 &&
    guests <= 10 &&
    occasion.trim() !== "";

  const isStepTwoValid =
    firstName.trim() !== "" &&
    lastName.trim() !== "" &&
    phone.trim() !== ""

  function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      date,
      time,
      guests,
      occasion,
      firstName,
      lastName,
      phone,
      email
    };

    if (isFormValid(formData) && isStepTwoValid) {
      submitForm(formData);
    }
  }

const errors = {
    date: !date ? "Please select a date." : "",
    guests: guests < 1 || guests > 10 ? "Guests must be between 1 and 10." : "",
};

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2>Book Now</h2>

      {step === 1 && (
        <>
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            id="res-date"
            value={date}
            onChange={handleDateChange}
            required
          />

          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          >
            {availableTimes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>

          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            id="guests"
            min="1"
            max="10"
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            required
          />

          {errors.guests && <p className="error">{errors.guests}</p>}

          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            required
          >
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>

          <button
            type="button"
            disabled={!isStepOneValid}
            onClick={() => setStep(2)}
          >
            Next
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <label htmlFor="first-name">First name</label>
          <input
            type="text"
            id="first-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />

          <label htmlFor="last-name">Last name</label>
          <input
            type="text"
            id="last-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />

          <label htmlFor="phone">Phone number</label>
          <input
            type="number"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <label htmlFor="email">Email (optional)</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="button" onClick={() => setStep(1)}>
            Back
          </button>

          <button
            className="btn"
            type="submit"
            aria-label="On Click"
            disabled={
              !isFormValid({
                date,
                time,
                guests,
                occasion,
                firstName,
                lastName,
                phone,
                email,
              })
            }
          >
            Reserve
          </button>
        </>
      )}
    </form>
  );
}