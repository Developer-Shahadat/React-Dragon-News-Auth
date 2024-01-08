import {createBrowserRouter} from "react-router-dom";
import Root from "../Layout/Root";
import HomePage from "../Pages/Home/HomePage";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import NewsDetails from "../Pages/Home/NewsDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children : [ 
        {
            path : '/',
            element : <HomePage></HomePage>,
            loader : () => fetch('/public/news.json')
        },
        {
          path : '/news/:id',
          element : <PrivateRoute>  <NewsDetails></NewsDetails> </PrivateRoute>,
          
        },
        {
           path: '/login',
           element:<LogIn></LogIn> 
        },
        {
           path: '/register',
           element:<Register></Register>
        },
      ]
    },
  ]);

  export default router