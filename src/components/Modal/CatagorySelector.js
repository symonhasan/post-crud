import React , { useState } from "react";
import "./CreatePost.css";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import dropdown from "../../assets/down-chevron.svg";

const CatagorySelector = () => {
    const location = useLocation();
    const [postCatClicked, setPostCatClicked] = useState(false);

    const renderPostCatagory = () => {
        return (
            <div className="post-catagory-option">
                <NavLink
                    to={`${location.pathname}${location.hash}#create-catagory`}
                >
                    Create New Catagory
                </NavLink>
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
            </div>
        );
    };
    return (
        <div>
            <div
                className="post-catagory"
                onClick={() => {
                    setPostCatClicked(!postCatClicked);
                }}
            >
                <div className="post-catagory-select">
                    <span>Post Catagory</span>
                </div>
                <img src={dropdown} height="15px" alt="down-chevron" />
            </div>
            {postCatClicked ? renderPostCatagory() : null}
        </div>
    );
};

export default CatagorySelector;