import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";

import Hackathon from '../pages/Hackathon.jsx';
import Speakers from '../pages/Speakers.jsx';  
import App from "../App";
import Agenda from "../pages/Agenda.jsx";
import Gallery from "../pages/Gallery.jsx";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
      path: "/home",
      element: <App/>,
    },
    {
      path: "/speakers",
      element: <Speakers />,
    },
    {
      path: "/agenda",
      element: <Agenda />,
    },
    {
      path:'hackathon',
      element: <Hackathon />

    },
    {
      path:'gallery',
      element: <Gallery />

    },
   
  ]);


  export default router;