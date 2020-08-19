import React from 'react';
import './Home.css';
import Navigation from '../../components/Navigation/Navigation';
import CreatePost from '../../components/Modal/CreatePost';
import CreateCatagory from '../../components/Modal/CreateCatagory';
import Post from '../../components/Post/Post';
import { connect } from 'react-redux';

const Home = ( props ) => {
    console.log( props );
    const hash = props.location.hash;
    const { id } = props.match.params;
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
            { id && hash === '#edit-post' ? <CreatePost title="Edit Post" />: null }
            { hash === '#create-post' || hash === '#create-post#create-catagory' || hash === '#edit-post#create-catagory' ? <CreatePost title="Create Post"/> : null}
            { hash === '#create-post#create-catagory' || hash === '#edit-post#create-catagory' ? <CreateCatagory /> : null }
        </div>
    )
}

const mapStateToProps = ( state ) => {
    return{
        posts: state.posts
    }
}

export default connect( mapStateToProps )( Home );