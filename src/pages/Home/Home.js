import React, { useEffect } from 'react';
import './Home.css';
import Navigation from '../../components/Navigation/Navigation';
import CreatePost from '../../components/Modal/CreatePost';
import CreateCatagory from '../../components/Modal/CreateCatagory';
import Post from '../../components/Post/Post';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

const Home = ( props ) => {
    const hash = props.location.hash;
    const { id } = props.match.params;
    const history = useHistory();
    const postDelete = () => {
        props.deletePost( id );
        history.replace(`/post`);
    }

    useEffect(() => {
        if( id && hash === "#delete-post")
        {
            postDelete();
        }
    }, [ id , hash])

    return(
        <div className="">
            <Navigation />
            <div className="posts-area">
                {
                    props.posts.map( ( element , index ) => {
                        return <Post key={index} id={index} feed={element.feed} catagories={element.catagory}/>
                    })
                }
            </div>
            { ( id && hash === '#edit-post' ) || ( id && hash === '#edit-post#create-catagory' ) ? <CreatePost title="Edit Post" />: null }
            { hash === '#create-post' || hash === '#create-post#create-catagory' ? <CreatePost title="Create Post"/> : null}
            { hash === '#create-post#create-catagory' || hash === '#edit-post#create-catagory' ? <CreateCatagory /> : null }
        </div>
    )
}

const mapStateToProps = ( state ) => {
    return{
        posts: state.posts
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return{
        deletePost: ( id ) => {
            dispatch({
                type: "DELETE_POST",
                payload: {
                    id: id,
                }
            })
        }
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( Home );