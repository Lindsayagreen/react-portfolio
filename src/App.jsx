import React from 'react'; // Import the React library
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components from 'react-router-dom' for routing

import Navigation from './components/NavTabs'; // Import the 'Navigation' component
import Aboutme from './components/pages/AboutMe';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';
import Footer from './components/footer';

function App() {
  return (
    <Router> {/* Wrap the entire application in a 'Router' component to enable routing */}
      <div className="app-container">
        <header className="header"> {/* Add the 'header' class here */}
          <Navigation/> {/* Render the 'Header' component at the top */}
        </header>
        {/* <Fade delay={400} cascade damping={0.2}> */}
          <div className="content">
            <Routes> {/* Use 'Routes' component to define different routes for the app */}
              <Route path="/" element={<Aboutme />} /> {/* Define the route for the 'AboutMe' component */}
              <Route path="/aboutme" element={<Aboutme />} /> {/* Define the route for the 'AboutMe' component */}
              <Route path="/portfolio" element={<Portfolio />} /> {/* Define the route for the 'Portfolio' component */}
              <Route path="/contact" element={<Contact />} /> {/* Define the route for the 'Contact' component */}
              <Route path="/resume" element={<Resume />} /> {/* Define the route for the 'Resume' component */}
            </Routes>
          </div>
        {/* </Fade> */}
        <Footer /> {/* Render the 'Footer' component at the bottom */}
      </div>
    </Router>
  );
}

export default App; // Export the 'App' component as the default export
