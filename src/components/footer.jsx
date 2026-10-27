
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="new-footer">
      <div className="footer-container">

        <div className="footer-column">
          <h3>Explore</h3>
          <a href="/">Home</a>
          <a href="/#about">About</a>
          <a href="/#work">Projects</a>
          <a href="/#contact">Contact</a>
        </div>

        <div className="footer-column">
          <h3>Support</h3>
          <a href="/#contact">FAQs</a>
          <a href="/#contact">Help</a>
          <a href="/#contact">Contact Me</a>
        </div>

        <div className="footer-column">
          <h3>Stay Connected</h3>

          <div className="social-icons">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              title="Twitter"
            >
              <FaTwitter />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
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
