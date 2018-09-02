import React from 'react';
import Slider from 'react-slick';

const HomepageSlider = () => {
  const settings = {
    dots: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    arrows: false
  };

  return(
    <div>
      <Slider {...settings}>
        <div className="img-wrapper">
         <img className="splash-image" src="https://static.pexels.com/photos/154147/pexels-photo-154147.jpeg"/>
        </div>
        <div className="img-wrapper">
          <img className="splash-image splash-image-2" src="https://images.pexels.com/photos/433452/pexels-photo-433452.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"/>
        </div>
        <div className="img-wrapper">
          <img className="splash-image splash-image-3" src="https://static.pexels.com/photos/139976/pexels-photo-139976.jpeg"/>
        </div>
      </Slider>
    </div>
  );
};

export default HomepageSlider;
