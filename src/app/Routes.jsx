import ErrorPage from "@/components/ErrorPage";
import Login from "@/features/auth/Login";
import DashBoard from "@/features/dashBoard";
import Product from "@/features/product";
import AuthGuard from "@/guards/AuthGuard";
import DashboardGuard from "@/guards/DashboardGuard";
import { createBrowserRouter } from "react-router";


export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <AuthGuard />,
            errorElement: <ErrorPage />,
            children: [
                {
                    index: true,
                    element: <Login />
                }
            ]
        },
        {
            path: 'dashboard',
            element: <DashboardGuard />,
            children: [
                {
                    index: true,
                    element: <DashBoard />
                },
                {
                    path: 'product',
                    element: <Product />
                }
            ]
        }
    ]
)