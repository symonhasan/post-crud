import React, { useState } from "react";
import "./CreatePost.css";
import { useLocation, useHistory } from "react-router";
import CatagorySelector from "./CatagorySelector";
import { connect } from "react-redux";

const CreatePost = (props) => {
    const location = useLocation();
    const history = useHistory();
    const [ feed , setFeed ] = useState("");

    const postTextAreaOnChange = ( event ) => {
        setFeed( event.target.value );
    }

    const postButtonOnClick = () => {
        props.createNewPost( feed );
        history.replace(`${location.pathname}`);
    }

    return (
        <div className="modal">
            <div className="modal-body">
                <div className="modal-header">
                    <span className="modal-title">{props.title}</span>
                    <span
                        className="modal-close"
                        onClick={() => {
                            props.clearSelectedCatagory();
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
                        value={feed}
                        onChange={postTextAreaOnChange}
                    />
                    <CatagorySelector/>
                </div>
                <div className="modal-footer">
                    <button type="button" onClick={postButtonOnClick}>Post</button>
                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = ( dispatch ) => {
    return{
        clearSelectedCatagory: () => {
            dispatch({
                type: "CLEAR_SELECTED_CATAGORY"
            })
        },
        createNewPost: ( feed ) => {
            dispatch({
                type: "CREATE_POST",
                payload: {
                    feed: feed
                }
            })
        }
    }
}

export default connect( null, mapDispatchToProps)(CreatePost);
