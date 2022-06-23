// GET REVIEW DATA

export default async function getReviewData( {prodId}, setReview ){
    try {
        const resp = await fetch(`https://api.mercadolibre.com/reviews/item/${prodId}`);
        const data = await resp.json();
        const setter = await setReview(data);
        return setter
    } catch (error) {
        console.log('Fetch error: ', error)
    }   
}
