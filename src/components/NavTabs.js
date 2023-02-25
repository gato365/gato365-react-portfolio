import React from "react";

// Create a header component that displays your name
const Header = () => {
    return (
        <h1 style={{ background: '#00FF00', padding: '20px' }}>Header</h1>
    );
}

// Create a footer component with three icon links to your GitHub, LinkedIn, and Twitter profiles




function NavTabs({ currentPage, handlePageChange }) {
    return (


        <ul className="nav nav-tabs">
        
        
            <li className="nav-item">
                <a
                    href="#home"
                    onClick={() => handlePageChange("Home")}
                    className={currentPage === "Home" ? "nav-link active" : "nav-link"}
                >
                    Home
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#about"
                    onClick={() => handlePageChange("About")}
                    className={currentPage === "About" ? "nav-link active" : "nav-link"}
                >
                    About
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#portfolio"
                    onClick={() => handlePageChange("Portfolio")}
                    className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"}
                >
                    Portfolio
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#contact"
                    onClick={() => handlePageChange("Contact")}
                    className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
                >
                    Contact
                </a>
            </li>


            <li className="nav-item">
                <a
                    href="#resume"
                    onClick={() => handlePageChange("Resume")}
                    className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
                >
                    Resume
                </a>
            </li>
        </ul>
    );
}

export default NavTabs;