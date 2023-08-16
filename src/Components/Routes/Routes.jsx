import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main/Main";
import Home from "../Pages/Home/Home";
import App from "../../App";
import Register from "../Pages/Log&&Reg/Register";
import Login from "../Pages/Log&&Reg/Login";
import KnowMore from "../Pages/AboutUs/KnowMore";
import AddReview from "../Pages/Community/AddReview/AddReview";
import PostAStory from "../Pages/Community/PostAStory/PostAStory";
import Flights from "../Pages/More/Flights/Flights";
import RentalCars from "../Pages/More/RentalCars/RentalCars";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "knowmore",
        element: <KnowMore />,
      },
      // {path: 'favorite', element: <Discover></Discover>},
      /* {
        path: 'travelarsstory',
        element: <KnowMore />
      } */
      {
        path: "postastory",
        element: <PostAStory />,
      },
      {
        path: "addareview",
        element: <AddReview />,
      },
      {
        path: "flights",
        element: <Flights />,
      },
      {
        path: "rentalCars",
        element: <RentalCars/>
      },
    ],
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "register",
    element: <Register></Register>,
  },
]);

export default router;
