import React from 'react';
import { Link } from 'react-router-dom';
import './service.css';

const Service = ({service}) => {
    const {_id, name, img, description} =service;

    return (
        <div className="col product">
            
                <div className="card h-100">
                    <img src={img} className="card-img-top" alt={name} />
                    <div className="card-body">
                        <h4 className="card-title cursive-text text-center">
                            {name}
                        </h4>

                        <p className="card-text more-small-text text-muted text-justify">
                            {description.slice(0, 200)}
                        </p>

                       

                        {/* <div className="row">
                            <div className="col-6">
                                <FontAwesomeIcon icon={faStar} className="more-small-text text-warning me-1" />
                                <FontAwesomeIcon icon={faStar} className="more-small-text text-warning me-1" />
                                <FontAwesomeIcon icon={faStar} className="more-small-text text-warning me-1" />
                                <FontAwesomeIcon icon={faStar} className="more-small-text text-warning me-1" />
                                <FontAwesomeIcon icon={faStar} className="more-small-text text-warning me-1" />
                            </div>

                            <div className="col-6">
                                <div className="text-end d-flex justify-content-end">
                                    <div className="text-end me-1">
                                    </div>

                                </div>
                            </div>
                        </div> */}
                    </div>

                    <Link to={`/booking/${_id}`}>
                    <button className="btn btn-success text-white px-4 w-75 rounded-0 order-btn ">Booking Now</button>
                    </Link>

                </div>
               
        </div>
    );
};

export default Service;