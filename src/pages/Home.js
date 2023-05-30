import React from 'react';
import '../styles.css';
import { Slide, Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import pic1 from '../images/anshulPic.jpg'
import pic2 from '../images/anshulPic2.jpg'
import pic3 from '../images/anshulPic3.jpg'
import pic4 from '../images/anshulPic4.jpg'
import pic5 from '../images/anshulPic5.jpg'
import pic6 from '../images/anshulPic6.jpg'

const Home = () => {
  return (
    <div className="outer-container">
      <div className="inner-container about-container">
        <div className="wave-container">
          <div className="hand-wave">
            👋
          </div>
          <div className="name">
            Hello, I am Anshul Shirude
          </div>
          <div className="description">
            I am a junior at 🐾 <a href="https://www.northeastern.edu/" target="_blank" className="link-gray-description">Northeastern University</a> 🐾 studying <br /> <strong>Computer Science</strong>. My interests lie in data visualization,<br /> machine learning, and full stack development.
          </div>
          <div className="links"> 
            <div className="github-link">
              <a href="https://github.com/AnshulShirude" target="_blank" className="link-black">GitHub</a>
            </div>
            <div className="resume-link">
              <a href="https://drive.google.com/file/d/1LZ5vsNFHDr3sLIbxWMLY_lbwcsP8TcuC/view?usp=sharing" target="_blank" className="link-black">Resume</a>
            </div>
            <div className="linkedin-link">
              <a href="https://www.linkedin.com/in/anshul-shirude/" target="_blank" className="link-black">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="slide-container">
          <Slide autoplay={true} duration={5000}>
            <div className="each-slide-effect">
              <div
                style={{
                  backgroundImage: `url(${pic1})`
                }}
              />
            </div>
            <div className="each-slide-effect">
              <div
                style={{
                  backgroundImage: `url(${pic2})`
                }}
              />
            </div>
            <div className="each-slide-effect">
              <div
                style={{
                  backgroundImage: `url(${pic3})`
                }}
              />
            </div>
            <div className="each-slide-effect">
              <div
                style={{
                  backgroundImage: `url(${pic4})`
                }}
              />
            </div>
            <div className="each-slide-effect">
              <div
                style={{
                  backgroundImage: `url(${pic5})`
                }}
              />
            </div>
            <div className="each-slide-effect">
              <div
                style={{
                  backgroundImage: `url(${pic6})`
                }}
              />
            </div>
          </Slide>
        </div>
          <div className="quote">
            "You miss 100% of the shots you don't take." - Wayne Gretzky
          </div>
      </div>
    </div>
  );
};

export default Home;
