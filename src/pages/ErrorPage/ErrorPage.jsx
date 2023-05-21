import React from "react";
import { Link } from "react-router-dom";
import useDocumentTitle from "../../customHook/useDocumentTitle";

const ErrorPage = () => {
    useDocumentTitle("404");
    return (
        <div>
            <div className="w-full h-screen flex justify-center flex-col items-center">
                <h1 className="text-6xl font-['Pacifico']">404</h1>
                <p className="text-2xl ">
                    Your are lost! We are sorry for that. Please click here to go{" "}
                    <Link className="btn" to={"/"}>
                        home page
                    </Link>
                    .
                </p>
            </div>
        </div>
    );
};

export default ErrorPage;
