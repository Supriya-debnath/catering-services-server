import React from 'react';
import { Button } from 'react-bootstrap';
import './Subscribe.css';

const Subscribe = () => {
    return (
        <>
            <div className="Sbanner-img">
        <div className="Sbanner-text">
            <h1>Subscribe Our Newsletter for latest Offer</h1>
            <p>
            Catering is the business of providing food service at a remote site.  <br /> 
            The main purpose of catering is convenience.
            </p>
            <div>
            <span >
                <input style={{ border: '2px solid gray' }} type="email" className="w-40 ps-2 rounded-pill py-2" placeholder="email address" /> <Button variant="outline-success" className="rounded-pill px-2 py-2">Subscribe <i class="fab fa-telegram-plane"></i></Button>
            </span>
            </div>
        </div>
    </div>
        </>
    );
};

export default Subscribe;