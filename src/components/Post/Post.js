import React from 'react';
import './Post.css';
import { NavLink } from 'react-router-dom';

const Post = (props) => {
    return(
        <div className="post-div">
            <div className="post-upper">
                <span className="post-user-name">User Name</span>
                <div className="post-menu">
                    <span>...</span>
                    <div className="dropdown-content">
                        <NavLink to={`/post/${props.id}#edit-post`}>Edit</NavLink>
                        <NavLink to={`/post/${props.id}#delete-post`}>Delete</NavLink>
                    </div>
                </div>
            </div>
            <div className="post-main">
                <span>{props.feed}</span>
            </div>
            <div className="post-catagories">
                {
                    props.catagories.map( ( element , index ) => {
                        return <li key={index}>{element}</li>
                    })
                }
            </div>
        </div>
    )
}

export default Post;