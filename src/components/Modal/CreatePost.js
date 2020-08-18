import React from "react";
import "./CreatePost.css";
import { useLocation, useHistory } from "react-router";
import CatagorySelector from "./CatagorySelector";

const CreatePost = (props) => {
    const location = useLocation();
    const history = useHistory();

    return (
        <div className="modal">
            <div className="modal-body">
                <div className="modal-header">
                    <span className="modal-title">{props.title}</span>
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
                    <CatagorySelector />
                </div>
                <div className="modal-footer">
                    <button type="button">Post</button>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;
