import BookingForm from "./BookingForm";

export default function BookingPage({availableTimes, dispatch , submitForm}) {
  return (
    <main className="section">
      <div className="container">
        <h1>Reserve a Table</h1>
        <p>Please choose a date, time, and number of guests.</p>

        <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
      </div>
    </main>
  );
}