
function Footer() {
  return (
    <footer className="new-footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Explore</h3>
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#work">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-column">
          <h3>Support</h3>
          <a href="#contact">FAQs</a>
          <a href="#contact">Help</a>
          <a href="#contact">Contact Me</a>
        </div>

        <div className="footer-column">
          <h3>Stay Connected</h3>
          <a href="#contact">Facebook</a>
          <a href="#contact">Twitter</a>
          <a href="#contact">Instagram</a>
        </div>
      </div>

      <div className="footer-bottom">
        <h3>Lav's Website</h3>
        <p>© 2026 Lav. All rights reserved.</p>
        <p>Privacy Policy | Terms | Code of Conduct</p>
      </div>
    </footer>
  );
}

export default Footer;