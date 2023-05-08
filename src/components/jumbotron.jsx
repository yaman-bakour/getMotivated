import React, { Component } from 'react';

const Jumbotron = () => {
    return ( 
        <React.Fragment>
            <div className='row bg-success text-light no-gutters p-4 font-weight-bold text-center'>
                <div className='col-md-3 col-4'>
                    <h2>600+</h2>
                    <p>Trainings</p>
                </div>
                <div className='col-md-3 col-4'>
                    <h2>120k</h2>
                    <p>Participants</p>
                </div>
                <div className='col-md-3 col-4'>
                    <h2>85</h2>
                    <p>Companies</p>
                </div>
                <div className='col-md-3 col-4'>
                    <h2>50k</h2>
                    <p>Topics</p>
                </div>
                <div className='col-md-3 col-4'>
                    <h2>100+</h2>
                    <p>Countries</p>
                </div>
                <div className='col-md-3 col-4'>
                    <h2>20</h2>
                    <p>Speakers</p>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default Jumbotron;