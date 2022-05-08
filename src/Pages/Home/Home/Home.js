import React from 'react';
import Banner from '../Banner/Banner';
import Exchange from '../Exchange/Exchange';
import Inventories from '../Inventories/Inventories';
import Progress from '../Progress/Progress';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>
            
            <Progress></Progress>
            <Exchange></Exchange>
        </div>
    );
};

export default Home;