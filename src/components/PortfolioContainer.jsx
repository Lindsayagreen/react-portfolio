
import { useState } from 'react';
import NavTabs from "./NavTabs";
import Aboutme from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

export default function PortfolioContainer(){

    const [currentPage, setCurrentPage] = useState('Aboutme');

    const renderPage = () => {
        if (currentPage === 'Aboutme') {
          return <Aboutme />;
        }
        if (currentPage === 'Portfolio') {
          return <Portfolio />;
        }
        if (currentPage === 'Contact') {
          return <Contact />;
        }
        return <Resume />;
      };

      const handlePageChange = (page) => setCurrentPage(page);



      return (
        <div>
     
          <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
          <main className="mx-3">{renderPage()}</main>
        </div>
      );

}

