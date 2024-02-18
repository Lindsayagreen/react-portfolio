import React from "react";
import "../styles/Footer.css"; // Import CSS file for Footer component

const Footer = () => {
  return (
    <footer className="footer-container fixed-bottom bg-dark text-white">
      <div className="container">
        {/* Link to GitHub profile */}
        <a href="" target="_blank" rel="noopener noreferrer" className="text-white">
          GitHub : <i className="fab fa-github"></i> {/* GitHub icon */}
        </a>

        {/* Link to LinkedIn profile */}
        <a href="" target="_blank" rel="noopener noreferrer" className="text-white ml-3">
          LinkedIn : <i className="fab fa-linkedin"></i> {/* LinkedIn icon */}
        </a>

        {/* Link to Twitter profile */}
        <a href="" target="_blank" rel="noopener noreferrer" className="text-white ml-3">
          Twitter:
          <i className="fab fa-twitter"></i> {/* Twitter icon */}
        </a>
      </div>
    </footer>
  );
};

export default Footer;

