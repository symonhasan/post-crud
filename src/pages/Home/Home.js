import React from 'react';
import './Home.css';
import Navigation from '../../components/Navigation/Navigation';

const Home = ( props ) => {
    console.log( props );
    return(
        <div className="">
            <Navigation />
        </div>
    )
}

export default Home;