import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import useStore from "../../store/store.js";
import {backdrop_url, poster_url} from "../../api/config.js";
import './styles.scss'
import YoutubeButton from "../../components/youtube-button/youtube-button.jsx";

const Movie = () => {
    const {id} = useParams()
    const {movie, fetchMovieById, isLoading, clearMovie, movieTrailers, fetchmovieTrailers} = useStore()

    useEffect(() => {
        fetchMovieById(id); // Pass the 'id' parameter
        fetchmovieTrailers(id)
        return () => {
            clearMovie(); // Вызывается при размонтировании компонента для очистки объекта
        };
    }, [id, fetchMovieById, fetchmovieTrailers, clearMovie]);

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
    console.log(movie)
    console.log(id)
    const trailer = movieTrailers.find(item => item.type === "Trailer");
    console.log(trailer)

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
                        </div>
                    </div>
                </div>
            ) : null
        )
    );
};

export default Movie;