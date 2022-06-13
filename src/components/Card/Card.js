import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Link, Route, Routes } from "react-router-dom"


export default function Card(props) {

    return (
    <>
        <Link to={`/products/${props.prod.id}`} data-id={props.prod.id} className="card">
            <img className="card-img" src={props.prod.thumbnail} alt="product descriptive img" />
            <button className="heartFav">
                <svg xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 32" width="20" height="23"><path d="M30.4 16q1.5-1.3 2-2.6t.6-3q0-1.4-.7-3T30.6 5q-1.4-1.2-2.4-1.6T25.8 3q-1.5 0-3 .6t-2.6 2l-2 2-2.3-2q-1.8-1.4-3-2T10.2 3t-2.6.4T5.3 5q-1 .7-1.6 2.4t-.7 3q0 1.4.6 3T5.4 16L18 28l12.4-12zM0 10.5q0-1.7.8-4t2.6-3.8Q5 1.2 6.7.7t3.6-.7q2 0 3.8.8t4 2.7q2-2 4-2.7t4-.8 3.4.6 3.3 2Q34.3 4 35 6.3t1 4-.6 4-3 4L18 32 3.4 18.2Q1 16 .4 13.7T0 10.4z" fill="#3483FA"></path></svg>
            </button>
            <div className="card-info">
                <span className="card-price">${props.prod.price}</span>
                <p className="card-desc">{props.prod.title}</p>
                <p className="card-extrainfo">{props.prod.address.city_name} - {props.prod.address.state_name}</p>
            </div>
        </Link>
    </>
    )
}
