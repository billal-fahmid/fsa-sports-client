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
                path:'/dashboard/payment',
                element:<Payment></Payment>
            },
            {
                path:'/dashboard/paymenthistory',
                element:<PaymentHistory></PaymentHistory>
            }
            // instructors routes
            ,{
                path:'/dashboard/addclass',
                element:<AddClass></AddClass>
            },
            {
                path:'/dashboard/myclass',
                element:<MyClass></MyClass>
            },
            {
                path:'/dashboard/updateclass/:id',
                element:<UpdateClass></UpdateClass>
            }
            // admin dashboard 
            ,
            {
                path:'/dashboard/manageclasses',
                element:<ManageClasses></ManageClasses>
            },
            {
                path:'/dashboard/manageusers',
                element:<ManageUsers></ManageUsers>
            },
            {
                path:'/dashboard/feedback/:id',
                element:<Feedback></Feedback>
            }
        ]
    }
  ]);


  export default router