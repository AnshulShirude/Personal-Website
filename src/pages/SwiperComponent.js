import React, { useEffect } from 'react';
import Swiper from 'swiper';

import 'swiper/swiper-bundle.min.css';

const SwiperComponent = () => {
  useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
        autoplay: {
            delay : 3000,
            disableOnInteraction: false,
        },
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    // Destroy the swiper instance when the component is unmounted
    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <img src="/images/anshulPic.jpg" alt="" />
        </div>
        <div className="swiper-slide">
          <img src="/images/anshulPic2.jpg" alt="" />
        </div>
        <div className="swiper-slide">
          <img src="/images/anshulPic3.jpg" alt="" />
        </div>
        <div className="swiper-slide">
          <img src="/images/anshulPic4.jpg" alt="" />
        </div>
      </div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
};

export default SwiperComponent;
