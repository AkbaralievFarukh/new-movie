import React, {useEffect} from 'react';
import {HashRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/home.jsx";
import Movie from "./pages/movie/movie.jsx";
const App = () => {

    return (
        <HashRouter>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/movie/:id'} element={<Movie/>}/>
            </Routes>
        </HashRouter>
    );
};

export default App;