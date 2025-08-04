import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './../components/Header';

const PublicLayout = () => {
    return (
       <>
        <Header />
        <div>
            <Outlet />
        </div>
        </>
    );
}

export default PublicLayout;