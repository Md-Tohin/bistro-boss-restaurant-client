import { createBrowserRouter } from "react-router-dom";
import Layout from "../frontend/Layout/Layout";
import Home from "../frontend/pages/Home/Home/Home";
import Menu from "../frontend/pages/Menu/Menu/Menu";
import Food from "../frontend/pages/Food/Food/Food";
import Login from "../frontend/pages/Login/Login";
import Register from "../frontend/pages/Register/Register";
import PrivateRoute from './PrivateRoute';
import ProtectRoute from "./ProtectRoute";

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
                path: "/user/dashboard",
                element: <PrivateRoute><div>Hi Bangladesh</div></PrivateRoute>
            },
            {
                path: "/login",
                element: <ProtectRoute><Login></Login></ProtectRoute>
            },
            {
                path: "/register",
                element: <ProtectRoute><Register></Register></ProtectRoute>
            },
        ]
    }
]);

export default router;