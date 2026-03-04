
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import BookingPage from "./BookingPage";
import Chicago from "./Chicago";
import Specials from "./Specials";

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

function Main() {
  return (
    <main>
        <div className='container'>
            <Routes >
                <Route path="/" element={<Homepage />} />
                <Route path="/reservations" element={<BookingPage />} />
                <Route path="/about" element={<Chicago />} />
                <Route path="/menu" element={<Specials/>} />
                <Route path="/order" element={<Placeholder title="Order Online" />} />
                <Route path="/login" element={<Placeholder title="Login" />} />
            </Routes>
        </div>
    </main>
  );
}

export default Main;