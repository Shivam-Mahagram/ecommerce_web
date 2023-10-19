import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImgCarousel = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,       // Enable automatic sliding
        autoplaySpeed: 2000,
    };

    return (
        <Slider {...settings}>
            {images && images?.map((image, index) => (
                <div key={index}>
                    <img src={image} alt='' width='70%' />
                </div>
            ))}
        </Slider>
    );
}

export default ImgCarousel