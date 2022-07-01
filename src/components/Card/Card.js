import { Link } from "react-router-dom"
import { FavButton } from '../FavButton/FavBtn';

export default function Card({ prod }) {
    return (
        <>
            <Link to={`/products/${prod.id}`} data-id={prod.id} className='card-container'>
                <div className="card">
                    <img className="card-img" src={prod.thumbnail} alt="product descriptive img" />
                    <FavButton prod={prod} />
                    <div className="card-info">
                        <span className="card-price">{prod.currency_id ? (prod.currency_id === "USD" ? `U$S ${Math.round((prod.price)).toLocaleString('es-AR')}` : `$ ${Math.round((prod.price)).toLocaleString('es-AR')}`) : `$${prod.price.toLocaleString('es-AR')}`}</span>
                        <p className="card-desc">{(prod.title.split(" ").length) >= 7 ? prod.title.split(" ").slice(0, 7).join(" ") + "..." : prod.title}</p>
                        <p className="card-extrainfo">{prod.address?.city_name !== undefined ? `${prod.address?.city_name} - ${prod.address?.state_name}` : null}</p>
                    </div>
                </div>
            </Link>
        </>
    )
}
