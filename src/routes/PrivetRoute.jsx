import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthenticationContext } from "../providers/AuthenticationProvider";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthenticationContext);
    const location = useLocation();

    if (loading) {
        return "Loading";
    }

    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;
