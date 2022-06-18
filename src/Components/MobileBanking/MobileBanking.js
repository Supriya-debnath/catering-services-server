import React from 'react';
import {Container,} from 'react-bootstrap';
import './MobilBanking.css';

const MobileBanking = () => {
    return (
        <div className="">
            <Container >
                <div className="box-shadows">

                   <h3 className='pay'>Comfirmed Payment</h3>

                   <div className="form p-3">
                      <div className="form-row my-5">
                        <div className="col-lg-6">
                          <input type="text" className='effect-1' placeholder='019226785439' disabled />
                          <span className='Focus-border'></span>
                          </div>
                        </div>

                        <div className='form-row'>
                            <div className="col-lg-6">
                              <input type="text" className='effect-1' placeholder='Transaction ID' required />
                              <span className='Focus-border'></span>
                            </div>
                        </div>
                        
                          <div className="col-lg-6 ">
                            <button className='btn11'>Send Me Email</button>
                          </div>
                      </div>

                </div>
            </Container>

        </div>
    );
};

export default MobileBanking;