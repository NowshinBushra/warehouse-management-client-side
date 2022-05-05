import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <div className='footer fixed-bottom text-center p-4'>
            <p>Copyright <span className='copyright'>&#169;</span> {year}</p>
        </div>
    );
};

export default Footer;