import React from 'react';
// Get Portfolio.css
import './PortfolioStyle.css';


// Function to display the portfolio page in the browser
// Allow for 4 projects to be displayed which all have a title, image, and description
// The image will be a link to the deployed application
// Allow for Hover effect on the image to display the title of the project
// Allow for the title to be a link to the deployed application

function Portfolio() {
    return (






        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <h1>Portfolio</h1>
                </div>
            </div>


            <div className="box">
                <div class="item">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2>Project 1</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <a href="www.gato365.com"><img src="https://via.placeholder.com/100.png/09f/fff" alt="Project 1" /></a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <p>Project 1 Description</p>
                        </div>
                    </div>
                </div>



                <div class="item">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2>Project 2</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <a href="www.gato365.com"><img src="https://via.placeholder.com/100.png/09f/fff" alt="Project 2" /></a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <p>Project 2 Description</p>
                        </div>
                    </div>
                </div>



                <div class="item">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2>Project 3</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <a href="www.gato365.com"><img src="https://via.placeholder.com/100.png/09f/fff" alt="Project 3" /></a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <p>Project 3 Description</p>
                        </div>
                    </div>
                </div>




                <div class="item">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2>Project 4</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <a href="www.gato365.com"><img src="https://via.placeholder.com/100.png/09f/fff" alt="Project 4" /></a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <p>Project 4 Description</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Portfolio;