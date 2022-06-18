import React from 'react';
import'./Banner.css';

const Banner = () => {
    return (
        <>
            <div className="banner-img">
        <div className="banner-text">
            <h1 className='animate__animated animate__zoomIn'>Catering & Event Management</h1>
            <p className='animate__animated animate__fadeInUp'>
                Lets plan your next even together.
            </p>
            <button className="btn animate__animated animate__fadeInUp">Contact Us</button>
        </div>
    </div>
        </>
    );
};

export default Banner;


