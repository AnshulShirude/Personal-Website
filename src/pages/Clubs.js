import idea from '../images/ideaLogo.jpeg'
import eclub from '../images/eclub.jpg'
import disrupt from '../images/disrupt.png'

const Clubs = () => {
    return (
        <div className="outer-container">
            <div className="inner-container">
                <h1>⭐️ Clubs @ Northeastern ⭐️</h1>
                <div>
                    <div class="company">
                        <img src="https://nutamid.org/wp-content/uploads/2021/09/Frame-4-5.png" alt="Logo" class="logo"/>
                    </div>
                    <div class="lined">
                        <h4>December 2021 - April 2023</h4>
                        <ul>
                            <li><a href="https://nutamid.org/" target="_blank" class="link-black">TAMID</a> is a national consulting club which connects undergraduate students with startups within the Israeli economy.</li>
                            <li><strong>Revamped components</strong> using <strong>Tailwind CSS, improved conditional routing, and fixed security leakages</strong> for my first deliverable <a href="https://giftpicker.io/" target="_blank" class="link-black">GiftPicker.</a ></li>
                            <li>Member of the <strong>full-stack team</strong> responsible for conceptualizing and developing a "Secret-Santa" 🎅 style gift exchange 🎁 integrated with <strong>k-means clustering algorithm</strong> to efficiently match users.</li>
                            <li><strong>Taught <a href="https://nutamid.org/tech-consulting/" target="_blank" class="link-black">Tech Consulting Foundations</a></strong> to a group of 18 students, a course for students to learn <strong>HTML, CSS, JS, and React frameworks</strong> before joining <a href="https://nutamid.org/tech-consulting/" target="_blank" class="link-black">Tech Consulting</a>.</li>
                            <li>Completed <strong>data visualization</strong> work using <a href="https://matplotlib.org/" target="_blank" class="link-black">Matplotlib</a> to <strong>generate a responsive map</strong> 🗺️ related to e-scooter 🛵 rider safety.</li>
                            <li>Created an <strong>effective visual analysis</strong> in the form of a chart to provide each scooter rider a score based upon multiple factors with <a href="https://nutamid.org/tech-consulting/" target="_blank" class="link-black">VComm</a>.</li>
                            <li>Worked in <strong> developing the Contact page</strong> for <a href="https://invictuss.vercel.app/" target="_blank" class="link-black">Invictuss</a> and assisted peers ✏️ while serving as a <strong>mentor</strong> within the track.</li>
                            <li><strong>Triggered an API call</strong> to get in-touch with the owners directly from the website.</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div class="company">
                        <img src={idea} alt="Logo" class="logo"/>
                    </div>
                    <div class="lined">
                        <h4>April 2023 - Present</h4>
                        <ul>
                            <li><a href="https://www.northeastern.edu/idea/" target="_blank" class="link-black">IDEA</a> is Northeastern's student-led venture accelerator that fosters the development of entrepreneurs in the Northeastern community through the educational experience of developing a business from concept to launch.</li>
                            <li>Software Development Lead for my venture <strong><a href="https://commently.wixsite.com/commently" target="_blank" class="link-black">Commently</a></strong>, a platform which creates a <strong>visual report based upon analyzing customer ratings and reviews</strong> using Natural Language Processing.</li>
                            <li>Fully ideated and presented to the judges the value proposition, market research, and the affiliate model for the venture.</li>
                            <li>Development for the venture in progress : <strong>Integrated the back-end to the front-end</strong> using React to access the <strong> django API</strong> and also built a <strong>search optimization filter</strong>.</li>
                            <li><em><a href="https://github.com/AnshulShirude/Commently" target="_blank" class="link-black">GitHub</a> code can be made available upon request.</em></li>
                        </ul>
                    </div>
                </div>
                <div> 
                    <div class="company">
                        <img src={eclub} alt="Logo" class="logo2"/>
                    </div>
                    <div class="lined">
                        <h4>January 2023 - April 2023</h4>
                        <ul>
                            <li><a href="https://www.nuentrepreneursclub.com/" target="_blank" class="link-black">Entrepreneur's Club</a> is Northeastern's largest student-led organization on campus with over 2000 active members and more than 30 events each semester across 4 programs.</li>
                            <li>Took part in the <a href="https://www.nuentrepreneursclub.com/hsc" target="_blank" class="link-black">Husky Startup Challenge</a> to develop my venture <strong><a href="https://commently.wixsite.com/commently" target="_blank" class="link-black">Commently</a></strong>, the largest flagship program which provides early stage startups with the knowledge, resources, and mentorship they need to flourish.</li>
                        </ul>
                    </div>
                </div>
                <div> 
                    <div class="company">
                        <img src={disrupt} alt="Logo" class="logo3"/>
                    </div>
                    <div class="lined">
                        <div class="header">
                            <h4>September 2022 - December 2022</h4>
                        </div>
                        <ul>
                            <li><a href="https://www.disruptneu.com/" target="_blank" class="link-black">Disrupt</a> is a community to drive education, advancement and engagement in the space of Financial Technology (Fintech) at Northeastern.</li>
                            <li>Fully developed a venture idea, <strong><a href="https://pitch.com/public/c9393995-caac-48c3-8cbb-935aaf3cdf73" target="_blank" class="link-black">Azura</a></strong>, in relation to investing based upon stock 📈 market trends.</li>
                            <li>Completed <strong> user research, market analysis, SWOT analysis, and developed a revenue model</strong>.</li>
                            <li>Placed <strong>3rd place</strong> 🏆 amongst a cohort of 15+ teams.</li>
                        </ul>
                    </div>
                </div>                
            </div>
        </div>
        
    )
}
    

export default Clubs;