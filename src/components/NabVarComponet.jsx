import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './NabVarComponent.css'; 


const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        UTCompas
                    </Link>
                    <ul className="navbar-menu">
                        <li className="navbar-item">
                            <Link to="/" className="navbar-link">Home</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/Profile" className="navbar-link">Profile</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/Feed" className="navbar-link">Feed</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/" className="navbar-link">Friends</Link>
                        </li>
                        <li className="navbar-item">
                            <div className="dropdown">
                                <button className="dropbtn">User</button>
                                <div className="dropdown-content">
                                    <Link to="/Login">Login</Link>
                                    <Link to="/">Logout</Link>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

            </nav>
            <Outlet />
        </div>
    );
};

export default Navbar;