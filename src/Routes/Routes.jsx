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
import AddClass from "../components/Dashboard/Instructors/AddClass";
import MyClass from "../components/Dashboard/Instructors/MyClass";
import ManageClasses from "../components/Dashboard/Admin/ManageClasses";
import ManageUsers from "../components/Dashboard/Admin/ManageUsers";
import Feedback from "../components/Dashboard/Admin/Feedback";
import UpdateClass from "../components/Dashboard/Instructors/updateClass";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
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
       
      ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            // student dashboard
            {
                path:'/dashboard/selectedclasses',
                element:<SelectedClasses></SelectedClasses>
            },
            {
                path:'/dashboard/enrolledclasses',
                element:<MyEnrolledClasses></MyEnrolledClasses>
            },
            {
                path:'/dashboard/payment/:id',
                element:<Payment></Payment>
            },
            {
                path:'/dashboard/paymenthistory',
                element:<PaymentHistory></PaymentHistory>
            }
            // instructors routes
            ,{
                path:'/dashboard/addclass',
                element:<InstructorRoute><AddClass></AddClass></InstructorRoute>
            },
            {
                path:'/dashboard/myclass',
                element:<InstructorRoute><MyClass></MyClass></InstructorRoute>
            },
            {
                path:'/dashboard/updateclass/:id',
                element:<InstructorRoute><UpdateClass></UpdateClass></InstructorRoute>
            }
            // admin dashboard 
            ,
            {
                path:'/dashboard/manageclasses',
                element:<AdminRoute><ManageClasses></ManageClasses></AdminRoute>
            },
            {
                path:'/dashboard/manageusers',
                element:<AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            },
            {
                path:'/dashboard/feedback/:id',
                element:<AdminRoute><Feedback></Feedback></AdminRoute>
            }
        ]
    }
  ]);


  export default router