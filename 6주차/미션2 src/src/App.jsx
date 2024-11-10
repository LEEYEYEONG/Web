import './App.css'

import {createBrowserRouter, RouterProvider} from "react-router-dom";

import HomePage from './pages/Home/home.jsx';
import NotFound from './pages/not-found';
import MoviesPage from './pages/Movies/movies.jsx';
import LoginPage from './pages/Login/login.jsx';
import SignupPage from './pages/Login/signup.jsx';
import SearchPage from './pages/Search/search.jsx';

import RootLayout from "./layout/root-layout.jsx";

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
    return <RouterProvider router={router}/>
}

export default App

