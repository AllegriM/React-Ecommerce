import Card from "../Card/Card"

export default function ProductSection ( { title, products } ) {

    // Sections at home page where 5 items are displayed
    return (
        <div className="cards-related">
            <div className="cards-title">
                <h2 className="card-title">{title}</h2>
                <p className="text-blue">Ver historial</p>
            </div>
            <div className="product-slider">
                {
                    products.map((prod) => (<Card prod={prod} key={prod.id} />))
                }
            </div>
        </div>
    )
}