import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Secret from "../Pages/Shared/Secret";
import PrivateRout from "./PrivateRout";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart";
import Allusers from "../Pages/Dashboard/Allusers";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'menu',
                element: <Menu></Menu>
            },
            {
                path:'order/:category',
                element: <Order></Order>
            },
        
            {
                path:'login',
                element: <Login></Login>
            },
            {
                path:'signup',
                element: <SignUp></SignUp>
            },
            
            {
                path:'secret',
                element:<PrivateRout><Secret></Secret></PrivateRout>
            },
            
        ] 
    },
    {
        path: 'dashboard',
        element: <PrivateRout><Dashboard></Dashboard></PrivateRout>,
        children: [
            {
                path: 'mycart',
                element:<MyCart></MyCart>
            },
            {
                path: 'allusers',
                element:<Allusers></Allusers>
            },
        ]
    }
]);
