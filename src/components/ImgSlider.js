import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImgSlider = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    let sliderImg = [
        "/images/slider-img1.jpg",
        "/images/slider-img2.jpg",
        "/images/slider-img3.jpg",
        "/images/slider-img4.webp",
        "/images/slider-img5.jpg",
        "/images/slider-img6.jpg",
        "/images/slider-img7.jpg",
        "/images/slider-img8.jpg",
        "/images/slider-img9.jpg",
        "/images/slider-img10.jpg",
    ]
    return (
        <>
            <Slider {...settings} className="imgSlider">
                {sliderImg.map((item, index) => {
                    return (
                        <div key={index} className="slideWrapper">
                            <a>
                                <img src={item} alt="" />
                            </a>
                        </div>
                    )
                })}
            </Slider>
        </>
    );
};

export default ImgSlider;