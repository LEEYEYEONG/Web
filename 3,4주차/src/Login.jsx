import React from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import App from './App'; // 기존 App 내용
import Login from './Login'; // Login 컴포넌트

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

function RootApp() {
  return <RouterProvider router={router} />;
}

export default RootApp;
