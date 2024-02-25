import React, {Fragment} from 'react';
import Header from "../header/header.jsx";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Layout;