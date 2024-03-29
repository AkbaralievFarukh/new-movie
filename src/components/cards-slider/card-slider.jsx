import React, {useEffect, useState} from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './styles.scss';
import {Autoplay} from 'swiper/modules';
import {backdrop_url, poster_url} from "../../api/config.js";
import CardSliderInfo from "../card-slider-info/card-slider-info.jsx";
import {Link} from "react-router-dom";


const CardSlider = ({movies}) => {
    const [activeMovieIndex, setActiveMovieIndex] = useState(0);
    const handleSlideChange = (swiper) => {
        setActiveMovieIndex(swiper.activeIndex);
    };

    const handleSlideChangeTransitionEnd = (swiper) => {
        if (swiper.autoplay.running) {
            // Update activeMovieIndex only if autoplay is running
            setActiveMovieIndex(swiper.activeIndex);
        }
    };
    useEffect(() => {
        const updateBackgroundImage = () => {
            document.body.style.backgroundImage = `linear-gradient(to right, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%), url(${
                activeMovieIndex < movies.length &&
                movies[activeMovieIndex].backdrop_path
                    ? `${backdrop_url}${movies[activeMovieIndex].backdrop_path}`
                    : ''
            })`;
        };

        updateBackgroundImage();

        return () => {
            document.body.style.backgroundImage = ''; // Очистить фоновое изображение при размонтировании компонента
        };
    }, [activeMovieIndex, movies]);
    return (
        movies ? (
            <div className={'home-page__wrapper'}>
                <CardSliderInfo movie={movies[activeMovieIndex]}/>
                <Swiper
                    breakpoints={
                        {
                            320: {
                                slidesPerView: 3
                            },
                            768: {
                                slidesPerView: 5
                            },
                            1024: {
                                slidesPerView: 7.5
                            }
                        }
                    }
                    modules={[Autoplay]}
                    className="mySwiper"
                    autoplay={{
                        delay: 3000, // Delay between slides in milliseconds
                        disableOnInteraction: false, // Continue autoplay even after user interaction
                    }}
                    onSlideChange={(swiper) => handleSlideChange(swiper)}
                >
                    {
                        movies.map((movie, i) => (
                            <SwiperSlide key={i}>
                                {
                                    <Link to={`/movie/${movie.id}`}>
                                        <img src={`${poster_url}${movie.poster_path}`} alt={movie.original_title}/>
                                    </Link>
                                }
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        ) : null
    );
};

export default CardSlider;