const Projects = () => {
    return (
        <div className="outer-container">
            <div className="inner-container">
                <h1>🛠️ Projects 🛠️</h1>

                <div> 
                    <div class="lined">
                        <h2>College Compass</h2>
                        <div className="project-details">
                            <h3>Find me a Match</h3>
                        </div>
                        <h4>March 2023 - April 2023</h4>
                        <ul>
                            <li>College Compass 🧭 was created with the purpose of <strong>providing students 👨‍🎓 an opportunity to view and favorite specific colleges 🏫</strong>, and for <strong>colleges to view prospective students</strong> that are interested in them.</li>
                            <ul> 
                                <li>🏠 <strong>Home Page</strong> 🏠: Users select how they would like to use the app, either as a <strong>College or a Student</strong>, and then get directed to their respective profile pages.</li>
                                <li>👨‍🎓 <strong>Student Profile Page</strong> 👨‍🎓: Students can select their studentID to login and then their information will be generated about the selected student. Students can update their existing preferences using a <strong>PUT request API call</strong> or navigate 🚢 to Saved Colleges Page to add ✅ or remove ❌ their favorited colleges.</li>
                                <li>🏫 <strong>Update Saved Colleges Page</strong> 🏫: Users can search 🔎 through the list of all colleges and add their selected college to their favorite colleges list using a <strong>POST API call</strong>, or delete an existing preference using a <strong>DELETE API call</strong>.</li>
                                <li>🏫 <strong>Update College Preferences Page</strong> 🏫: Users can update their specific college preferences regarding Greek Life 🇬🇷, Size, and Temperature 🌡️ using a <strong>PUT API call</strong>.</li>
                                <li>🏫 <strong>Update College Info Page</strong> 🏫: Update and modify college specific information (done by the college) to better advertise 📰 themselves to prospective students.</li>
                            </ul>
                            {/* add in the link to the diagrams */}
                            <li>Built <strong>two blueprints 🗺️</strong> colleges and students each for our <strong>user personas</strong>. Here is the <strong><a href="https://drive.google.com/file/d/1TCvE4fa9w9OEc4ZTfPZrpvqGMZfUiqBD/view" target="_blank" rel="noreferrer" class="link-black">Global ER diagram</a></strong> as well as the <strong><a href="https://drive.google.com/file/d/11kKTBXUbVRUcMU9L3gwywZE3tMyO9fcF/view" target="_blank" rel="noreferrer" class="link-black">relational diagram</a></strong>.</li> 
                            <li>Developed the <strong>CollegeCompass database</strong> and<strong> granted permissions 🔐 for web 🕸️ access</strong> for all of the tables.</li>
                            <li>Generated data for all 16 tables using <strong><a href="https://mockaroo.com/" target="_blank" rel="noreferrer" class="link-black">Mockaroo</a></strong> following appropriate <strong>primary key 🔑, foreign key 🔑, and fields constraints</strong>.</li>
                            <li>Programmed 👨🏽‍💻 the <strong>GET, PUT, POST, DELETE</strong> routes for a college and student user persona.</li>
                            <li>Fully tested all of the functionality of the app with <strong><a href="https://www.thunderclient.com/" target="_blank" rel="noreferrer" class="link-black">ThunderClient</a> ⚡️</strong>.</li>
                            <li>Technologies: MySQL, Docker, Python, AppSmith, JavaScript</li>
                            <li><em>GitHub code for the <strong><a href="https://github.com/akale22/College-Compass-Appsmith" target="_blank" rel="noreferrer" class="link-black">front-end</a></strong> and the <strong><a href="https://github.com/akale22/College-Compass" target="_blank" rel="noreferrer" class="link-black">back-end</a></strong> are publicly available to view.</em></li>
                        </ul>
                    </div>
                </div>

                <div> 
                    <div class="lined">
                        <h2>Hackathon Projects</h2>
                        <div className="project-details">
                            <h3>HackMIT & HackHarvard</h3>
                        </div>
                        <h4>Plot - September 2023</h4>
                        <ul>
                            <li>Plot displays <strong> Google Maps 📍 with overlaid polygons</strong> representing various community gardens 🪴 available to the user.</li>
                            <li>Upon boot, Plot allows the user to either join a garden near them or create their own and add different plant types 🪴 to the garden’s list with separate watering schedules.</li>
                            <li><strong>Built out the connection to our SQL database</strong> and wrote the underlying queries to create ✅, update, and delete ❌ gardens.</li>
                            <li><strong>Triggered the Google Maps API</strong> to overlay the polygons for our gardens including constraint based garden creation.</li>
                            <li>Fully functioning and <strong> developed React frontend integrated with a Spring boot backend framework</strong>.</li>
                            <li>Technologies: ReactJS, Spring Boot framework, SQLite, Google Maps API, JavaScript, HTML, CSS, Java</li>
                            <li><em><a href="https://github.com/HackMIT2023/hackMit2023" target="_blank" rel="noreferrer" class="link-black">GitHub</a> and <a href="https://devpost.com/software/plot-yiq0cm?ref_content=user-portfolio&ref_feature=in_progress" target="_blank" rel="noreferrer" class="link-black">Devpost</a> code is available to view.</em></li>
                        </ul>
                        <h4>InstaShop - October 2023</h4>
                        <ul>
                            <li>InstaShop will accept as input any grocery 🛒 list to search at the Target 🎯 retail store in Boston. Then, based on the store map of the Target, we will provide the exact route that you should take from the entrance to the exit to retrieve all of the items.</li>
                            <li>Triggered the <strong>Target retail developer API </strong>to search for a certain item and retrieve the aisle number of the location within the given store.</li>
                            <li>Built out classes and functions to create and develop a graph with different nodes to mock the exact layout of the store.</li>
                            <li>Programmed an <strong> efficient dynamic programming algorithm 💡 </strong>using a variance of the <strong>Traveling Salesman algorithm ✈️</strong> along with a <strong> breadth first search</strong> to return the shortest path from the entrance to retrieving all of your items to the exit. <strong>Optimized the algorithm down from exponential time! ⏱️</strong></li>
                            <li>Fully functioning and developed React frontend integrated with a mix of python, typescript, and javascript backend.</li>
                            <li>Technologies: ReactJS, Target API, JavaScript, Python, TailwindCSS, TypeScript, </li>
                            <li><em><a href="https://github.com/AnshulShirude/InstaShop" target="_blank" rel="noreferrer" class="link-black">GitHub</a> and <a href="https://devpost.com/software/instashop?ref_content=my-projects-tab&ref_feature=my_projects" target="_blank" rel="noreferrer" class="link-black">Devpost</a> code is available to view.</em></li>
                        </ul>
                    </div>
                </div>

                <div> 
                    <div class="lined">
                        <h2>Image Processing</h2>
                        <div className="project-details">
                            <div class="header">
                                <h3>GUI Integrated Image Editor</h3>
                            </div>
                        </div>
                        <h4>June 2022</h4>
                        <ul>
                            <li>Java image processing application with <strong>text-based ⌨️, Graphical User Interface (GUI) 🗾, and command line functionality</strong>.</li>
                            <li>Currently contains <strong>10+ features</strong> including: uploading an image 🌠, saving an image to a device 💾, flipping (vertical and horizontal), brightening/dimming ☀️, greyscaling, blurring, sharpening, applying a sepia filter, and downsizing an image.</li>
                            <li>Application allows users to <strong>load or save an image 💾</strong> in the formats .jpg, jpng, .ppm, and .bmp.</li>
                            <li>Alongside the GUI, a <strong>histogram 📊</strong> also displays the frequencies of each value (between 0-255) for the red 🟥, green 🟩, and blue 🟦 values of each pixel.</li>
                            <li><strong>Model, View 🌁, Controller 🎮 (MVC)</strong> design pattern was followed in addition to the usage of <strong>interfaces, classes, constructors, abstraction,</strong> and other object-oriented design principles.</li>
                            <li>All functionality has been properly tested with JUnit4 testing library 📚.</li>
                            <li>Technologies: Java8, <a href="https://junit.org/junit4/" target="_blank" rel="noreferrer" class="link-black">JUnit4</a>, Swing</li>
                            <li><em>GitHub code is available to view <a href="https://github.com/AnshulShirude/Image-Processor" target="_blank" rel="noreferrer" class="link-black">here</a>.</em></li>
                        </ul>
                    </div>
                </div>

                <div> 
                    <div class="lined">
                        <h2>Web Crawler</h2>
                        <div className="project-details">
                            <h3>Finds the Secret Flags</h3>
                        </div>
                        <h4>April 2023</h4>
                        <ul>
                            <li>Gathers and traverses a fake social network, Fakebook, to collect 5 secret flags 🚩 that have been hidden somewhere on the Fakebook website.</li>
                            <li>Established successful login using a <strong>TCP socket wrapped 🎁 in TLS</strong>.</li>
                            <li>Fully developed and tested a web crawler to locate the secret flags 🚩 on the website.</li>
                            <li>Integrated and tested successful ✅ handling of <strong>HTTP status codes as well as cookie 🍪 management to maintain login state</strong>.</li>
                            <li>Technologies: Python</li>
                            <li><em>Github code is available to view <a href="https://github.com/AnshulShirude/Web-Crawler" target="_blank" rel="noreferrer" class="link-black">here</a>.</em></li>
                        </ul>
                    </div>
                </div>

                <div> 
                    <div class="lined">
                        <div class="header">
                            <h2>Hangman with my Nose</h2>
                        </div>
                        <div class="header">
                            <h3>Multiplayer Skribbl.io Inspired Game</h3>
                        </div>
                        <h4>February 2022 - April 2022</h4>
                        <ul>
                            <li>Built a game for the user to draw the word ✍️ on the screen most accurately using their nose 👃.</li>
                            <li>5-letter words were pulled from a <strong>dictionary 📚</strong> (which we created) and certain letters 🔠 of the word would come up over time.</li>
                            <li>The goal was to get as close as you can to drawing ✍️ what is on the screen.</li>
                            <li>Users had the ability to change the color of their stilus 🎨, pick a different word, reveal another character, use the eraser, and more based upon the <strong>number of fingers 🖐️ the user is holding up</strong>.</li>
                            <li><strong>Imported OpenCV and Sys to handle facial recognition 🙂</strong> and assist in game development 🎮.</li>
                            <li>Technologies: Python, Sys Module, <a href="https://opencv.org/" target="_blank" rel="noreferrer" class="link-black">OpenCV</a></li>
                            <li><em>Github code is available to view <a href="https://github.com/kimharr24/facial-recognition-game" target="_blank" rel="noreferrer" class="link-black">here</a>.</em></li>
                        </ul>
                    </div>
                </div>

                <div> 
                    <div class="lined">
                        <h2>Chores4Us</h2>
                        <div className="header">
                            <h3>Task Manager with your Roommates</h3>
                        </div>
                        <div class="header">
                            <h4>September 2021 - December 2021</h4>
                        </div>
                        <ul>
                            <li>A web-app deployed in <strong>ReactJS</strong> for users to assign, add ➕, delete ➖, and mark completed ✅ tasks within roommates.</li>
                            <li>First project that I led in a team of 3 people in college.</li>
                            <li>Started from scratch <strong>including the ideation phase 💡 to full development</strong> of the product.</li>
                            <li>Designed <a href="https://www.figma.com/file/e04Et6yviD8HvrYPI3CI3m/Chores?type=design&node-id=0%3A1&t=XZvoMXXMUivewOHx-1" target="_blank" rel="noreferrer" class="link-black">Figma mockups</a>, followed by the coding 🧑‍💻 in ReactJS with CSS for the styling. <strong>Management of state and effect done via hooks 🪝.</strong></li>
                            <li>Technologies: ReactJS, JavaScript, CSS, HTML, Figma</li>
                            <li><em>Github code is available to view <a href="https://github.com/pranavphadke1/chores4us" target="_blank" rel="noreferrer" class="link-black">here</a>.</em></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
    

export default Projects;