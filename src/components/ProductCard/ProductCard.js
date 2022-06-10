import React from 'react'
import { Link } from "react-router-dom"
import Card from '../Main/cards/Card'


export const ProductCard = (props) => {
    return (
        <>
            <Link to={`/products/${props.data.id}`} key={props.data.id} className="card">
                <img className="card-img" src={props.data.thumbnail} alt="product descriptive img" />
                <div className="card-info">
                    <span className="card-price">{`$${props.data.price}`}</span>
                    <p className="card-extrainfo">{props.data.title}</p>
                    <p className="card-extrainfo">{props.data.address.city_name} - {props.data.address.state_name}</p>
                </div>
            </Link>
        </>
    )
}
