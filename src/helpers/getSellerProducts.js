// Get products of the seller


export default function getSellerID ( {prodId}, setItems ){
    fetch(`https://api.mercadolibre.com/items/${prodId}`)
        .then( ( resp ) => resp.json() )
        .then( ( data ) => getSellerItems(data.seller_id, setItems) )
        .catch((error)=> {console.log(error)})
}

const getSellerItems = (sellerId, setItems) => {
    fetch(`https://api.mercadolibre.com/sites/MLA/search?seller_id=${sellerId}`)
        .then( ( resp ) => resp.json() )
        .then( ( data ) =>  setItems(data.results))
        .catch((error)=> {console.log(error)})

}
