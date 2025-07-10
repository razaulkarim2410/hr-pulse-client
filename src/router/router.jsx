import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children:[
      {
        index: true,
       Component: Home
      },
      {
        path:'/login',
        Component: Login
      },
      {
        path: '/register',
        Component: Register
      }
    ]
  },
]);