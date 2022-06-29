import { HomeItemProducts } from "../HomeItemProducts/HomeItemProducts"

export default function ProductSection ( { title, products } ) {

    return (
        <div className="cards-related">
            <div className="cards-title">
                <h2 className="card-title">{title}</h2>
                <p className="text-blue">Ver historial</p>
            </div>
            <div className="product-slider">
                <HomeItemProducts data={products} />
            </div>
        </div>
    )
}