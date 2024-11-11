import './App.css'

import {createBrowserRouter, RouterProvider} from "react-router-dom";

import HomePage from './pages/Home/home.jsx';
import NotFound from './pages/not-found';
import MoviesPage from './pages/Movies/movies.jsx';
import LoginPage from './pages/Login/login.jsx';
import SignupPage from './pages/Login/signup.jsx';
import SearchPage from './pages/Search/search.jsx';

import RootLayout from "./layout/root-layout.jsx";

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/navbar.jsx';
import Sidebar from './components/Sidebar/sidebar.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        errorElement: <NotFound/>,
        children: [
            {  
                index: true,
                element: <HomePage/>
            },
            {
                path: 'movies',
                //path: 'movies/:movieId',
                element: <MoviesPage/>
            },
            {
                path: 'login',
                element: <LoginPage/>
            },
            {
                path: 'signup',
                element: <SignupPage />
            },
            {
                path: 'search',
                element: <SearchPage />
            },
        ]
    },

])

function App() {
    const [user, setUser] = useState(null); // 공통 상태로 user 정의

    // 로그아웃 함수
    const logout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        setUser(null);
    };

    return (
        <Router>
            <Navbar user={user} logout={logout} /> {/* user 상태와 logout 함수 전달 */}
            <Routes>
                <Route path="/login" element={<LoginPage setUser={setUser} />} /> {/* setUser 전달 */}
                <Route path="/" element={<HomePage />} />
                <Route path="/movies" element={<MoviesPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/" element={<Sidebar />} />
            </Routes>
        </Router>
    );

    // return <RouterProvider router={router}/>
}

export default App

