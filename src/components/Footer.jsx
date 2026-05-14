import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-text">ANURUP</span>
          <span className="logo-bracket">/&gt;</span>
        </div>
        <p className="footer-copy">© 2026 Anurup Chowdhury · Designed & Built with ☕ and 💻</p>
        <div className="footer-socials">
          <a href="https://github.com/AnurupChowdhury05" target="_blank" rel="noreferrer" className="social-btn" aria-label="GitHub" id="footer-github">GH</a>
          <a href="https://www.linkedin.com/in/anurup-chowdhury-402852279/" target="_blank" rel="noreferrer" className="social-btn" aria-label="LinkedIn" id="footer-linkedin">LI</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
