import React from 'react'
import { Link } from "react-router-dom"


export const ProductCard = (props) => {
    console.log(props)
    return (
        <>
            <Link to={`/product/${props.data.title}/p/${props.data.id}`} className="card" key={props.data.id}>
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
