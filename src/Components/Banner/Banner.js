import React from 'react';
import'./Banner.css';

const Banner = () => {
    return (
        <>
            <div className="banner-img">
        <div className="banner-text">
            <h1 className='animate__animated animate__zoomIn'>Catering Services</h1>
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






{/* <Carousel fade className="slider mb-4">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://humayra.com.bd/wp-content/uploads/2019/05/aa-15.jpg"
                    alt="Slide"
                />

                <Carousel.Caption>
                    <h3 className="display-5 cursive-text slider-title">Catering Services</h3>
                    <div className="pb-3">
                        <div className="hide-slider">
                            <small className="slider-more-small-text">
                            Lets plan your next even together.
                            </small>
                        </div>

                        <div className="slider-text-container hide-slider">
                            <small className="slider-more-small-text">
                                sure to explore services.
                            </small>
                        </div>

                        <NavLink to="/explore" className="btn btn-info text-white mt-3 px-4 hide-slider">Read More</NavLink>
                    </div>
                </Carousel.Caption>
            
                </Carousel.Item>
            </Carousel> */}