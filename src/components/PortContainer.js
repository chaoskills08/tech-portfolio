import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import '../styles/index.css';
import linked from '../images/linkedin.png'
import gitHub from '../images/github.png'



function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <br></br>
      <footer className="footer">
        {/* eslint-disable-next-line */}
        <a href="https://www.linkedin.com/in/nicholas-bales-44b59223a/" target="_blank"><img alt="linkedIn icon" src={linked} width="45px" height="45px" className='icons'></img></a>
        {/* eslint-disable-next-line */}
        <a href="https://github.com/chaoskills08" target="_blank"><img alt="GitHub icon" src={gitHub} width="45px" height="45px" className='icons'></img></a>
      </footer>
    </div>
  );
}

export default PortfolioContainer