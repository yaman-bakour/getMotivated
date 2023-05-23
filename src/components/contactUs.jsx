import React, { Component } from 'react';
 const ContactUs = () => {
    return ( 
        <React.Fragment>
            <div className='container p-2 contact-us'>
                <h1 className='font-weight-bold text-center'>Contact Us</h1>
                <div className='d-flex justify-content-center mb-5'>
                    <h1 className='underline w-25'></h1>
                </div>
                <div className='row no-gutters g-0'>
                    <div className='col-5 mr-4'>
                        <input className='w-100 mb-4 p-2' type="text" placeholder='Your Name'/>
                        <input className='w-100 mb-4 p-2' type="email" placeholder='Your Email'/>
                        <input className='w-100 p-2' type="tel" placeholder='Your Phone'/>
                    </div>
                    <textarea className='col-6 p-2' placeholder='Additional Message'/>
                </div>

                <div className='d-flex justify-content-center mt-5'>
                    <button className='btn btn-success fw-bold pr-4 pl-4'>Submit</button>
                </div>
            </div>
        </React.Fragment>
     );
 }
  
 export default ContactUs;
