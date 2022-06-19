// GET REVIEW DATA

export default async function getReviewData ( {prodId}, setReview ) {
    try{
        const response = await fetch(`https://api.mercadolibre.com/reviews/item/${prodId}`);
        const data = await response.json();
        const resolve = await setReview(data)
        return resolve
    }
    catch(error) {
        console.log('Fetch error: ', error);
    }
}