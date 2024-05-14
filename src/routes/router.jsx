import { createBrowserRouter } from "react-router-dom";
import Layout from "../frontend/Layout/Layout";
import Home from "../frontend/pages/Home/Home/Home";
import Menu from "../frontend/pages/Menu/Menu/Menu";
import Food from "../frontend/pages/Food/Food/Food";
import Login from "../frontend/pages/Login/Login";
import Register from "../frontend/pages/Register/Register";
import PrivateRoute from './PrivateRoute';
import ProtectRoute from "./ProtectRoute";
import Cart from "../frontend/user/Cart/Cart";
import UserLayout from "../frontend/user/UserLayout/UserLayout";
import Dashboard from "../frontend/user/Dashboard/Dashboard";
import Profile from "../frontend/user/Profile/Profile";
import Order from "../frontend/user/Order/Order";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/menu",
                element: <Menu></Menu>
            },
            {
                path: "/foods/:category",
                element: <Food></Food>
            },
            {
                path: "/login",
                element: <ProtectRoute><Login></Login></ProtectRoute>
            },
            {
                path: "/register",
                element: <ProtectRoute><Register></Register></ProtectRoute>
            },
            {
                path: "user",
                element: <PrivateRoute><UserLayout></UserLayout></PrivateRoute>,
                children: [
                    {
                        path: "dashboard",
                        element: <Dashboard></Dashboard>,
                    },
                    {
                        path: "cart",
                        element: <Cart></Cart>
                    },
                    {
                        path: "orders",
                        element: <Order></Order>
                    },
                    {
                        path: "payment",
                        element: <Cart></Cart>
                    },
                    {
                        path: "profile",
                        element: <Profile></Profile>
                    },
                ]
            },
        ]
    }
]);

export default router;