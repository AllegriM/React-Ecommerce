import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route, Routes } from "react-router-dom"


export default function Card(props) {
return (
    <Link to='/Product' className="card" key={props.product.id}>
        <img className="card-img" src={props.product.img} alt="product descriptive img" />
            <div className="card-info">
                <span className="card-price">{props.product.price}</span>
                <p className="card-desc">{props.product.desc}</p>
                <p className="card-extrainfo">{props.product.extrainfo}</p>
            </div>
    </Link>
    )
}
