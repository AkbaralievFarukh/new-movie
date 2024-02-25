import React, {Fragment} from 'react';
import Header from "../header/header.jsx";

const Layout = ({ children }) => {
    return (
        <Fragment>
            <Header />
            <main>
                {children}
            </main>
        </Fragment>
    );
};

export default Layout;