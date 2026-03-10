import BookingForm from "./BookingForm";

export default function BookingPage({availableTimes, dispatch , submitForm}) {
  return (
<section className="booking-page">
  <div className="container booking-layout">
    <div className="booking-intro">
      <h1>Reserve a Table</h1>
      <p>Please choose a date, time, and number of guests.</p>
    </div>

    <div className="booking-panel">
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </div>
  </div>
</section>
  );
}