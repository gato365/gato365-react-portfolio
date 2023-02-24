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
                            <h2>Project 1: Original Portfolio</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <a href="https://gato365.github.io/gato365-portfolio-ijw/"><img src="https://via.placeholder.com/100.png/09f/fff" alt="Project 1" /></a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <p>Project 1 Description: The purpose of this project is meant to be a portfolio of the work I completed during the begining of this fullstack development bootcamp. I will be updating this project as I progress through the course. It demonstrates my ability to use the following technologies:  </p>

* HTML
* CSS
* JavaScript
* jQuery
* Node.js



                          
                        </div>
                    </div>
                </div>



                <div class="item">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2>Project 2: Stability</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <a href="https://oriarh.github.io/STABILITY/"><img src="https://via.placeholder.com/100.png/09f/fff" alt="Project 2" /></a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <p>Project 2 Description: The primary purpose of stability is to make predictions of someone's mood based on their diet, exercise, sleep, and mood. The current model makes predictions of someone's mood based on fixed regression coefficients That are multiplied by the previous state(s).

There are two different visualizations that are displayed based on someone's diet, exercise, sleep, and mood. The Radar plot is designed to display either an average of the following time intervals to compare: 1 week ago vs. 2 weeks ago or 1 month ago vs. 2 months ago. This data was generated for demonstration purposes. </p>
                        </div>
                    </div>
                </div>



                <div class="item">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2>Project 3: Structure</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <a href="https://github.com/gato365/structure-365"><img src="https://via.placeholder.com/100.png/09f/fff" alt="Project 3" /></a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <p>Project 3 Description: This exercise App will allow users to store and track their workout information by connecting to an API. We will be using Handlebars to render the data, and ChartJS to visualize the power exerted by day. This will give users a better understanding of their progress and the ability to review their progress over the course of time. Additionally, the App will have the ability to export the data in a variety of formats, making it easier for users to review and share their progress.</p>
                        </div>
                    </div>
                </div>




                <div class="item">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2>Project 4: Password Generator</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <a href="https://gato365.github.io/gato365-weather-display/"><img src="https://via.placeholder.com/100.png/09f/fff" alt="Project 4" /></a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <p>Project 4 Description: The purpose of this project was to develop a weather application which would provide a 5 day forecast of the weather. The application would be able to display the weather in both Celsius and Fahrenheit. The application would also allow you to change the city that would predict the weather forecast.</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Portfolio;