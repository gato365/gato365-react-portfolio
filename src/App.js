import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";

const styles = {
    // container: {
    //   width: '100%',
    //   height: '100%',
    //   margin: '0',
    //   backgroundColor: 'white',
    //   fontFamily: 'Garamond', 
    //   fontSize: '16px', 
    //   color: 'red'
    // }

    page: {
      background: '--raisin-black',
      color: '--misty-rose',
      padding: '1em'
    },
    main: {
      background: '--buff',
      color: '--verdigris',
      padding: '1em'
    },
    footer: {
      background: '--vermilion',
      color: '--raisin-black',
      padding: '1em'
    }
  }


const App = () => {
    return (
        <div style={{styles }}>
            <PortfolioContainer />
        </div>
    );
};

export default App;
