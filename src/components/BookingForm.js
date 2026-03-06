import { useEffect, useState } from "react";

export default function BookingForm( {availableTimes, dispatch, submitForm}) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState("Birthday");

  useEffect(() =>{
      if(availableTimes.length > 0 ) setTime(availableTimes[0]);
  }, [availableTimes])

  function handleDateChange(e) {
    const selectedDate = e.target.value;
    setDate(selectedDate)

    dispatch({type : 'dateChanged', date : selectedDate });
  }

  function handleSubmit(e) {
    e.preventDefault();
   
    const formData = {
      date,
      time,
      guests,
      occasion,
    }

    submitForm(formData)
    
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2>Book Now</h2>
      {/* Choose date */}
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        required
      />

      {/* Choose time */}
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

      {/* Number of guests */}
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

      {/* Occasion */}
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" />
    </form>
  );
}