// Portfolio Container

import React, { useState } from "react";
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function PortfolioContainer() {
    // Using useState, set the default value for currentPage to 'Home'
    const [currentPage, setCurrentPage] = useState('Home');

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
        return <Contact />;
    };

    // The handlePageChange method is used to update the value of currentPage
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}

export default PortfolioContainer;