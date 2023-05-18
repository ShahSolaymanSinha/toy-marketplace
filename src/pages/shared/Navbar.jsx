// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthenticationContext } from "../../providers/AuthenticationProvider";

const Navbar = () => {
    const { user } = useContext(AuthenticationContext);

    const handleUserName = (event) => {
        event.target.setAttribute("title", `${user.displayName}`);
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
                                <Link>Home</Link>
                            </li>
                            <li>
                                <Link>All Toys</Link>
                            </li>
                            {user && (
                                <li>
                                    <Link>My Toys</Link>
                                </li>
                            )}
                            {user && (
                                <li>
                                    <Link>Add a Toy</Link>
                                </li>
                            )}
                            <li>
                                <Link>Blogs</Link>
                            </li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">
                        <img src="/logo.png" alt="" className="w-[56px] hidden lg:block" />
                        <h3>Speedy Sports</h3>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link>Home</Link>
                        </li>
                        <li>
                            <Link>All Toys</Link>
                        </li>
                        {user && (
                            <li>
                                <Link>My Toys</Link>
                            </li>
                        )}
                        {user && (
                            <li>
                                <Link>Add a Toy</Link>
                            </li>
                        )}
                        <li>
                            <Link>Blogs</Link>
                        </li>
                    </ul>
                </div>

                <div className="navbar-end">
                    {user ? (
                        user.photoURL ? (
                            <div className="avatar">
                                <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img onMouseOver={handleUserName} src={user.photoURL} />
                                </div>
                            </div>
                        ) : (
                            <div className="avatar">
                                <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="/avatar.png" />
                                </div>
                            </div>
                        )
                    ) : (
                        <Link className="btn">Login</Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
