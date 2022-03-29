import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img className="img-fluid w-100" src="https://www.kindpng.com/picc/m/164-1647170_404-page-04-404-error-page-png-transparent.png" alt="" />
            <Link to="/"><Button>Go Back</Button></Link>
        </div>
    );
};

export default NotFound;