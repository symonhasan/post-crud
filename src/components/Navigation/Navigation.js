import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navigation.css";

const Navigation = (props) => {
    const location = useLocation();
    return (
        <div className="navigation">
            <NavLink to={`${location.pathname}`} className="site-header">
                Post<span>CRUD</span>
            </NavLink>
            <ul className="nav-links">
                <NavLink to="#create-post" exact>
                    Create Post
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;