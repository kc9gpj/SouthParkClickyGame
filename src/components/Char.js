import React from 'react';

const Char = props => (
    <div className="col-md-2">
        <div className="card mb-3">
            <img className="card-img-top" src={props.src} alt={props.alt} onClick={props.handleClick} id={props.id}/>
        </div>
    </div>
)

export default Char;