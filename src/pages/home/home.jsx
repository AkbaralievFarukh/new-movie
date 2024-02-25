import React, {useEffect} from 'react';
import CardSlider from "../../components/cards-slider/card-slider.jsx";
import useStore from "../../store/store.js";

const Home = () => {
    const {movies, fetchMovies} = useStore()

    useEffect(() => {
        fetchMovies()
    }, [fetchMovies]);

    return <CardSlider movies={movies}/>
};

export default Home;