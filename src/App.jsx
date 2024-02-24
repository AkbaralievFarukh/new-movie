import React, {useEffect} from 'react';
import Header from "./components/header/header.jsx";
import useStore from "./store/store.js";
import CardSlider from "./components/cards-slider/card-slider.jsx";

const App = () => {
    const  {movies, fetchMovies} = useStore()

    useEffect(() => {
        fetchMovies()
    }, [fetchMovies]);
    console.log(movies)
    return (
        <div>
            <Header />
            <CardSlider movies={movies} />
        </div>
    );
};

export default App;