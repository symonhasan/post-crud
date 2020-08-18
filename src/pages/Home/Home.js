import React from 'react';
import './Home.css';
import Navigation from '../../components/Navigation/Navigation';
import CreatePost from '../../components/Modal/CreatePost';

const Home = ( props ) => {
    console.log( props );
    const hash = props.location.hash;
    return(
        <div className="">
            <Navigation />
            { hash === '#create-post' ? <CreatePost/> : null}
        </div>
    )
}

export default Home;