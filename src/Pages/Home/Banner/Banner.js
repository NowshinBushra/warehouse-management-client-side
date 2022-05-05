import React from 'react';
import './Banner.css';
import banner1 from '../../../image/banner1.jpg';
const Banner = () => {
    return (
        <div>
            <div className="card text-white mb-5">
                <img src={banner1} className="card-img banner" alt=""/>
                    <div className="card-img-overlay overflow-auto banner-info">
                        <h1 className="card-title">Meet Expert</h1>
                        <h2 className="card-title">Dr. Tiara Doe</h2>
                        <h4 className="card-text">Customized skincare made for your skin's unique needs. Safe and natural dermabration. <br /> Trust your skin to our clinic. We're experienced in making you look beautiful.</h4>
                        <button className='border-0 rounded'>Book an Appointment</button>
                    </div>
            </div>
        </div>
    );
};

export default Banner;