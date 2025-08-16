import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import WorkSheet from "../Pages/Dashboard/WorkSheet";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory";
import EmployeeList from "../Pages/Dashboard/EmployeeList";
import PrivateRoute from "../components/routes/PrivateRoute";
import DashboardLayouts from "../Layouts/DashboardLayouts";
import EmployeeRoute from "../components/routes/EmployeeRoute";
import HRRoute from "../components/routes/HRRoute";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import EmployeeDetails from "../Pages/Dashboard/EmployeeDetails";
import ProgressPage from "../Pages/Dashboard/ProgressPage";
import AllEmployeeList from "../Pages/Dashboard/AllEmployeeList";
import AdminRoute from "../components/routes/AdminRoute";
import Payroll from "../Pages/Dashboard/Payroll";

import ContactUs from "../Pages/Home/ContactUs";
import AdminMessages from "../Pages/Dashboard/AdminMessages";
import EmployeePayment from "../Pages/Dashboard/EmployeePayment";
import About from "../shared/About";
import Contact from "../shared/Contact";
import TermsOfUse from "../shared/TermsOfUse";
import PrivacyPolicy from "../shared/PrivacyPolicy";
import CookiePolicy from "../shared/CookiePolicy";
import EmployeesDetails from "../Pages/Home/HowItWorks/EmployeesDetails";
import HRDetails from "../Pages/Home/HowItWorks/HRDetails";
import AdminDetails from "../Pages/Home/HowItWorks/AdminDetails";


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
        path: '/login',
        Component: Login
      },
      {
        path: '/register',
        Component: Register
      },
      {
        path: '/contact-us',
        Component: ContactUs
      },
      {
        path: "/admin/messages",
        element: <AdminMessages></AdminMessages>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/contact',
        element: <Contact></Contact>
      },
      {
        path:'/terms',
        element:<TermsOfUse></TermsOfUse>
      },
      {
        path: '/privacy',
        element:<PrivacyPolicy></PrivacyPolicy>
      },
      {
        path:'/cookie',
        element: <CookiePolicy></CookiePolicy>
      },
      {
        path:"/employees",
        element:<EmployeesDetails></EmployeesDetails>
      },
      {
        path:"/hr",
        element:<HRDetails></HRDetails>
      },
      {
        path:"/admin",
        element:<AdminDetails></AdminDetails>
      }
      
    ]
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><DashboardLayouts /></PrivateRoute>,
    children: [
      {
        index: true, 
        element: <DashboardHome />
      },

      // ✅ Employee-only
      {
        path: "work-sheet",
        element: <EmployeeRoute><WorkSheet /></EmployeeRoute>
      },
      {
        path: "payment-history",
        element: <EmployeeRoute><PaymentHistory /></EmployeeRoute>
      },

      // ✅ HR-only
      {
        path: "employee-list",
        element: <HRRoute><EmployeeList /></HRRoute>
      },
      {
        path: "employee-salary-history/:slug",
        element: <HRRoute><EmployeeDetails /></HRRoute>
      },
      {
        path: "progress",
        element: <HRRoute><ProgressPage /></HRRoute>
      },

      // ✅ Admin-only
      {
        path: "all-employee-list",
        element: <AdminRoute><AllEmployeeList /></AdminRoute>
      },
      {
        path: "payroll",
        element: <AdminRoute><Payroll /></AdminRoute>
      },
      {
        path: "/dashboard/payment/:id",
        element: <EmployeePayment />,
      }

    ]
  }
]);