
// Home t-shirt rendering

export default function fetchLastVisitData( setProd ) {
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=pantalon`)
    .then( ( resp ) => resp.json() )
    .then( ( data ) => setProd(data.results.slice(0, 5)) )
    .catch((error)=> {console.log(error)})

}
