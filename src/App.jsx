import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/home.jsx";
import Layout from "./components/layout/layout.jsx";

const App = () => {

    return (
        <Routes>
            <Route path={'/'} element={<Layout><Home/></Layout>} />
        </Routes>
    );
};

export default App;