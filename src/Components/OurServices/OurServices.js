import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Service from '../Service/Service';
import './OurServices.css';

const OurServices = () => {
    const [services, setServices]= useState([])

    useEffect(() => {
        fetch("/servicedb.json")
            .then(res => res.json())
            .then(data => {
                const reverseData = data.slice().reverse();
                setServices(reverseData.slice(0, 6));
            });
    }, []);
    return (
        <div className="mb-4">
        <div className="service-banner text-center">
            <h4 className="display-6 cursive-text service-title animate__animated animate__zoomIn">
            Welcome to Grenda, a premier catering <br /> and event planning services.
            </h4>
            <div>
                <div>
                    <small className="text-muted small-text">
                        Book a luxury apartments at a great price! Grab a last-minute offer and start
                    </small>
                </div>

                <div>
                    <small className="text-muted small-text">
                        moving to a new home.
                    </small>
                </div>
            </div>
        </div>

        <Container>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

                {services.map(service => <Service key={service._id} service={service}/>)}
            </div>
        </Container>
    </div>
    );
};

export default OurServices;