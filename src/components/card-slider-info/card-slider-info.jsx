import React from 'react';
import './styles.scss'


const CardSliderInfo = ({movie}) => {
    return (
        movie ? (
            <div className={'container'}>
                <div className={'card-slider-info'}>
                    <h2>{movie.original_title}</h2>
                    <div>
                        <span className={'card-slider-info__imdb'}>IMDb</span>
                    </div>
                </div>
            </div>
        ) : null
    );
};

export default CardSliderInfo;