import logo from '../assets/Logo.svg'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img className="footer-logo" src={logo} alt="Little Lemon logo" />
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <h3 className="footer-title">Doormat Navigation</h3>
          <ul className="footer-list">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/order">Order Online</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>

        <div className="footer-contact">
          <h3 className="footer-title">Contact</h3>
          <ul className="footer-list">
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </div>

        <div className="footer-social">
          <h3 className="footer-title">Social Media Links</h3>
          <ul className="footer-list">
            <li><a href="#facebook">Facebook</a></li>
            <li><a href="#instagram">Instagram</a></li>
            <li><a href="#twitter">Twitter</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}