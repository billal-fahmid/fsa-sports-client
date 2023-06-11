import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import Login from "../pages/LoginRegistration/Login";
import Registration from "../pages/LoginRegistration/Registration";
import Test from "../pages/Test";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import SelectedClasses from "../components/Dashboard/Student/SelectedClasses";
import MyEnrolledClasses from "../components/Dashboard/Student/MyEnrolledClasses";
import Payment from "../components/Dashboard/Student/Payment";
import PaymentHistory from "../components/Dashboard/Student/PaymentHistory";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/instructors',
            element:<Instructors></Instructors>
        },
        {
            path:'/classes',
            element:<Classes></Classes>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Registration></Registration>
        },
        {
            path:'/test',
            element:<PrivateRoute><Test></Test></PrivateRoute>
        }
      ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            {
                path:'/dashboard/selectedclasses',
                element:<SelectedClasses></SelectedClasses>
            },
            {
                path:'/dashboard/enrolledclasses',
                element:<MyEnrolledClasses></MyEnrolledClasses>
            },
            {
                path:'/dashboard/payment',
                element:<Payment></Payment>
            },
            {
                path:'paymenthistory',
                element:<PaymentHistory></PaymentHistory>
            }
        ]
    }
  ]);


  export default router