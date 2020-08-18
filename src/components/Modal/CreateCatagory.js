import React from "react";
import "./CreatePost.css";
import { useLocation, useHistory } from "react-router";

const CreateCatagory = (props) => {
    const location = useLocation();
    const history = useHistory();

    return (
        <div className="modal">
            <div className="modal-body">
                <div className="modal-header">
                    <span className="modal-title">Create Catagory</span>
                    <span
                        className="modal-close"
                        onClick={() => {
                            history.push(`${location.pathname}#create-post`);
                        }}
                    >
                        &times;
                    </span>
                </div>
                <div className="modal-content">
                    <input
                        className="post-textarea"
                        placeholder="Catagory Name"
                        type="text"
                    />
                </div>
                <div className="modal-footer">
                    <button type="button">Save</button>
                </div>
            </div>
        </div>
    );
};

export default CreateCatagory;
