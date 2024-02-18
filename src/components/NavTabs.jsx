import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  // State to keep track of the active item
  const [activeItem, setActiveItem] = useState('about');

  // Function to handle click events
  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Lindsay Green</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav justify-content-end mb-2 mb-lg-0">
            <li className={activeItem === 'about' ? 'active nav-item' : 'nav-item'}>
              <Link className="nav-link" aria-current="page" to="/" onClick={() => handleItemClick('about')}>About Me</Link>
            </li>
            <li className={activeItem === 'portfolio' ? 'active nav-item' : 'nav-item'}>
              <Link className="nav-link" to="/portfolio" onClick={() => handleItemClick('portfolio')}>Portfolio</Link>
            </li>
            <li className={activeItem === 'contact' ? 'active nav-item' : 'nav-item'}>
              <Link className="nav-link" to="/contact" onClick={() => handleItemClick('contact')}>Contact</Link>
            </li>
            <li className={activeItem === 'resume' ? 'active nav-item' : 'nav-item'}>
              <Link className="nav-link" to="/resume" onClick={() => handleItemClick('resume')}>Resume</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

