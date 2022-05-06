import React from 'react';

const Progress = () => {
    return (
        <div style={{background: "#4d1750d1"}} className='px-5 py-2'>
            <div style={{color: "rgb(215, 218, 222)"}} className='d-lg-flex justify-content-around m-5'>
                <div>
                    <h1>25,007+</h1>
                    <p></p>
                    <p>Successfully Delivered</p>
                </div>
                <div>
                    <h1>344,771+</h1>
                    <p>Worldwide Clients</p>
                </div>
                <div>
                    <h1>7,079+</h1>
                    <p>Store Clients Products</p>
                </div>
                <div>
                    <h1>1043+</h1>
                    <p>Total Km Reach So Far</p>
                </div>
            </div>
        </div>
    );
};

export default Progress;