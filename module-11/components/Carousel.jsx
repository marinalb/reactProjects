import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const images = [
    '../assets/ice1.jpg',
    '../assets/ice5.jpg',
    '../assets/ice2.jpg'
  ];

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img src={src} alt={`Slide ${index + 1}`} style={{ width: '100%' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
