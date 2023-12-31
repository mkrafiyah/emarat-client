import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import AllProperties from "../Pages/AllProperties/AllProperties";
import DetailPage from "../Shared/DetailPage/DetailPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Dashboard from "../Pages/Dashboard/Dashboard";

import WishLists from "../Pages/WishLists/WishLists";
import Profile from "../Pages/Profile/Profile";
import BoughtList from "../Pages/BoughtList/BoughtList";
import MyReviews from "../Pages/MyReviews/MyReviews";
import WishUpdate from "../Pages/WishUpdate/WishUpdate";
import ManageUsers from "../Pages/ManageUsers/ManageUsers";
import ManageReview from "../Pages/ManageReview/ManageReview";
import AdminProfile from "../Pages/AdminProfile/AdminProfile";
import AgentProfile from "../Pages/AgentProfile/AgentProfile";
import AgentAddedProperties from "../Pages/AgentAdddedProperties/AgentAddedProperties";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/allProperties',
          element: <AllProperties></AllProperties>
        },
        {
          path: '/properties/:id',
          element: <DetailPage></DetailPage>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <SignUp></SignUp>
        }
      ]
    },
    {
      path: '/dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: '/dashboard/wishlist',
          element:  <WishLists></WishLists>
        },
        {
          path: '/dashboard/wishUpdate/:id',
          element: <WishUpdate></WishUpdate>
        },
        {
          path: '/dashboard/profile',
          element: <Profile></Profile>
        },
        {
          path: '/dashboard/bought',
          element: <BoughtList></BoughtList>
        },
        {
          path: '/dashboard/reviews',
          element: <MyReviews></MyReviews>
        },
        //admin routes
        {
          path: '/dashboard/manageUsers',
          element: <ManageUsers></ManageUsers>
        },
        {
          path: '/dashboard/manageReviews',
          element: <ManageReview></ManageReview>
        },
        {
          path: '/dashboard/adminProfile',
          element: <AdminProfile></AdminProfile>
        },
        {
          path: '/dashboard/agentProfile',
          element: <AgentProfile></AgentProfile>
        },
        {
          path: '/dashboard/agentAddedProperties',
          element: <AgentAddedProperties></AgentAddedProperties>
        }
      ]
    }
  ]);