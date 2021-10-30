import React from 'react';

const Card = (props) => {
    return (
        <>
            <div className="col-sm-6 pt-3 center-container">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-header bg-primary text-white">{props.title}</h5>
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;