import React from 'react';
import '../styles.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import pic1 from '../images/anshulPic.jpg'
import pic2 from '../images/anshulPic2.jpg'
import pic3 from '../images/anshulPic3.jpg'
import pic4 from '../images/anshulPic4.jpg'

const Home = () => {
  return (
    <div className="slide-container">
      <Slide autoplay={false}>
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
      </Slide>
    </div>
  );
};

export default Home;
