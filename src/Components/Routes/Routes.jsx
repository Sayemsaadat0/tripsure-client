import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main/Main";
import Home from "../Pages/Home/Home";

import AboutUsDetails from "../Pages/Home/AboutUs/AboutUsDetails";
import Overview from "../Pages/Overview/Overview";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/SignUp/Register";
import AddReview from "../Pages/Community/AddReview/AddReview";
import TravelerChoose from "../Pages/TravelerChoose/TravelerChoose";
import ErrorPage from "../../LayOut/ErrorPage/ErrorPage";
import FamilyGuideDetails from "../Pages/Home/FamilyGuide/FamilyGuideDetails";
import Flights from "../Pages/More/Flights/Flights";
import RentalCars from "../Pages/More/RentalCars/RentalCars";
import TravelarStories from "../Pages/TravelerStories/TravelStories";
import Stories from "../Pages/TravelerStories/Stories/Stories";
import TravelGuides from "../Pages/TravelGuides/TravelGuides";
import TourDetails from "../Pages/TourDetails/TourDetails";
import TopDestinationDetails from "../Pages/TopDestinationDetails/TopDestinationDetails";
import Favorite from "../Shared/Navbar/Favorite";

// dashboard ad resources
import Addresource from "../Pages/DashBoard/Admin/Addresource";

