
import './Footer.css';
import { default as logo } from "../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Left Section - Branding */}
        <div className="branding-container">
          <img src={logo} alt="Logo" className="logo" /> 
          <div className="footer-left">
            <h2 className="brand-logo">CLASS TRACKER</h2>
            <p className="footer-description">
            Save your time, Save your future.
          </p>
        </div>
        </div>

        {/* Center Section - Social Media Links */}
        <div className="footer-center">
          <h3>Follow Us</h3>
          <ul className="social-links">
            <li>
              <a href="https://www.instagram.com/rbu_nagpur_official/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/RBU.nagpur" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/ramdeobaba-university-nagpur/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i> LinkedIn
              </a>
            </li>
            <li>
              <a href="https://x.com/RBU_Official?s=08" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-x-twitter"></i> X
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section - Contact Info */}
        <div className="footer-right">
          <h3>Contact Us</h3>
          <p>Email: classtracker@gmail.com</p>
          <p>Phone: 123-456-4567</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2024 Class tracker. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
