import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = (props) => {
    return (
        <div className="navigation">
            <NavLink to="/" className="site-header">
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