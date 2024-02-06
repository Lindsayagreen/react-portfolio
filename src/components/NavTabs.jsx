import React, { useState } from 'react';

const Navigation = () => {
  // State to keep track of the active item
  const [activeItem, setActiveItem] = useState('about');

  // Function to handle click events
  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <nav>
      <ul>
        <li className={activeItem === 'about' ? 'active' : ''}>
          <a href="#about" onClick={() => handleItemClick('about')}>
            About Me
          </a>
        </li>
        <li className={activeItem === 'portfolio' ? 'active' : ''}>
          <a href="#portfolio" onClick={() => handleItemClick('portfolio')}>
            Portfolio
          </a>
        </li>
        <li className={activeItem === 'resume' ? 'active' : ''}>
          <a href="#resume" onClick={() => handleItemClick('resume')}>
            Resume
          </a>
        </li>
        <li className={activeItem === 'contact' ? 'active' : ''}>
          <a href="#contact" onClick={() => handleItemClick('contact')}>
            Contact Me
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
