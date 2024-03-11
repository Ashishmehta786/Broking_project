import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom';
import App from './App.jsx';
import './index.css';
import { Login } from './ui/Login.jsx';
import Plusplan from './Plans/Plusplan.jsx'
import Proplan from './Plans/Proplan.jsx'
import About from './ui/About.jsx';
import { Signup } from './ui/Signup.jsx';
import { Holdings } from './Data/User/Holdings.jsx';
import { Contact } from './ui/Contactus.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/Login',
    element: <Login />,
  },
  {
    path: '/About',
    element: <About />
  },
  {
    path:'/Signup',
    element:<Signup/>
  },
  {
    path:'/Holdings',
    element:<Holdings/>
  },
  {
    path:'/Plusplan',
    element:<Plusplan/>
  },
  {
    path:'/Proplan',
    element:<Proplan/>
  },
,{
  path:'/Contact',
  element:<Contact/>


}
]);

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>

    <RouterProvider router={router}/>


  </React.StrictMode>
);
