import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";

const App = () => {
    return (
        <div style={{
            backgroundColor: 'black',
            width: '100vw',
            height: '100vh',
            fontFamily: 'Arial', 
            fontSize: '16px', 
            color: 'red'
        }}>
            <PortfolioContainer />
        </div>
    );
};

export default App;
