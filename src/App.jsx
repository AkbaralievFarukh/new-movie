import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/home.jsx";
import Movie from "./pages/movie/movie.jsx";
const App = () => {

    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/movie/:id'} element={<Movie/>}/>
        </Routes>
    );
};

export default App;