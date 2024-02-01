import { createBrowserRouter } from "react-router-dom";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import Users from "./views/Users";
import NotFound from "./views/NotFound";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import DashBoard from "./views/DashBoard";

const router = createBrowserRouter([

  {
    path: "/",
    element: <DefaultLayout/>,
    children:[

      {
        path: "/DashBoard",
        element: <DashBoard/>
      },

      {
        path: "/Users",
        element: <Users/>
      }

    ]
  },


  {
    path: "/",
    element: <GuestLayout/>,
    children:[
      {
        path: "/Login",
        element: <Login/>
      },

      {
        path: "/SignUp",
        element: <SignUp/>
      }
    ]
  },
  
  
  {
    path: "*",
    element: <NotFound/>
  },

])

export default router;