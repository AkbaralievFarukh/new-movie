import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import useStore from "../../store/store.js";
import Layout from "../../components/layout/layout.jsx";
import {backdrop_url} from "../../api/config.js";

const Movie = () => {
    const {id} = useParams()
    const {movie, fetchMovieById} = useStore()

    useEffect(() => {
        fetchMovieById(id); // Pass the 'id' parameter
    }, [id, fetchMovieById]);

    useEffect(() => {
        const updateBackgroundImage = () => {
            document.body.style.backgroundImage = `linear-gradient(to right, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%), url(${
                movie && movie.backdrop_path
                    ? `${backdrop_url}${movie.backdrop_path}`
                    : ''
            })`;
        };

        updateBackgroundImage();

        return () => {
            document.body.style.backgroundImage = ''; // Clear the background image when the component is unmounted
        };
    }, [movie]);
    console.log(movie)
    console.log(id)
    return (
        movie ? (
            <Layout>
                <h1>{movie.original_title}</h1>
            </Layout>
        ) : null
    );
};

export default Movie;