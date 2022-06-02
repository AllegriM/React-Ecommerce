// Obtener valor de input

function searchProduct() {
    let searchBar = document.querySelector('.search-bar');
    // let searchBtn = document.querySelector('.search-icon');
    searchBar.addEventListener("keyup", (e) => {
        if (e.keyCode === 13) {
            console.log(`Usted esta buscando: ${searchBar.value}`)
            fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${searchBar.value}`)
                .then((resp) => resp.json())
                .then((response) =>
                    [response.results].map(data => {
                        return data.map(item => {
                            console.log(item)
                            const { title, price, id, thumbnail } = item;
                            return { title, price, id, thumbnail }
                        })
                    }))
                .catch((error) => error)
        }
    })
}

export default searchProduct;
