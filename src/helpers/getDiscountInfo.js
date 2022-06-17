
// Home t-shirt rendering

export default function fetchLastVisitData (setImg) {
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=remeras`)
    .then( ( resp ) => resp.json() )
    .then( ( data ) => setImg(data.results.slice(0, 5)) )
}
