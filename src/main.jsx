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
import Blog from "./pages/Blog/Blog";
import SingleToy from "./pages/SingleToy/SingleToy";
import PrivateRoute from "./routes/PrivetRoute";
import AddAToy from "./pages/AddAToy/AddAToy";
import AllToys from "./pages/AllToys/AllToys";
import Loader from "./pages/shared/Loader/Loader";

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
                element: <AllToys></AllToys>,
                loader: () => fetch("http://localhost:5000/added-toys"),
            },
            {
                path: "/blogs",
                element: <Blog></Blog>,
            },
            {
                path: "/toy/:which/:id",
                element: (
                    <PrivateRoute>
                        <SingleToy toy="default-toy"></SingleToy>
                    </PrivateRoute>
                ),
                loader: ({ params }) => fetch(`http://localhost:5000/${params.which}/${params.id}`),
            },
            {
                path: "/added-single-toy/:id",
                element: (
                    <PrivateRoute>
                        <SingleToy toy="added-toy"></SingleToy>
                    </PrivateRoute>
                ),
                loader: ({ params }) => fetch(`http://localhost:5000/added-single-toy/${params.id}`),
            },
            {
                path: "/add-a-toy",
                element: <AddAToy></AddAToy>,
            },
            {
                path: "/loader",
                element: <Loader></Loader>,
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
