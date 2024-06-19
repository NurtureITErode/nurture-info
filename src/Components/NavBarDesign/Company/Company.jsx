import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import './Company.css';
import Logos from './Companylogos.json';
import Logos2 from './Companylogos2.json';
import Logos3 from './Companylogos3.json';

function Company() {
  const [logos, setLogos] = useState(Logos);
  const [logos2, setLogos2] = useState(Logos2);
  const [logos3, setLogos3] = useState(Logos3);
  const [slidesToShow, setSlidesToShow] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 968) {
        setSlidesToShow(5);
      }
      else if (window.innerWidth >= 768) {
        setSlidesToShow(4);
      } else if (window.innerWidth >= 480) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(2);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true
  };
  const settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true
  };
  return (
    <div>
      <h1>Coresal</h1>
      <div className="slider-container">
        <Slider {...settings} className='Sliderow'>
          {logos.map((e, index) => (
            <div key={index} className='slideDesign'>
              <img src={e.src} height={120} alt={`Logo ${index}`} />
            </div>
          ))}
        </Slider>
        <Slider {...settings2} className='Sliderow'>
          {logos2.map((e, index) => (
            <div key={index} className='slideDesign'>
              <img src={e.src} height={120} alt={`Logo ${index}`} />
            </div>
          ))}
        </Slider>
        <Slider {...settings} className='Sliderow'>
          {logos3.map((e, index) => (
            <div key={index} className='slideDesign'>
              <img src={e.src} height={120} alt={`Logo ${index}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Company;
