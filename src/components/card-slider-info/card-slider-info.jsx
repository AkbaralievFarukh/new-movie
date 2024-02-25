import React from 'react';
import './styles.scss'


const CardSliderInfo = ({movie}) => {
    return (
        movie ? (
            <div className={'container'}>
                <div className={'card-slider-info'}>
                    <h2>{movie.original_title}</h2>
                    <div className={'card-slider-info__imdb'}>
                        <span className={'imdb'}>IMDb</span>
                        <span className={'card-slider-info__imdb__vote'}>{movie.vote_average.toFixed(1)}</span>
                        <span className={'card-slider-info__imdb__vote-count'}>({movie.vote_count})</span>
                    </div>
                    <p className={'card-slider-info__description'}>
                        {movie.overview && movie.overview.length > 200
                            ? `${movie.overview.substring(0, 200)}...`
                            : movie.overview}
                    </p>
                </div>
            </div>
        ) : null
    );
};

export default CardSliderInfo;