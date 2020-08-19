import React from 'react';
import './Post.css';

const Post = (props) => {
    return(
        <div className="post-div">
            <div className="post-upper">
                <span className="post-user-name">User Name</span>
                <span className="post-menu">...</span>
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