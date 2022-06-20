// GET REVIEW DATA

export default function getReviewData ( {prodId}, setReview ) {
    fetch(`https://api.mercadolibre.com/reviews/item/${prodId}`)
    .then( ( resp ) => resp.json() )
    .then( ( data ) => setReview(data) )
    .catch( (error) => {console.log('Fetch error: ', error)})        
}