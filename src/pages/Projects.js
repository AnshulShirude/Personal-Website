const Projects = () => {
    return (
        <div className="outer-container">
            <div className="inner-container">
                <h1>Projects</h1>
                <div> 
                    <h2>Chores4Us</h2>
                    <h3>Assign and take on tasks with your roommates</h3>
                    <h4>September 2021 - December 2021</h4>
                    <ul>
                        <li>A web-app deployed in React for users to assign, add, delete, and mark completed tasks within roommates.</li>
                        <li>First project that I led in a team of 3 people in college.</li>
                        <li>Started from scratch including the ideation phase to full development of the product.</li>
                        <li>Designed Figma mockups, followed by the coding in React JS with CSS for the styling. Management of state and effect done via hooks.</li>
                        <li>Code is available to view here.</li>
                        <li>Technologies: ReactJS, JavaScript, CSS, HTML, Figma</li>
                    </ul>
                </div>

                <div> 
                    <h2>Hangman with my Nose</h2>
                    <h3>Multiplayer skribbl.io inspired game</h3>
                    <h4>February 2022 - April 2022</h4>
                    <ul>
                        <li>Built a game for the user to most accurately draw the word on the screen most accurately using their nose.</li>
                        <li>5-letter words were pulled from a dictionary (which we created) and certain letters of the word would come up over time.</li>
                        <li>The goal was to get as close as you can to drawing what is on the screen.</li>
                        <li>Users had the ability to change the color of their stilus, pick a different word, reveal another character, use the eraser, and more based upon the number of fingers the user is holding up.</li>
                        <li>Imported OpenCV and Sys to handle facial recognition and assist in game development.</li>
                        <li>Code is available to view here.</li>
                        <li>Technologies: Python, Sys Module, OpenCV</li>
                    </ul>
                </div>
            </div>
        </div>
        
    )
}
    

export default Projects;