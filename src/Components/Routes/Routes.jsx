import { createBrowserRouter, } from "react-router-dom";
import Main from "../../LayOut/Main/Main";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Log&&Reg/Register";
import Login from "../Pages/Log&&Reg/Login";
import KnowMore from "../Pages/AboutUs/KnowMore";
import Dashboard from "../../LayOut/Dashboard";
import Totallview from "../Pages/DashBoard/Admin/Totallview";
import AdminHome from "../Pages/DashBoard/Admin/AdminHome";
import ManageUser from "../Pages/DashBoard/Admin/ManageUser";
import ManageBookings from "../Pages/DashBoard/Admin/ManageBookings";
import ManagePackage from "../Pages/DashBoard/Admin/ManagePackage";
import Reviews from "../Pages/DashBoard/Admin/Reviews";
import Inquiries from "../Pages/DashBoard/Admin/Inquiries";
import AddTour from "../Pages/DashBoard/Admin/AddTour";
import AddReview from "../Pages/Community/AddReview/AddReview";
import PostAStory from "../Pages/Community/PostAStory/PostAStory";
import TravelerChoose from "../Pages/TravelerChoose/TravelerChoose";
import TravelarStories from "../Pages/TravelerStories/TravelStories";
import Stories from "../Pages/TravelerStories/Stories/Stories";
import TravelGuides from "../Pages/TravelGuides/TravelGuides";
import GuideDetails from "../Pages/TravelGuides/GuideDetails/GuideDetails";




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
        path: 'postastory',
        element: <PostAStory/>
      }, 
      {
        path: 'addareview',
        element: <AddReview/>
      }, 
      {
        path: 'travelStory',
        element: <TravelarStories/>
      }, 
      {
        path: 'travelStory/stories',
        element: <Stories/>
      }, 
      {
        path: 'travelGuides',
        element: <TravelGuides/>
      }, 
      {
        path: 'travelGuides/details',
        element: <GuideDetails/>
      }, 
    ],
  },
  {
    path: 'login', element: <Login></Login>
  },
  {
    path: 'register',
    element: <Register></Register>
  },
  {
    path: '/travelerChoose-thingsToDo/:category',
    element:<TravelerChoose></TravelerChoose>
  }

]);


export default router