// GET REVIEW DATA

export default async function getReviewData( {prodId} ){
    try {
        const resp = await fetch(`https://api.mercadolibre.com/reviews/item/${prodId}`);
        return await resp.json();
        // const setter = () => {
        //     setReview(data)
        //     setProdReview({numberOfStars: (data.rating_average), total: data.paging.total})
        // }
    } catch (error) {
        console.log('Fetch error: ', error)
    }   
}
