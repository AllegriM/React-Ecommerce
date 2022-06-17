
// Get category Path of ITEM

export default function setCategoryPath ({prodId}, setCategory){
    fetch(`https://api.mercadolibre.com/items/${prodId}/`)
        .then( ( resp ) => resp.json() )
        .then( ( data ) => getCategoryPath(data.category_id, setCategory) )
}

const getCategoryPath = (category, setCategory) => {
    fetch(`https://api.mercadolibre.com/categories/${category}`)
        .then( ( resp ) => resp.json() )
        .then( ( data ) =>  setCategory(data.path_from_root))
}

    