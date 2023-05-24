import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import AuthenticationProvider, { AuthenticationContext } from "./providers/AuthenticationProvider";
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
import MyToys from "./pages/MyToys/MyToys";
import UpdateAToy from "./pages/UpdataAToy/UpdateAToy";

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
                loader: () => fetch("https://a11-server-side-six.vercel.app/added-toys"),
            },
            {
                path: "/test",
                element: <MyToys></MyToys>,
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
                loader: ({ params }) => fetch(`https://a11-server-side-six.vercel.app/${params.which}/${params.id}`),
            },
            {
                path: "/added-single-toy/:id",
                element: (
                    <PrivateRoute>
                        <SingleToy toy="added-toy"></SingleToy>
                    </PrivateRoute>
                ),
                loader: ({ params }) => fetch(`https://a11-server-side-six.vercel.app/added-single-toy/${params.id}`),
            },
            {
                path: "/add-a-toy",
                element: (
                    <PrivateRoute>
                        <AddAToy></AddAToy>
                    </PrivateRoute>
                ),
            },
            {
                path: "/my-toys",
                element: (
                    <PrivateRoute>
                        <MyToys></MyToys>
                    </PrivateRoute>
                ),
            },
            {
                path: "/toy/update/:id",
                element: <UpdateAToy></UpdateAToy>,
                loader: ({ params }) => fetch(`https://a11-server-side-mdsinha.vercel.app/added-single-toy/${params.id}`),
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
