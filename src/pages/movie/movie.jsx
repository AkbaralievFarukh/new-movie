import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import useStore from "../../store/store.js";
import {backdrop_url, poster_url} from "../../api/config.js";
import './styles.scss'
import YoutubeButton from "../../components/youtube-button/youtube-button.jsx";

const Movie = () => {
    const {id} = useParams()
    const {movie, fetchMovieById, isLoading, clearMovie, movieTrailers, fetchmovieTrailers, credits, fetchCredits} = useStore()
    useEffect(() => {
        fetchMovieById(id); // Pass the 'id' parameter
        fetchmovieTrailers(id)
        fetchCredits(id)

        return () => {
            clearMovie(); // Вызывается при размонтировании компонента для очистки объекта
        };
    }, [id, fetchMovieById, fetchmovieTrailers, clearMovie, fetchCredits]);

    useEffect(() => {
        const updateBackgroundImage = () => {
            document.body.style.backgroundImage = `linear-gradient(to left, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%), url(${
                movie && movie.backdrop_path
                    ? `${backdrop_url}${movie.backdrop_path}`
                    : ''
            })`;
        };

        updateBackgroundImage();

        return () => {
                document.body.style.backgroundImage = '';
        };
    }, [movie]);
    const trailer = movieTrailers.find(item => item.type === "Trailer");

    return (
        isLoading ? <div>Loading...</div> : (
            movie ? (
                <div className={'container'}>
                    <div className={'movie'}>
                        <img className={'movie__poster'} src={poster_url + movie.poster_path} alt={movie.original_title} />
                        <div className={'movie__info'}>
                            <h2 className={'movie__info__title'}>{movie.original_title}</h2>
                            <p className={'movie__info__description'}>{movie.overview}</p>
                            <div className={'movie__info__imdb'}>
                                <span className={'imdb'}>IMDb</span>
                                <span>{movie.vote_average}</span>
                            </div>
                            <YoutubeButton videoKey={trailer && trailer.key} />
                            {/*<div className={'movie__info__cast'}>*/}
                            {/*    {*/}
                            {/*        credits && credits && credits.length > 0*/}
                            {/*         ? credits.filter((item) => item.profile_path !== null).map((item, index) => {*/}
                            {/*                return (*/}
                            {/*                    <div className={'movie__info__cast__item'} key={index}>*/}
                            {/*                        <img className={'movie__info__cast__item__img'} src={poster_url + item.profile_path} alt={item.name} />*/}
                            {/*                        <div className={'movie__info__cast__item__info'}>*/}
                            {/*                            <h3 className={'movie__info__cast__item__info__name'}>{item.name}</h3>*/}
                            {/*                            <p className={'movie__info__cast__item__info__character'}>{item.character}</p>*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                )*/}
                            {/*            })*/}
                            {/*            : null*/}
                            {/*    }*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            ) : null
        )
    );
};

export default Movie;