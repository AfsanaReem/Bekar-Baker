import React from 'react';
import Attributes from './Attributes';
import Banner from './Banner';
import Foods from './Foods';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Attributes></Attributes>
            <Foods></Foods>
        </div>
    );
};

export default Home;