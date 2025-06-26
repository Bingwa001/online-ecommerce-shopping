import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './home/Home.jsx' 
import Blog from "./blog/Blog.jsx";

import 'swiper/css';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// fonts and icons - fixed double dots
import './assets/css/icofont.min.css';
import './assets/css/animate.css';
import './assets/css/style.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/blog",
        element: <Blog />
      }
    ]
  },
]);

ReactDom.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)