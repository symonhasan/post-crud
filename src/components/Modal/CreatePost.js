import React, { useState } from "react";
import "./CreatePost.css";
import { useLocation, useHistory } from "react-router";
import CatagorySelector from "./CatagorySelector";

const CreatePost = (props) => {
    const location = useLocation();
    const history = useHistory();
    const [ feed , setFeed ] = useState("");
    const [ selectedCatagory , setSelectedCatagory ] = useState([]);

    const postTextAreaOnChange = ( event ) => {
        setFeed( event.target.value );
    }

    const selectCatagoryOnClick = ( event ) => {
        const flag = selectedCatagory.filter( element => element === event.target.id ).length;
        if( !flag )
            setSelectedCatagory( [ ...selectedCatagory , event.target.id ] );
        else{
            const newSelectedCatagory = selectedCatagory.filter( element => element !== event.target.id );
            setSelectedCatagory( [ ...newSelectedCatagory ] );
        }
    }

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
                        value={feed}
                        onChange={postTextAreaOnChange}
                    />
                    <CatagorySelector selectOnClick={ selectCatagoryOnClick } selectedCatagory={ selectedCatagory }/>
                </div>
                <div className="modal-footer">
                    <button type="button">Post</button>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;
