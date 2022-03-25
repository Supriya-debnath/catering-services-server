import React from 'react';
import { Container } from 'react-bootstrap';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <Container className="my-4">
        <div className="mb-4 text-center bg-light service-banner">
            <h4 className="display-6 cursive-text service-title">
                About Us
            </h4>
            <div>
                <div>
                    <small className="text-muted small-text">
                    Responsibilities may include not only providing and preparing food but also serving it and 
                    </small>
                </div>

                <div>
                    <small className="text-muted small-text">
                    cleaning up afterwards. We have thousands of happy clients
                    </small>
                </div>

                <div>
                    <small className="text-muted small-text">
                        all around the world.
                    </small>
                </div>
            </div>
        </div>

        <div className="row row-cols-1 row-cols-md-2 g-2">
            <div className="col d-flex align-items-center justify-content-center">
                <div className="w-75 banner-text-container">
                    <h4 className="display-6 cursive-text head">Who We Are</h4> <hr />
                    <p className="text-muted small-text">
                    Catering is the business of providing food service at events. The catering company usually prepares the food at its premises and delivers it to the event when needed. It may also provide drinks, crockery, cutlery, glassware, decorations and service staff.
                    </p>
                </div>
            </div>

            <div className="col">
                <img className="img-fluid" src="https://149451308.v2.pressablecdn.com/wp-content/uploads/2019/04/10-Wedding-Planners-to-Follow-on-Instagram-Allenbrooke-Farms.jpg" alt="apartments" />
            </div>


            <div className="col">
                <img className="img-fluid" src="https://st2.depositphotos.com/1038226/11716/i/950/depositphotos_117161470-stock-photo-event-catering-food.jpg" alt="apartments" />
            </div>

            <div className="col d-flex align-items-center justify-content-center">
                <div className="w-75 banner-text-container">
                    <h4 className="display-6 cursive-text head">Why You Trust Us</h4> <hr />
                    <p className="text-muted small-text">
                    We want to be a reliable service for everyone, and our team knows that your trust is a reward for the excellent job. To win this reward, we provide the high-quality service and care about every customer.
                    </p>
                </div>
            </div>
        </div>
    </Container>
    );
};

export default AboutUs;