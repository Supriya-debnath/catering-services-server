import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Payment.css';


const Payment = () => {
    // const handleComfirm1 = () => {
    //     alert("Booking Successfully");
    // }

    return (

      <div>
        <h2>Please select Youre Payment Methods:</h2>
         <Form>
      {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Mobile banking"
            name="group1"
            type={type}
            id={`inline-${type}-Mobile banking`}
          />
          <Form.Check
            inline
            label="Cash on delivery(COD)"
            name="group1"
            type={type}
            id={`inline-${type}-COD`}
          />
        </div>
      ))}
    </Form>
    <Link to="/MobileBanking"><Button>Checkout Comfirm</Button></Link>
      </div>



  
    );
};

export default Payment;



