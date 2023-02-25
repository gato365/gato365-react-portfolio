// Portfolio Container

import React, { useState } from "react";
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import './PortfolioContainer.css';
import link from "./pages/imgs/link.png";
import github from "./pages/imgs/github-mark-white.png";
import stack from "./pages/imgs/stack.png";

function PortfolioContainer() {
    // Using useState, set the default value for currentPage to 'Home'
    const [currentPage, setCurrentPage] = useState('About');

    // The renderPage method uses a switch statement to render the appropriate current page
    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
    };

    // The handlePageChange method is used to update the value of currentPage
    const handlePageChange = (page) => setCurrentPage(page);

    // The return statement renders a div that contains the NavTabs component and a div to display the current page
    return (

        <div>
            <ul class="container">
                <li> Immanuel</li>
                <li> <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} /> </li>
            </ul>
            {renderPage()}
            <div class="footer-container">
                <a href="https://github.com/gato365" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="Github Icon" style={{ width: '16px', height: '16px' }} />
                </a>
                <a href="https://www.linkedin.com/in/immanuelwilliams/" target="_blank" rel="noopener noreferrer">
                    <img src={link} alt="LinkedIn Icon" style={{ width: '16px', height: '16px' }} />
                </a>
                <a href="https://stackoverflow.com/users/4495652/immanuel-williams" target="_blank" rel="noopener noreferrer">
                    <img src={stack} alt="Stackover Flow" style={{ width: '16px', height: '16px' }} />
                </a>
            </div>
        </div>

    );
}

export default PortfolioContainer;