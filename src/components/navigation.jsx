import React, { Component } from 'react';


const Navigation = (props) => {
    // props.data[0].logoes.logotop // props.data[0].sections.[elements]
    return ( 
        <React.Fragment>
            <div className='navigation'>
                <nav className='navbar navbar-expand-lg navbar-light bg-light pr-5'>
                    <a className='ps-3 navbar-brand w-50' href="">
                        <img className='w-50' src={require(`../imgs/${props.data[0].logoes.logotop}`)} alt="" />
                    </a>
                    <button className='navbar-toggler' data-toggle="collapse" data-target='#nav'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className="collapse navbar-collapse" id='nav'>
                        <ul className='navbar-nav justify-content-between w-100 text-center'>
                            {props.data[0].sections.map(a => 
                                props.data[0].sections.indexOf(a) == 0 ?
                                <li key={props.data[0].sections.indexOf(a) } className='nav-item active'>
                                    <a className='nav-link active' href="">{a}</a>
                                </li>:
                                <li key={props.data[0].sections.indexOf(a) } className='nav-item'>
                                    <a className='nav-link' href="">{a}</a>
                                </li>)}
                        </ul>
                    </div>
                </nav>
            </div>
        </React.Fragment>
     );
}
 
export default Navigation;