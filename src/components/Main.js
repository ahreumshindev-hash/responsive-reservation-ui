/* global fetchAPI , submitAPI */

import { Routes, Route, useNavigate } from "react-router-dom";
import Homepage from "./Homepage";
import BookingPage from "./BookingPage";
import Chicago from "./Chicago";
import Specials from "./Specials";
import ComfirmedBooking from "./ComfirmedBooking";

import './Main.css';
import { useReducer } from "react";

function Placeholder({ title }) {
  return (
    <section className="section">
      <div className="container">
        <h2>{title}</h2>
        <p>Page content coming soon.</p>
      </div>
    </section>
  );
}

export function updateTimes(state, action) {
  if (action.type === "dateChanged") {
    return fetchAPI(new Date(action.date));
  }
  return state;
}

export function initializeTimes() {
  const today = new Date();
  return fetchAPI(today)
}

export default function Main() {
  const navigate = useNavigate();

  const [availableTimes , dispatch ] =useReducer(updateTimes, [] , initializeTimes)

  function submitForm(formData) {
    const success = submitAPI(formData);
    if (success) {
      navigate("/confirmed");
    }
  }

  return (
    <main>
        <div className='container'>
            <Routes >
                <Route path="/" element={<Homepage />} />
                <Route path="/reservations" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>} />
                <Route path="/confirmed" element={<ComfirmedBooking />} />
                <Route path="/about" element={<Chicago />} />
                <Route path="/menu" element={<Specials/>} />
                <Route path="/order" element={<Placeholder title="Order Online" />} />
                <Route path="/login" element={<Placeholder title="Login" />} />
            </Routes>
        </div>
    </main>
  );
}
