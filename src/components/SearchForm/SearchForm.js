import { useNavigate } from 'react-router-dom';

export const SearchForm = ( props ) => {

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const keyword = e.target.elements.keyword.value.trim()
        if (keyword) {
            navigate(`/search/${keyword}`)
        }
    }

    console.log(props)
    return (
        <>
            <div className='nav-search' >
                <form onSubmit={handleSubmit}>
                    <input name='keyword' className='search-bar' id='searchBar' type='text' placeholder='Buscar productos, marcas y mas...' />
                    <button className='search-icon'>
                        <div role='img' aria-label='buscar' className='loop-icon'></div>
                    </button>
                </form>
            </div>
        </>
    )
}