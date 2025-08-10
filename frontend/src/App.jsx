import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router';
import HomePage from './components/HomePage';
import Signup from './components/Signup';
import SignIn from './components/SignIn';
import { Toaster } from 'sonner';
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/signin',
    element: <SignIn />
  }
]);
const App = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
     <RouterProvider router={router} />
     <Toaster />
    </div>
  );
};

export default App;