import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SliderMovie = (props) => {
    const movies = useSelector(state => state.movie[props.type]);
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1030,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768, // Adjust this breakpoint as needed
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 430, // Adjust this breakpoint as needed
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="movieSlider">
            <h4>{props.title}</h4>
            {movies && movies.length &&
                <Slider {...settings} className="movieWrapper">
                    {movies.map((movie) => (
                        <div className="movieCard" key={movie.id}>
                            <div  className="movieDetails">
                                {movie.id}
                                <Link to={`/details/${movie.id}`}>
                                    <img src={movie.data.cardImg} alt={movie.data.title} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </Slider>
            }
        </div>
    );
};

export default SliderMovie;