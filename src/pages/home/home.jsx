import React, {useEffect} from 'react';
import CardSlider from "../../components/cards-slider/card-slider.jsx";
import useStore from "../../store/store.js";
import Layout from "../../components/layout/layout.jsx";

const Home = () => {
    const {movies, fetchMovies} = useStore()

    useEffect(() => {
        fetchMovies()
    }, [fetchMovies]);

    return (
        <Layout>
            <CardSlider movies={movies}/>
        </Layout>
    )
};

export default Home;