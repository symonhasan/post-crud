import React, { useState } from "react";
import "./CreatePost.css";
import { useLocation, useHistory } from "react-router";
import { connect } from "react-redux";

const CreateCatagory = (props) => {
    const location = useLocation();
    const history = useHistory();
    const [ catagoryName , setCatagoryName ] = useState("");

    const catagorySaveOnClick = () => {
        props.saveNewCatagory( catagoryName );
        history.goBack();
    }

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
                        value={catagoryName}
                        onChange={(e) => setCatagoryName( e.target.value )}
                    />
                </div>
                <div className="modal-footer">
                    <button type="button" onClick={catagorySaveOnClick}>Save</button>
                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = ( dispatch ) => {
    return{
        saveNewCatagory: ( catagoryName ) => {
            dispatch({
                type: "SAVE_NEW_CATAGORY",
                payload: {
                    catagoryName: catagoryName
                }
            })
        }
    }
}

export default connect( null , mapDispatchToProps )( CreateCatagory );
