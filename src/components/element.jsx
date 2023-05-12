import React, { Component } from 'react';

const Intro = () => {
    return ( 
        <React.Fragment>
            <div className='position-relative element'>
                <img className='w-100' src={require("../imgs/Wearing-suit.jpg")} alt="" />
                <div className='position-absolute w-50 text'>
                    <p className='text-success'>welcome</p>
                    <div className='text-light push-yourself'>We help to push yourself to your limits</div>
                    <div className='btn btn-success mt-3 font-weight-bold'>Tell Me How</div>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default Intro;
