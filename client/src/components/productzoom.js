import Slider from "react-slick";
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import {useRef } from 'react';

const ProductZoom =() =>{
    var settings2 = {
            dots: false,
            infinite: false,
            speed: 700,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: false,
            arrows: false,
          };
        
     var settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            fade: false,
            arrows: true
          };
    
      const goto = (index) => {
            
            zoomSlider.current.slickGoTo(index);
            zoomSliderBig.current.slickGoTo(index);
          };
        const zoomSliderBig = useRef();
        const zoomSlider = useRef();

    return (
        <>
            <div className="productzoom">
            <div className="productZoom position-relative">
                                        <div className='badge badge-primary'>23% </div>
                                            <Slider {...settings2} className="zoomSliderBig" ref={zoomSliderBig}>
                                            <div className="item" >
                                                    <InnerImageZoom
                                                        zoomType="hover"
                                                        zoomScale={1}
                                                        src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46-768x691.jpg"/>
                                                    </div>
                                            <div className="item" >
                                                    <InnerImageZoom
                                                        zoomType="hover"
                                                        zoomScale={1}
                                                        src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46-768x691.jpg"/>
                                                    </div>
                                            <div className="item" >
                                                    <InnerImageZoom
                                                        zoomType="hover"
                                                        zoomScale={1}
                                                        src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46-768x691.jpg"/>
                                                    </div>
                                            </Slider>
                                        </div>

                                            <Slider {...settings} className='zoomSlider' ref={zoomSlider}>
                                               <div className='item'>
                                               <img
                                                   src={"https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46-768x691.jpg"} alt='img'
                                                   className='w-100' onClick={()=>goto(0)}/>
                                               </div>
                                               <div className='item'>
                                               <img
                                                   src={"https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46-768x691.jpg"} alt='img'
                                                   className='w-100'onClick={()=>goto(1)}/>
                                               </div>
                                               <div className='item'>
                                               <img
                                                   src={"https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46-768x691.jpg"} alt='img'
                                                   className='w-100'onClick={()=>goto(2)}/>
                                               </div>
                                            </Slider>
            </div>
        </>
    )
}
export default ProductZoom ;   