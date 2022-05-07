import React from 'react';
import './Banner.css';
import banner1 from '../../../image/banner1.jpg';
const Banner = () => {
    return (
        <div>
            <div className="card text-white mb-5">
                <img src={banner1} className="card-img banner" alt=""/>
                    <div className="card-img-overlay overflow-auto banner-info">
                        <h1 className="card-title">Welcome To Vehica Car Dealer</h1>
                        <h2 className="card-title">With certified cars</h2>
                        <h4 className="card-text">Award-winning, family owned dealership of new and pre-owned vehicles with several locations across the city. Lowest prices and the best customer service guaranteed.</h4>
                        <button className='border-0 rounded'>Explore</button>
                    </div>
            </div>
        </div>
    );
};

export default Banner;