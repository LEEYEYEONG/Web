import React from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import App from './App'; // ���� App ����
import Login from './Login'; // Login ������Ʈ

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
