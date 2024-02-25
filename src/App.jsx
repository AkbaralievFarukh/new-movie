import React, {useEffect} from 'react';
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/home.jsx";
import Movie from "./pages/movie/movie.jsx";
import Layout from "./components/layout/layout.jsx";

const App = () => {

    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/movie/:id'} element={<Movie/>}/>
            </Route>
        </Routes>
    );
};

export default App;