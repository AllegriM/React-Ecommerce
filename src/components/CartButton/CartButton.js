
export const CartButton = ( {addItem, cart, item, prodAmount} ) => {

    const addToCart = () =>{
        addItem([...cart, {...item, cantidadElegida: prodAmount}])
    }

    console.log(cart)

    return (
        <button type="submit" className="btn-submit btn-azulaseo" aria-disabled="false" onClick={addToCart}>
            <span className="andes-button__content">Agregar al carrito</span>
        </button>
    )
}
