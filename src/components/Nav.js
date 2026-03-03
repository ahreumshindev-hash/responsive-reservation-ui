import logo from '../assets/Logo.svg'

function Nav() {
  return (
    <nav className="nav">
        <img src={logo} alt="Little Lemon logo" className="nav-logo" />

        <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/order">Order Online</a></li>
            <li><a href="/login">Login</a></li>
        </ul>
    </nav>
  );
}

export default Nav;