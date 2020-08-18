import React, { useState } from "react";
import "./CreatePost.css";
import { useLocation, useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import dropdown from "../../assets/down-chevron.svg";

const CreatePost = (props) => {
    const location = useLocation();
    const history = useHistory();
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
        <div className="modal">
            <div className="modal-body">
                <div className="modal-header">
                    <span className="modal-title">Create Post</span>
                    <span
                        className="modal-close"
                        onClick={() => {
                            history.push(location.pathname);
                        }}
                    >
                        &times;
                    </span>
                </div>
                <div className="modal-content">
                    <textarea
                        className="post-textarea"
                        placeholder="What's on your mind?"
                        rows="4"
                        cols="50"
                    />
                    <div
                        className="post-catagory"
                        onClick={() => {
                            setPostCatClicked(!postCatClicked);
                        }}
                    >
                        <div className="post-catagory-select">
                            <span>Post Catagory</span>
                        </div>
                        <img src={dropdown} height="15px" alt="down-chevron"/>
                    </div>
                    {postCatClicked ? renderPostCatagory() : null}
                </div>
                <div className="modal-footer">
                    <button type="button">Post</button>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;
