import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";

const styles = {
    container: {
      width: '100%',
      height: '100%',
      margin: '0',
      backgroundColor: 'white',
      fontFamily: 'Garamond', 
      fontSize: '16px', 
      color: 'red'
    }
  }


const App = () => {
    return (
        <div style={styles.container}>
            <PortfolioContainer />
        </div>
    );
};

export default App;
