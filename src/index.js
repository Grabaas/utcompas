import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)



/* import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login'
import NotFoundPages from './Pages/NotFoundPages';
import Profile from './Pages/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
    errorElement:<NotFoundPages/>
  },
  {
    path: "/Login",
    element:<Login/>,
  },
  {
    path: "/nabVar",
    element:<nabVar/>,
  },
  {
    path: "/Profile",
    element:<Profile/>,
    children:[
      {
        path:'profile/:profileId',
        element: <Home/>
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

 */