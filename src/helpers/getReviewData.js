// GET REVIEW DATA

export default async function getReviewData( {prodId} ){
    try {
        const resp = await fetch(`https://api.mercadolibre.com/reviews/item/${prodId}`);
        return await resp.json();
    } catch (error) {
        console.log('Fetch error: ', error)
    }   
}
