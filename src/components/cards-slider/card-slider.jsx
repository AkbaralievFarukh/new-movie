import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './styles.scss';
import {Autoplay, FreeMode} from 'swiper/modules';
import {poster_url} from "../../api/config.js";


const CardSlider = ({movies}) => {
    return (
        <>
            <Swiper
                slidesPerView={7.5}
                spaceBetween={30}
                freeMode={true}
                modules={[FreeMode, Autoplay]}
                className="mySwiper"
                autoplay={{
                    delay: 5000, // Delay between slides in milliseconds
                    disableOnInteraction: false, // Continue autoplay even after user interaction
                }}
            >
                {
                    movies.map((movie, i) => (
                        <SwiperSlide key={i}>
                            {
                                <img src={`${poster_url}${movie.poster_path}`} alt=""/>
                            }
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
};

export default CardSlider;