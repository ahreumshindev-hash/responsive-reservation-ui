
import { Link } from "react-router-dom";
import logo from '../assets/Logo.svg'

export default function Nav() {
  return (
    <nav className="nav">
      <Link to="/" aria-label="Go to homepage">
        <img src={logo} alt="Little Lemon logo" className="nav-logo" />
      </Link>

        <ul className="nav-links">
            <li><Link  to="/">Home</Link></li>
            <li><Link  to="/about">About</Link></li>
            <li><Link  to="/menu">Menu</Link></li>
            <li><Link  to="/reservations">Reservations</Link></li>
            <li><Link  to="/order">Order Online</Link></li>
            <li><Link  to="/login">Login</Link></li>
        </ul>
    </nav>
  );
}