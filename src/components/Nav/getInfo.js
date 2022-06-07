

export default function getInfo() {
    let searchBar = document.querySelector("#searchBar");
    let searchValue = searchBar.value;
    searchBar.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
            console.log(searchValue)
            return searchValue;
        }
    })
}
