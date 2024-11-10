import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/navbar';
import Sidebar from '../components/Sidebar/sidebar';

const RootLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Sidebar />
        </>
    );
};

export default RootLayout;