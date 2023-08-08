import {createBrowserRouter,} from "react-router-dom";
import Main from "../../LayOut/Main/Main";
import Home from "../Pages/Home/Home";
import App from "../../App";






const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
              path: "/",
              element: <Home></Home>,
            },
          ],
        }
]);



export default router