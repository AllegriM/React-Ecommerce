import React from 'react';

export default function Card(props) {
return (
    <>
        <div className="card">
            <img className="card-img" src={props.img} />
                <div className="card-info">
                    <span className="card-price">{props.price}</span>
                    <p className="card-desc">{props.desc}</p>
                    <p className="card-extrainfo">{props.extrainfo}</p>
            </div>
        </div>
    </>
    )
}
