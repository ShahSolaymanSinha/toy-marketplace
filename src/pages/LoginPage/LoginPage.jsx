import React, { useContext } from "react";
import "./login.css";
import { AuthenticationContext } from "../../providers/AuthenticationProvider";
import { Link } from "react-router-dom";

const LoginPage = () => {
    const { signIn, signInWithGoogle, logOut } = useContext(AuthenticationContext);

    const handleLogIn = (event) => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(() => {
                console.log("User login successful");
            })
            .catch((error) => {
                console.log("Login Page Error: " + error);
            });
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                console.log("User logged in with google");
            })
            .catch((error) => {
                console.log("Google Sign In Error: " + error);
            });
    };

    const handleLogOut = () => {
        logOut();
    };

    return (
        <div className="lg:w-full lg:h-screen lg:flex lg:justify-center lg:items-center">
            <div className="form-container w-full md:w-3/4 xl:w-1/3 mx-auto ">
                <div>
                    <p className="title">Login</p>
                    <form onSubmit={handleLogIn} className="form">
                        <div className="input-group flex flex-col">
                            <label htmlFor="email">Username</label>
                            <input type="email" name="email" id="email" placeholder="Enter your email" />
                        </div>
                        <div className="input-group flex flex-col">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" placeholder="Enter your password" />
                            <div className="forgot"></div>
                        </div>
                        <button className="sign">Sign in</button>
                    </form>
                    <br />

                    <button onClick={handleLogOut} className="sign">
                        Log Out
                    </button>

                    <div className="social-message">
                        <div className="line" />
                        <p className="message">Login with social accounts</p>
                        <div className="line" />
                    </div>
                    <div className="social-icons">
                        <button onClick={handleGoogleSignIn} aria-label="Log in with Google" className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z" />
                            </svg>
                        </button>
                    </div>
                    <p className="signup">
                        Don't have an account?
                        <Link to={"/register"} rel="noopener noreferrer" href="#" className="ml-2">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