import Addplaces from "../Pages/DashBoard/Admin/addplaces";
import Addhotels from "../Pages/DashBoard/Admin/Addhotels";
import Addflights from "../Pages/DashBoard/Admin/Addflights";
import AddResturants from "../Pages/DashBoard/Admin/AddResturants";
import Addguide from "../Pages/DashBoard/Admin/Addguide";
import UserGuide from "../Pages/DashBoard/User/UserGuide";
import Addpackage from "../Pages/DashBoard/Admin/Addpackage";
import AdminHome from "../Pages/DashBoard/Admin/AdminHome";
import ManageUser from "../Pages/DashBoard/Admin/ManageUser";
import ManageBookings from "../Pages/DashBoard/Admin/ManageBookings";
import ManagePackage from "../Pages/DashBoard/Admin/ManagePackage";
import Dashboard from "../../LayOut/Dashboard";
import DoThingsAttractionReviews from "../Pages/DoThingsAttractionReviews/DoThingsAttractionReviews";
import StayThingsAttractionReviews from "../Pages/StayThingsAttractionReviews/StayThingsAttractionReviews";
import RestaurantAttractionReview from "../Pages/RestaurantAttractionReview/RestaurantAttractionReview";
import PackageDetails from "../Pages/Home/Packages/PackageDetails";
import TravelDealsDetails from "../Pages/Home/TravelDeals/TravelDealsDetails";
import FamilyGuideSingleCardDetails from "../Pages/Home/FamilyGuide/FamilyGuideSingleCardDetails";
import ContactDetails from "../Pages/Payment/ContactDetails/ContactDetails";
import ActivityDetails from "../Pages/Payment/ActivityDetails/ActivityDetails";
import PrivateRoutes from "./PrivateRoutes";
import NewProfile from "../Pages/Profile/NewProfile";
import PostStory from "../Pages/Community/PostAStory/PostStory";
// search
import SearchResult from "../Pages/SearchResult/SearchResult";
import SearchCountry from "../Pages/SearchResult/searchCountryPage/SearchCountry";
import SearchHotel from "../Pages/SearchResult/searchHotelPage/SearchHotel";
import SearchDetails from "../Pages/SearchResult/SearchDetails";
// payment
import PaymentDetails from "../Pages/Payment/PaymentDetails/PaymentDetails";
import AddRentalCars from "../Pages/DashBoard/Admin/Overview/AddRentalCars";
import PaymentSuccessPage from "../Pages/Payment/PaymentSuccessPage/PaymentSuccessPage";
import PaymentFailPage from "../Pages/Payment/PaymentFailPage/PaymentFailPage";
import MedicalCard from "../Pages/Home/Medical/Medical";
import MadicalCard from "../Pages/Home/Medical/MadicalCard";
import MadicalDetails from "../Pages/Home/Medical/MadicalDetails";



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
        path : "aboutusdetails",
        element : <AboutUsDetails></AboutUsDetails>
      },
      {
        path: "/FamilyGuideSingleCardDetails/:id",
        element: <FamilyGuideSingleCardDetails></FamilyGuideSingleCardDetails>,
      },
      {
        path: "/packageDetails/:id",
        element: <PackageDetails></PackageDetails>,
      },
      {
        path: "favorite",
        element: (
          <PrivateRoutes>
            <Favorite />
          </PrivateRoutes>
        ),
      },
      {
        path: "profile/:email",
        element: (
          <PrivateRoutes>
            <NewProfile></NewProfile>
          </PrivateRoutes>
        ),
      },
      {
        path: "overview",
        element: <Overview></Overview>,
      },
      {
        path: "/TravelDeals/:id",
        element: <TravelDealsDetails></TravelDealsDetails>,
      },
      {
        path: "familyguidedetails",
        element: <FamilyGuideDetails />,
      },
      {
        path: "postastory",
        element: <PostStory></PostStory>,
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
        path: "/dothings-attraction-reviews/:id",
        element: <DoThingsAttractionReviews></DoThingsAttractionReviews>,
      },
      {
        path: "/staythinngs-attraction-reviews/:id",
        element: <StayThingsAttractionReviews></StayThingsAttractionReviews>,
      },
      {
        path: "/restaurant-attraction-reviews/:id",
        element: <RestaurantAttractionReview></RestaurantAttractionReview>,
      },
      {
        path: "/top-destination-details/:id",
        element: <TopDestinationDetails></TopDestinationDetails>,
      },
      {
        path: "/top-destination-details",
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
        path: "travelStory/:id",
        element: <Stories />,
      },

      {
        path: "travelGuides",
        element: <PrivateRoutes><TravelGuides /></PrivateRoutes>
      },
      {
        path: "/travelerChoose-thingsToDo/:category",
        element: <TravelerChoose></TravelerChoose>,
      },
      {
        path: "searchResult",
        element: <SearchResult />,
      },
      {
        path: "searchCountry/:country",
        element: <SearchCountry />,
      },
      {
        path: "searchHotel/:hotel",
        element: <SearchHotel />,
      },
      {
        path: "searchCardDetails/:id",
        element: <SearchDetails />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_BACKEND_API}/searchResult/${params.id}`),
      },
      {
        path: "contactDetails",
        element: <ContactDetails />,
      },
      {
        path: "activityDetails",
        element: <ActivityDetails />,
      },
      {
        path: "/paymentDetails",
        element: <PaymentDetails></PaymentDetails>
      },
      {
        path: "/payment/success/:id",
        element: <PaymentSuccessPage></PaymentSuccessPage>
      },
      {
        path: "/payment/fail/:id",
        element: <PaymentFailPage></PaymentFailPage>
      },
      {
        path: "madicalCard",
        element: <MadicalCard/>
      },
      {
        path: "madicalDetails",
        element: <MadicalDetails/>
      }
     
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
        path: "adminhome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "manageusers",
        element: <ManageUser></ManageUser>,
      },
      {
        path: "managebookings",
        element: <ManageBookings />,
      },
      {
        path: "managepackage",
        element: <ManagePackage />,
      },
      {
        path: "addresource",
        element: <Addresource />,
      },
      {
        path: "addhotels",
        element: <Addhotels />,
      },
      {
        path: "addplaces",
        element: <Addplaces />,
      },
      {
        path: "addresturants",
        element: <AddResturants />,
      },
      {
        path: "addguide",
        element: <Addguide />,
      },
      {
        path: "usergueide",
        element: <UserGuide />,
      },
      
      {
        path: "addflights",
        element: <Addflights />,
      },
      {
        path: "addpackages",
        element: <Addpackage />,
      },
      {
        path: 'addrentalcars',
        element: <AddRentalCars/>
      }
    ],
  },
]);

export default router;
