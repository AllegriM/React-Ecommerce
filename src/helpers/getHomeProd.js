
// Home t-shirt rendering

export default function fetchLastVisitData( setProd ) {
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=remeras`)
    .then( ( resp ) => resp.json() )
    .then( ( data ) => setProd(data.results.slice(0, 5)) )
}
