import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import AuthenticationProvider from "./providers/AuthenticationProvider";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import homePageLoader from "./utils/homePageLoader";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import "@smastrom/react-rating/style.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div className="mx-1 lg:w-4/5 lg:mx-auto">
                <Layout></Layout>
            </div>
        ),
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => homePageLoader(),
            },
            {
                path: "/register",
                element: <RegisterPage />,
            },
            {
                path: "/login",
                element: <LoginPage />,
            },
            {
                path: "/all-toys",
                element: <Home />,
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
