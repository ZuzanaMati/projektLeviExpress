import React from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Home } from '../Home';
import Reservation from '../Reservation/Reservation';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/reservation",
    element: <Reservation />
  }
])

export const App = () => (
  <>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </>
);
