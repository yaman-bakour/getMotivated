import React, { Component } from 'react';

const Qoutes = (props) => {

    return ( 
        <React.Fragment>
            {props.input.qoutes.map((a , index) => 
                <p
                key={index}
                onMouseDown={props.handleDragState}
                onMouseUp={props.handleDragState}
                style={{position : "absolute",
                        left : "35%",
                        top : "5%",
                        fontWeight : "bold",
                        color : props.input.color,
                        fontFamily : props.input.fontFamily,
                        fontSize : props.input.fontSize}}
                >
                    {a}
                </p>
            )}
        </React.Fragment>
     );
}
 
export default Qoutes;