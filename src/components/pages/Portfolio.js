import React from 'react';
// Get Portfolio.css
import './PortfolioStyle.css';

import mlr from './imgs/mlr.PNG';
import stability from './imgs/stability.jpg';
import workout from './imgs/workout.jpg';
import weather from './imgs/weather.png';
import quiz from './imgs/quiz.jpg';
import password from './imgs/password.jpg';

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
                            <a href="https://gato365.github.io/gato365-portfolio-ijw/"><img src={mlr} alt="Project 1" /></a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <p>Project 1 Description: The purpose of this project is meant to be a portfolio of the work I completed during the begining of this fullstack development bootcamp. I will be updating this project as I progress through the course. It demonstrates my ability to use the following technologies:  </p>
                            <a href='https://github.com/gato365/gato365-portfolio-ijw'>Webpage</a> & <a href='https://github.com/gato365/gato365-portfolio-ijw'>GitHub</a>
                            <ul>
                                <li> HTML</li>
                                <li> CSS</li>
                                <li> JavaScript</li>
                                <li> jQuery</li>
                                <li> Node.js </li>
                            </ul>
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
                            <a href="https://oriarh.github.io/STABILITY/"><img src={stability} alt="Project 2" /></a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <p>Project 2 Description: The primary purpose of stability is to make predictions of someone's mood based on their diet, exercise, sleep, and mood. The current model makes predictions of someone's mood based on fixed regression coefficients That are multiplied by the previous state(s).

                                There are two different visualizations that are displayed based on someone's diet, exercise, sleep, and mood. The Radar plot is designed to display either an average of the following time intervals to compare: 1 week ago vs. 2 weeks ago or 1 month ago vs. 2 months ago. This data was generated for demonstration purposes. </p>

                            <a href='https://oriarh.github.io/STABILITY/'>Webpage</a> & <a href='https://github.com/oriarh/STABILITY'>GitHub</a>


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
                            <a href="https://github.com/gato365/structure-365"><img src={workout} alt="Project 3" /></a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <p>Project 3 Description: This exercise App will allow users to store and track their workout information by connecting to an API. We will be using Handlebars to render the data, and ChartJS to visualize the power exerted by day. This will give users a better understanding of their progress and the ability to review their progress over the course of time. Additionally, the App will have the ability to export the data in a variety of formats, making it easier for users to review and share their progress.</p>

                            <a href=''>Webpage</a> & <a href='https://github.com/gato365/structure-365'>GitHub</a>
                        </div>
                    </div>
                </div>




                <div class="item">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2>Project 4: Weather</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <a href="https://gato365.github.io/gato365-weather-display/"><img src={weather} alt="Project 4" /></a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <p>Project 4 Description: The purpose of this project was to develop a weather application which would provide a 5 day forecast of the weather. The application would be able to display the weather in both Celsius and Fahrenheit. The application would also allow you to change the city that would predict the weather forecast.

                                <a href='https://gato365.github.io/gato365-weather-display/'>Webpage</a> & <a href='https://github.com/gato365/gato365-weather-display'>GitHub</a>

                            </p>
                        </div>
                    </div>
                </div>


                <div class="item">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2>Project 5: Password Generator</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <a href=""><img src={password} alt="Project 5" /></a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <p>Project 5 Description:  The purpose of this project is to create an app with the ability to generate secure passwords for users. The user will be prompted to choose a password length of at least eight characters and no more than 128 characters. The app will ask the user to choose the character types to include in the password, such as lowercase, uppercase, numeric, and/or special characters. The user's input will be validated, and at least one character type must be selected. Once the user answers each prompt, a secure password that matches the selected criteria will be generated. The password will be displayed on the page.

                                <a href='https://gato365.github.io/gato365-friendly-parakeet-ijw/'>Webpage</a> & <a href='https://github.com/gato365/gato365-friendly-parakeet-ijw'>GitHub</a>

                            </p>
                        </div>
                    </div>
                </div>




                <div class="item">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2>Project 6: Quiz Generator</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <a href=""><img src={quiz} alt="Project 6" /></a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <p>Project 6 Description:  This project is about creating an interactive quiz using JavaScript designed to assess the participants' knowledge. The quiz can feature multiple choice questions AND true or false questions. The quiz can also be designed to be timed or non-timed, depending on the needs of the project. The JavaScript code will be used to create a user interface that is both visually appealing and easy to understand for the participants. Furthermore, the code will be used to track the answers the participants gave and determine a score for the quiz. This project can be used in various contexts, from educational to corporate, to assess the participants' knowledge. This quiz also has the ability to display the top scores.

                                <a href='https://gato365.github.io/gato365-quizlet-ijw/'>Webpage</a> & <a href='https://github.com/gato365/gato365-quizlet-ijw'>GitHub</a>

                            </p>
                        </div>
                    </div>
                </div>



            </div>

        </div>
    )
}

export default Portfolio;