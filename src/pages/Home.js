import React, { useEffect, useRef } from 'react';
import '../styles.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import pic1 from '../images/anshulPic.jpg';
import pic2 from '../images/anshulPic2.jpg';
import pic3 from '../images/anshulPic3.jpg';
import pic4 from '../images/anshulPic4.jpg';
import pic5 from '../images/anshulPic5.jpg';
import pic6 from '../images/anshulPic6.jpg';

const Home = () => {
  const descriptionRef = useRef(null);
  const nameRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const descriptionElement = descriptionRef.current;
      const nameElement = nameRef.current;

      if (descriptionElement && nameElement) {
        const descriptionContainerWidth = descriptionElement.offsetWidth;
        const nameContainerWidth = nameElement.offsetWidth;
        const nameTextWidth = nameElement.scrollWidth;
        const nameThreshold = nameContainerWidth * 0.4;

        if (nameTextWidth < 525 && nameThreshold < 200) {
          console.log(nameTextWidth)
          console.log(nameThreshold)
          nameElement.style.maxWidth = '70%'; // 70% for smaller window screens
        } else {
          console.log("else branch")
          console.log(nameTextWidth)
          console.log(nameThreshold)
          nameElement.style.maxWidth = '65%'; // 65% for larger window screens
        }

        const descriptionTextWidth = descriptionElement.scrollWidth;
        const descriptionThreshold = descriptionContainerWidth * 0.4;

        if (descriptionTextWidth < 450 && descriptionThreshold < 200) {
          descriptionElement.style.maxWidth = '85%'; // 85% for mobile
        } else {
          descriptionElement.style.maxWidth = '50%'; // 50% for desktop
        }
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="outer-container">
      <div className="inner-container about-container">
        <div className="wave-container">
          <div className="hand-wave">
            👋
          </div>
          <div className="name" ref={nameRef}>
            Hello, I am Anshul Shirude
          </div>
          <div className="description" ref={descriptionRef}>
            I am a junior at 🐾 <a href="https://www.northeastern.edu/" target="_blank" className="link-gray-description">Northeastern University</a> 🐾 studying <strong>Computer Science</strong>. My interests lie in data visualization, machine learning, and full stack development.
          </div>
          <div className="links"> 
            <div className="github-link">
              <a href="https://github.com/AnshulShirude" target="_blank" className="link-black">GitHub</a>
            </div>
            <div className="resume-link">
              <a href="https://drive.google.com/file/d/13xSg6J9xHYv1IOEHFzDyix4jvTo6oX66/view?usp=sharing" target="_blank" className="link-black">Resume</a>
            </div>
            <div className="linkedin-link">
              <a href="https://www.linkedin.com/in/anshul-shirude/" target="_blank" className="link-black">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="slide-container">
          <Slide autoplay={true} duration={3000}>
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
