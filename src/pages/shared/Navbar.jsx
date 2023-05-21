// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthenticationContext } from "../../providers/AuthenticationProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthenticationContext);

    const pathName = useLocation().pathname;
    console.log(pathName);

    const handleUserName = (event) => {
        event.target.setAttribute("title", `${user.displayName}`);
    };

    const activeNavbarStyle = {
        color: "red",
        fontWeight: "bold",
    };

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link to={"/"} style={pathName == "/" ? activeNavbarStyle : {}}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to={"all-toys"} style={pathName == "/all-toys" ? activeNavbarStyle : {}}>
                                    All Toys
                                </Link>
                            </li>
                            {user && (
                                <li>
                                    <Link to={"my-toys"} style={pathName == "/my-toys" ? activeNavbarStyle : {}}>
                                        My Toys
                                    </Link>
                                </li>
                            )}
                            {user && (
                                <li>
                                    <Link to={"/add-a-toy"} style={pathName == "/add-a-toy" ? activeNavbarStyle : {}}>
                                        Add a Toy
                                    </Link>
                                </li>
                            )}
                            <li>
                                <Link to={"/blogs"} style={pathName == "/blogs" ? activeNavbarStyle : {}}>
                                    Blogs
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <Link to={"/"} className="btn btn-ghost normal-case text-xl">
                        <img src="/logo.png" alt="" className="w-[50px] hidden lg:block rounded-full" />
                        <h3>Speedy Sports</h3>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link to={"/"} style={pathName == "/" ? activeNavbarStyle : {}}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to={"all-toys"} style={pathName == "/all-toys" ? activeNavbarStyle : {}}>
                                All Toys
                            </Link>
                        </li>
                        {user && (
                            <li>
                                <Link to={"my-toys"} style={pathName == "/my-toys" ? activeNavbarStyle : {}}>
                                    My Toys
                                </Link>
                            </li>
                        )}
                        {user && (
                            <li>
                                <Link to={"/add-a-toy"} style={pathName == "/add-a-toy" ? activeNavbarStyle : {}}>
                                    Add a Toy
                                </Link>
                            </li>
                        )}
                        <li>
                            <Link to={"/blogs"} style={pathName == "/blogs" ? activeNavbarStyle : {}}>
                                Blogs
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="navbar-end">
                    {user ? (
                        user.photoURL ? (
                            <div className="flex gap-5">
                                <div className="avatar hidden md:block">
                                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img onMouseOver={handleUserName} src={user.photoURL} />
                                    </div>
                                </div>

                                <button className="btn" onClick={() => logOut()}>
                                    Log Out
                                </button>
                            </div>
                        ) : (
                            <div className="flex gap-5">
                                <div className="avatar hidden md:block">
                                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="/avatar.png" />
                                    </div>
                                </div>

                                <button className="btn" onClick={() => logOut()}>
                                    Log Out
                                </button>
                            </div>
                        )
                    ) : (
                        <Link to={"/login"} className="btn">
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
