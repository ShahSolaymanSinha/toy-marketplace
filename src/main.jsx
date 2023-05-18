import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import AuthenticationProvider from "./providers/AuthenticationProvider";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div className="mx-1 lg:w-4/5 lg:mx-auto">
                <Layout></Layout>
            </div>
        ),
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/register",
                element: <RegisterPage />,
            },
            {
                path: "/login",
                element: <LoginPage />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthenticationProvider>
            <RouterProvider router={router} />
        </AuthenticationProvider>
    </React.StrictMode>
);
