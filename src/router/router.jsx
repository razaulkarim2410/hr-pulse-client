import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import WorkSheet from "../Pages/Dashboard/WorkSheet";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/dashboard/work-sheet',
        Component: WorkSheet
      },
      {
        path: '/dashboard/payment-history',
        Component: PaymentHistory
      },
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/register',
        Component: Register
      }
    ]
  },
]);