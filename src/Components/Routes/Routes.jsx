import { createBrowserRouter, } from "react-router-dom";
import Main from "../../LayOut/Main/Main";
import Home from "../Pages/Home/Home";
import App from "../../App";
import Register from "../Pages/Log&&Reg/Register";
import Login from "../Pages/Log&&Reg/Login";
import KnowMore from "../Pages/AboutUs/KnowMore";
import Discover from "../Discover";
import Profile from "../Pages/Profile/Profile";
import Overview from "../Pages/Overview/Overview";






const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: 'knowmore',
        element: <KnowMore />
      },
      {
        path: 'profile/:name',
        element: <Profile></Profile>
      },
      {
        path: 'overview',
        element: <Overview></Overview>
      },
      { path: 'favorite', element: <Discover></Discover> }
      /* {
        path: 'travelarsstory',
        element: <KnowMore />
      } */
      /* {
        path: 'postastory',
        element: <KnowMore />
      }, */
      /* {
        path: 'addareview',
        element: <KnowMore />
      }, */
    ],
  },
  {
    path: 'login', element: <Login></Login>
  },
  {
    path: 'register',
    element: <Register></Register>
  },

]);


export default router