import React, { useContext } from "react";
import { AuthenticationContext } from "../../providers/AuthenticationProvider";
import { Link, useNavigate } from "react-router-dom";
import useDocumentTitle from "../../customHook/useDocumentTitle";

const RegisterPage = () => {
    const { createUser, updateUserProfile, loading } = useContext(AuthenticationContext);
    const navigate = useNavigate();
    useDocumentTitle("Register");

    const handleSubmitForm = (event) => {
        event.preventDefault();
        const form = event.target;

        const name = form.username.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photoUrl.value;

        createUser(email, password)
            .then(() => {
                updateUserProfile({ displayName: name, photoURL: photoUrl });
                navigate("/");
            })
            .catch((error) => {
                console.log("Register Page Create User Error: ", error);
            });
    };

    if (loading) {
        return <div>Loading</div>;
    }
    return (
        <div className="lg:w-full lg:h-screen lg:flex lg:justify-center lg:items-center">
            <div className="form-container w-full md:w-3/4 xl:w-1/3 mx-auto ">
                <div>
                    <p className="title">Register</p>
                    <form className="form" onSubmit={handleSubmitForm}>
                        <div className="input-group flex flex-col">
                            <label htmlFor="username">Name</label>
                            <input type="text" name="username" id="" placeholder="Enter your name" required />
                        </div>
                        <div className="input-group flex flex-col">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" placeholder="Enter your email" required />
                        </div>
                        <div className="input-group flex flex-col">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" placeholder="Enter your password" required />
                        </div>
                        <div className="input-group flex flex-col">
                            <label htmlFor="photoUrl">PhotoUrl</label>
                            <input type="text" name="photoUrl" id="photoUrl" placeholder="Enter your photo url (optional)" />
                        </div>
                        <br />
                        <button className="sign">Sign Up</button>
                    </form>
                    <br />
                    <p className="signup">
                        Have an account?
                        <Link to={"/login"} rel="noopener noreferrer" href="#" className="ml-2">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
