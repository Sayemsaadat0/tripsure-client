import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main/Main";
import Home from "../Pages/Home/Home";
import Profile from "../Pages/Profile/Profile";
import Overview from "../Pages/Overview/Overview";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/SignUp/Register";

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
import ErrorPage from "../../LayOut/ErrorPage/ErrorPage";
import FamilyGuideDetails from "../Pages/Home/FamilyGuide/FamilyGuideDetails";
import Flights from "../Pages/More/Flights/Flights";
import RentalCars from "../Pages/More/RentalCars/RentalCars";
import TravelarStories from "../Pages/TravelerStories/TravelStories";
import Stories from "../Pages/TravelerStories/Stories/Stories";
import TravelGuides from "../Pages/TravelGuides/TravelGuides";
import GuideDetails from "../Pages/TravelGuides/GuideDetails/GuideDetails";
import TourDetails from "../Pages/TourDetails/TourDetails";
import TopDestinationDetails from "../Pages/TopDestinationDetails/TopDestinationDetails";
import Favorite from "../Shared/Navbar/Favorite";
import Addresource from "../Pages/DashBoard/Admin/Addresource";
import Addthings from "../Pages/DashBoard/Admin/Addthings";
import Addplaces from "../Pages/DashBoard/Admin/addplaces";
import Addhotels from "../Pages/DashBoard/Admin/Addhotels";
import Addflights from "../Pages/DashBoard/Admin/Addflights";
import AddResturants from "../Pages/DashBoard/Admin/AddResturants";
import Addpackage from "../Pages/DashBoard/Admin/Addpackage";



import SearchResult from "../Pages/SearchResult/SearchResult";
import PrivateRoutes from "./PrivateRoutes";
import NewProfile from "../Pages/Profile/NewProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "knowmore",
        element: <KnowMore />,
      },
      {
        path: 'favorite',
        element: <PrivateRoutes><Favorite /></PrivateRoutes> 
      },
      {
        path: 'profile/:email',
        element: <PrivateRoutes><NewProfile></NewProfile></PrivateRoutes>
      },
      {
        path: "overview",
        element: <Overview></Overview>,
      },
      {
        path: "travelarsstory",
        element: <KnowMore />,
      },
      {
        path: "familyguidedetails",
        element: <FamilyGuideDetails />,
      },
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
        path: "/tourDetails/:id",
        element: <TourDetails></TourDetails>,
      },
      {
        path: "/top-destination-details",
        element: <TopDestinationDetails></TopDestinationDetails>,
      },
      {
        path: "/top-destination-details/:id",
        element: <TopDestinationDetails></TopDestinationDetails>,
      },
      {
        path: "rentalcars",
        element: <RentalCars />,
      },
      {
        path: "travelStory",
        element: <TravelarStories />,
      },
      {
        path: "travelStory/stories",
        element: <Stories />,
      },

      {
        path: "travelGuides",
        element: <TravelGuides />,
      },
      {
        path: "travelGuides/details",
        element: <GuideDetails />,
      },
      {
        path: "/travelerChoose-thingsToDo/:category",
        element: <TravelerChoose></TravelerChoose>,
      },
      {
        path: "searchResult",
        element: <SearchResult />,
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

  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
        {
          path: 'adminhome',
          element: <AdminHome></AdminHome>
        },
      
        {
          path: 'admin/totalview',
          element: <Totallview />
        },
        {
          path: 'manageusers',
          element: <ManageUser></ManageUser>
        },
        {
          path: 'managebookings',
          element: <ManageBookings />
        },
        {
          path: 'managepackage',
          element: <ManagePackage />
        },
        {
          path: 'reviews',
          element: <Reviews />
        },
        {
          path: 'inquires',
          element: <Inquiries />
        },
        {
          path: 'addtour',
          element: <AddTour />
        },
        {
          path: 'addresource',
          element: <Addresource />
        },
        {
          path: 'addthings',
          element: <Addthings />
        },
        {
          path: 'addhotels',
          element: <Addhotels />
        },
        {
          path: 'addplaces',
          element: <Addplaces />
        },
        {
          path: 'addresturants',
          element: <AddResturants />
        },
        {
          path: 'addflights',
          element: <Addflights />
        },
        {
          path: 'addpackages',
          element: <Addpackage />
        },
  ]
  },

]);

export default router;
