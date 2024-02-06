import React from 'react';
// Import the style sheet for Footer


const Footer = () => {
  return (
    <footer className="footer-container"> 
      <div> 
        {/* Link to GitHub profile */}
        <a href="" target="_blank" rel="noopener noreferrer" class="footers">
          GitHub : <i className="github"></i> {/* GitHub icon */}
        </a>

        {/* Link to LinkedIn profile */}
        <a href="" target="_blank" rel="noopener noreferrer" class="footers">
          LinkedIn : <i className="linkedin"></i> {/* LinkedIn icon */}
        </a>

        {/* Link to Twitter profile */}
        <a href="                                                                                                                                                                                              " target="_blank" rel="noopener noreferrer" class="footers">
          Twitter : <i className="twitter"></i> {/* Twitter icon */}
        </a>
        
      </div>
    </footer>
  );
};

export default Footer;