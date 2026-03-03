import logo from '../assets/Logo.svg'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* 1열: 브랜드/로고(또는 이미지) */}
        <div className="footer-brand">
          <img className="footer-logo" src={logo} alt="Little Lemon logo" />
        </div>

        {/* 2열: Doormat */}
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

        {/* 3열: Contact */}
        <div className="footer-contact">
          <h3 className="footer-title">Contact</h3>
          <ul className="footer-list">
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </div>

        {/* 4열: Social */}
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

export default Footer;