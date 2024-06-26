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
import { default as UserDashboard } from "../frontend/user/Dashboard/Dashboard";
import Profile from "../frontend/user/Profile/Profile";
import Order from "../frontend/user/Order/Order";
import AdminLayout from "../admin/Layout/AdminLayout";
import { default as AdminDashboard } from '../admin/pages/Dashboard/Dashboard';
import User from "../admin/pages/User/User";
import { default as AdminMenu } from '../admin/pages/Menu/Menu';
import MenuAdd from "../admin/pages/Menu/MenuAdd";
import MenuEdit from "../admin/pages/Menu/MenuEdit";
import AddPayment from "../frontend/user/Payment/AddPayment";
import PaymentHistory from "../frontend/user/Payment/PaymentHistory";

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
                        element: <UserDashboard></UserDashboard>,
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
                        path: "payment/add",
                        element: <AddPayment></AddPayment>
                    },
                    {
                        path: "payment",
                        element: <PaymentHistory></PaymentHistory>
                    },
                    {
                        path: "profile",
                        element: <Profile></Profile>
                    },
                ]
            },
        ]
    },
    {
        path: "admin",
        element: <PrivateRoute><AdminLayout></AdminLayout></PrivateRoute>,
        children: [
            {
                path: "dashboard",
                element: <AdminDashboard></AdminDashboard>
            },
            {
                path: "menu/add",
                element: <MenuAdd></MenuAdd>
            },
            {
                path: "menu/edit/:id",
                element: <MenuEdit></MenuEdit>,
                loader: ({params}) => fetch(`http://localhost:5000/api/menu/${params.id}`),
            },
            {
                path: "menu",
                element: <AdminMenu></AdminMenu>,
            },
            {
                path: "users",
                element: <User></User>
            },
        ]
    }
]);

export default router;