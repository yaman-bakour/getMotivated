import React, { Component } from 'react';
import {FaCheck , FaPhoneAlt , FaEnvelope , FaFileDownload , FaLongArrowAltRight} from "react-icons/fa"
import {GoLocation} from "react-icons/go"

const Footer = () => {
    return ( 
        <div className='mt-3 p-5 footer'>
            <img className='footer-img mb-5' src={require("../imgs/logobot.png")} alt="" />
            <div className='text-light mb-5'>
                <p><GoLocation color='green' className='mr-3' />08 W 36th st,New York,NY 10001</p>
                <p><FaPhoneAlt color='green' className='mr-3'/>1200 300 9000</p>
                <p><FaEnvelope color='green' className='mr-3'/>contact@GetMotivated.com</p>
                <p><FaFileDownload color='green' className='mr-3'/>Download Brochure</p>
            </div>
            
            <h5 className='titles mb-4'>Upcoming Events</h5>
            <div className='text-light'>
                <p><FaCheck color='green' size="0.8em" className='mr-3 bg-dark'/>Attitude is Everything</p>
                <p><FaCheck color='green' size="0.8em" className='mr-3 bg-dark'/>The Winning Mindset</p>
                <p><FaCheck color='green' size="0.8em" className='mr-3 bg-dark'/>Sales Breakthrough</p>
                <p><FaCheck color='green' size="0.8em" className='mr-3 bg-dark'/>Effective Communication Skills</p>
                <p><FaCheck color='green' size="0.8em" className='mr-3 bg-dark'/>Be The Game Changer</p>
                <p><FaCheck color='green' size="0.8em" className='mr-3 bg-dark'/>I Can And I Will</p>
            </div>

            <h5 className='titles mb-4'>Newsletter</h5>

        <p className='text-light mb-3'>Signup for our newsletter to get the latest news, upadates and special offers in your inbox.</p>
        <div className='row no-gutters mb-4'>
            <input className='col-10 p-1' type="text" placeholder='Enter Your Email'/>

            <button className='col-2 btn btn-block'><FaLongArrowAltRight color='white' size="2em"/></button>
        </div>
        
        <h6 className='text-muted'>your email is safe with us. We don't spam.</h6>
        </div>
     );
}
 
export default Footer;
