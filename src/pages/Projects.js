const Projects = () => {
    return (
        <div className="outer-container">
            <div className="inner-container">
                <h1>Projects</h1>

                <div> 
                    <div class="lined">
                        <h2>College Compass</h2>
                        <h3>Find me a Match</h3>
                        <h4>March 2023 - April 2023</h4>
                        <ul>
                            <li>College Compass was created with the purpose of providing students an opportunity to view and favorite specific colleges, and for colleges to view prospective students that are interested in them.</li>
                            <ul> 
                                <li><strong>Home Page:</strong> Users select how they would like to use the app, either as a College or a Student, and then get directed to their respective profile pages.</li>
                                <li><strong>Student Profile Page:</strong> Students can select their studentID to login and then their information will be generated about the selected student. Students can update their existing preferences using a PUT request API call or navigate to Saved Colleges Page to add or remove their favorited colleges.</li>
                                <li><strong>Update Saved Colleges Page:</strong> Users can search through the list of all colleges and add their selected college to their favorite colleges list using a POST API call, or delete an existing preference using a DELETE API call.</li>
                                <li><strong>Update College Preferences Page:</strong> Users can update their specific college preferences regarding Greek Life, Size, and Temperature using a PUT API call.</li>
                                <li><strong>Update College Info Page:</strong> Update and modify college specific information (done by the college) to better advertise themselves to prospective students.</li>
                            </ul>
                            {/* add in the link to the diagrams */}
                            <li>Built two blueprints colleges and students each for our user personas.</li> 
                            <li>Developed the CollegeCompass database and granted permissions for web access for all of the tables.</li>
                            <li>Generated data for all 16 tables using Mockaroo following appropriate primary key, foreign key, and fields constraints.</li>
                            <li>Programmed the GET, PUT, POST, DELETE routes for a college and student user persona.</li>
                            <li>Fully tested all of the functionality of the app with ThunderClient.</li>
                            <li>Technologies: MySQL, Docker, Python, AppSmith, JavaScript</li>
                            <li>Code for the front-end and the back-end are publicly available to view.</li>
                        </ul>
                    </div>
                </div>

                <div> 
                    <div class="lined">
                        <h2>Image Processing</h2>
                        <h3>Graphical User Interface Integrated Image Editor</h3>
                        <h4>June 2022</h4>
                        <ul>
                            <li>Java image processing application with text-based, Graphical User Interface (GUI), and command line functionality.</li>
                            <li>Currently contains 10+ features including: uploading an image, saving an image to a device, flipping (vertical and horizontal), brightening/dimming, greyscaling, blurring, sharpening, applying a sepia filter, and downsizing an image.</li>
                            <li>Application allows users to load or save an image in the formats .jpg, jpng, .ppm, and .bmp.</li>
                            <li>Alongside the GUI, a histogram also displays the frequencies of each value (between 0-255) for the red, green, and blue values of each pixel.</li>
                            <li>Model, View, Controller design pattern was followed in addition to the usage of interfaces, classes, constructors, abstraction, and other object-oriented design principles.</li>
                            <li>All functionality has been properly tested with JUnit4 testing library.</li>
                            <li>Technologies: Java8, JUnit4, Swing</li>
                            <li>Code is available to view here.</li>
                        </ul>
                    </div>
                </div>

                <div> 
                    <div class="lined">
                        <h2>Web Crawler</h2>
                        <h3>Traverse the page for the secret flags</h3>
                        <h4>April 2023</h4>
                        <ul>
                            <li>Gathers and traverses a fake social network, Fakebook, to collect 5 secret flags that have been hidden somewhere on the Fakebook website.</li>
                            <li>Established successful login using a TCP socket wrapped in TLS.</li>
                            <li>Fully developed and tested a web crawler to locate the secret flags on the website.</li>
                            <li>Integrated and tested successful handling of HTTP status codes as well as cookie management to maintain login state.</li>
                            <li>Technologies: Python</li>
                            <li>Code is available to view here.</li>
                        </ul>
                    </div>
                </div>

                <div> 
                    <div class="lined">
                        <h2>Hangman with my Nose</h2>
                        <h3>Multiplayer skribbl.io inspired game</h3>
                        <h4>February 2022 - April 2022</h4>
                        <ul>
                            <li>Built a game for the user to most accurately draw the word on the screen most accurately using their nose.</li>
                            <li>5-letter words were pulled from a dictionary (which we created) and certain letters of the word would come up over time.</li>
                            <li>The goal was to get as close as you can to drawing what is on the screen.</li>
                            <li>Users had the ability to change the color of their stilus, pick a different word, reveal another character, use the eraser, and more based upon the number of fingers the user is holding up.</li>
                            <li>Imported OpenCV and Sys to handle facial recognition and assist in game development.</li>
                            <li>Technologies: Python, Sys Module, OpenCV</li>
                            <li>Code is available to view here.</li>
                        </ul>
                    </div>
                </div>

                <div> 
                    <div class="lined">
                        <h2>Chores4Us</h2>
                        <h3>Assign and take on tasks with your roommates</h3>
                        <h4>September 2021 - December 2021</h4>
                        <ul>
                            <li>A web-app deployed in ReactJS for users to assign, add, delete, and mark completed tasks within roommates.</li>
                            <li>First project that I led in a team of 3 people in college.</li>
                            <li>Started from scratch including the ideation phase to full development of the product.</li>
                            <li>Designed Figma mockups, followed by the coding in ReactJS with CSS for the styling. Management of state and effect done via hooks.</li>
                            <li>Code is available to view here.</li>
                            <li>Technologies: ReactJS, JavaScript, CSS, HTML, Figma</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
    

export default Projects;