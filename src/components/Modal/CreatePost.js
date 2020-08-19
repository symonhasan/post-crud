import React, { useState , useEffect } from "react";
import "./CreatePost.css";
import { useLocation, useHistory, useParams } from "react-router";
import CatagorySelector from "./CatagorySelector";
import { connect } from "react-redux";

const CreatePost = (props) => {
    const location = useLocation();
    const history = useHistory();
    const params = useParams();
    const [ feed , setFeed ] = useState("");

    const postTextAreaOnChange = ( event ) => {
        setFeed( event.target.value );
    }

    useEffect(() => {
        if( location.hash === '#edit-post' ){
            const id = params.id;
            setFeed( props.posts[ id ].feed );
            props.setSelectedCatagory( id );
        }
    }, [])

    const postButtonOnClick = () => {
        if( location.hash === '#edit-post' ){
            props.editPost( params.id , feed );
            history.replace(`${location.pathname}`);
        } else{
            props.createNewPost( feed );
            history.replace(`${location.pathname}`);
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

const mapStateToProps = ( state ) => {
    return{
        posts: state.posts,
    }
}

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
        },
        setSelectedCatagory: ( id ) => {
            dispatch({
                type: "SET_SELECTED_CATAGORY",
                payload: {
                    id: id,
                }
            })
        },
        editPost: ( id , feed ) => {
            dispatch({
                type: "EDIT_POST",
                payload: {
                    id: id,
                    feed: feed
                }
            })
        }
    }
}

export default connect( mapStateToProps, mapDispatchToProps)(CreatePost);
