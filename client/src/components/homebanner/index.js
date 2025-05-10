import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Homebanner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
      <div className="containe mt-3">
         <div className="homebannersection" style={{ width: '100%', overflow: 'hidden' }}>
      <Slider {...settings}>
        
        <div className="item">
          <img src="https://cmsimages.shoppersstop.com/menswear_main_banner_web_d870d357d7/menswear_main_banner_web_d870d357d7.png" alt="banner" className="w-100"/>
        </div>
        <div className="item">
          <img src="https://cmsimages.shoppersstop.com/Watches_web_78177da621/Watches_web_78177da621.png" alt="banner" className="w-100"/>
        </div>
        <div className="item">
          <img src="https://cmsimages.shoppersstop.com/footwear_main_banner_web_5621e1c822/footwear_main_banner_web_5621e1c822.png" alt="banner" className="w-100"/>
        </div>
        <div className="item">
          <img src="https://cmsimages.shoppersstop.com/fragrances_main_banner_web_51d9c88001/fragrances_main_banner_web_51d9c88001.png" alt="banner" className="w-100"/>
        </div>
       
      </Slider>
    </div>
      </div>
  );
};

export default Homebanner;
