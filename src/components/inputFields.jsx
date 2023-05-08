import React, { Component } from 'react';

const InputFields = (props) => {
    return ( 
        <React.Fragment>
            {props.input.qoutes.map((a,index) => 
                <input
                type="text"
                key={index}
                value={a}
                className="text col-5 m-3"
                placeholder={`qoute${index + 1}`}
                name={`${index}`}
                onChange={props.handleChange}
                />)}
        </React.Fragment>
     );
}
 
export default InputFields;