import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home";
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";
import Errorpage from "../Components/Errorpages/Errorpage";
import College from "../Components/CoolegeRoutes/College";
import Admission from "../Components/AdmissionForm/Admission";
import Colleges from "../PopularCard/Colleges";
import CollegeDetails from "../PopularCard/CollegeDetails";
import UserProfile from "../Components/UserProfile.jsx/UserProfile";
import MyCollege from "../Components/MyCollege/MyCollege";

  const router=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        errorElement:<Errorpage></Errorpage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
               
            },
            {
              path:'college',
              element:<College></College>
            },
            {
              path: "college/:id",
              element: <CollegeDetails></CollegeDetails>,
              loader: ({ params }) =>
                fetch(`http://localhost:5173/college/${params.id}`),
            },
            {
              path:'admission',
              element:<Admission></Admission>
            },
            {
                path:"register",
                element:<Register></Register>
            },
            {
              path:'all',
              element:<Colleges></Colleges>
            },
            {
                path:"login",
                element:<Login></Login>
            },
            {
              path:'profile',
              element:<UserProfile></UserProfile>
            },
            {
              path:'myCollege',
              element:<MyCollege></MyCollege>
            }
           
            
            
        ]
    }
])
export default router;