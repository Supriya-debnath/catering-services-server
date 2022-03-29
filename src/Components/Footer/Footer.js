import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer text-center text-lg-start text-white bg-dark">
            <section className="py-3">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        {/* About */}
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">
                                Catering Services
                            </h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: "60px", backgroundColor: "#0DCAF0", height: "2px" }}
                            />
                            <p className="small-text footer-about">
                            Excellent communication and interpersonal skills.The caterer is responsible for developing the menu, preparing, transporting, and serving the food, and assisting with the cleanup.
                            </p>
                        </div>

                        {/* Service */}
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold ">Explore</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: "60px", backgroundColor: "#0DCAF0", height: "2px" }}
                            />


                            <p>
                                <NavLink to="/services" className="text-white text-decoration-none small-text">
                                    Ceromony
                                </NavLink>
                            </p>

                            <p>
                                <NavLink to="/services" className="text-white text-decoration-none small-text">
                                    Birthday Party
                                </NavLink>
                            </p>

                            <p>
                                <NavLink to="/services" className="text-white text-decoration-none small-text">
                                    planner
                                </NavLink>
                            </p>

                            <p>
                                <NavLink to="/services" className="text-white text-decoration-none small-text">
                                    Wedding Ceromony
                                </NavLink>
                            </p>
                        </div>

                        {/* Useful links */}
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">Useful links</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: "60px", backgroundColor: "#0DCAF0", height: "2px" }}
                            />

                            <p>
                                <NavLink to="/" className="text-white text-decoration-none small-text">Home</NavLink>
                            </p>

                            <p>
                                <NavLink to="/services" className="text-white text-decoration-none small-text">
                                    Services
                                </NavLink>
                            </p>

                            <p>
                                <NavLink to="/about" className="text-white text-decoration-none small-text">
                                    About
                                </NavLink>
                            </p>

                            <p>
                                <NavLink to="/reviews" className="text-white text-decoration-none small-text">
                                    Reviews
                                </NavLink>
                            </p>
                        </div>

                        {/* Contact */}
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold ">Contact</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: "60px", backgroundColor: "#0DCAF0", height: "2px" }}
                            />

                            <p className="small-text">
                                <i className="fas fa-home me-3"></i>
                                Dhaka, Gulshan 1212, Bangladesh
                            </p>

                            <p className="small-text">
                                <i className="fas fa-envelope me-3"></i>
                                info@cateringservice.com
                            </p>

                            <p className="small-text">
                                <i className="fas fa-phone me-3"></i>
                                +880 199 777 822
                            </p>

                            <p className="small-text">
                                <i className="fas fa-print me-3"></i>
                                +880 199 559 811
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Copyright */}
            <div
                className="text-center p-3 small-text"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            >
                <span className="me-2">© 2021 Copyright</span>

                <NavLink to="/" className="text-white text-decoration-none">
                    Catering Services
                </NavLink>
            </div>
        </footer>
    );
};

export default Footer;