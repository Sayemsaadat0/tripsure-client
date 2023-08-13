import {createBrowserRouter,} from "react-router-dom";
import Main from "../../LayOut/Main/Main";
import Home from "../Pages/Home/Home";
import KnowMore from "../Pages/AboutUs/KnowMore";






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
            path: '/knowmore',
            element: <KnowMore/>
            
          }
          ],
        }
]);


export default router