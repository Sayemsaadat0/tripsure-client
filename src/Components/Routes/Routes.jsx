import { createBrowserRouter, } from "react-router-dom";
import Main from "../../LayOut/Main/Main";
import Home from "../Pages/Home/Home";
import App from "../../App";
import Register from "../Pages/Log&&Reg/Register";
import Login from "../Pages/Log&&Reg/Login";






const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      {path: '/register', element: <Register></Register>},
      {path: '/login', element: <Login></Login>}
    ],
  }
]);


export default router