export const SearchForm = ( props ) => {
    return (
        <>
            <div className='nav-search' >
                <form onSubmit={props.handleSubmit}>
                    <input value={props.keyword} onChange={props.handleChange} className='search-bar' id='searchBar' type='text' placeholder='Buscar productos, marcas y mas...' />
                    <button className='search-icon'>
                        <div role='img' aria-label='buscar' className='loop-icon'></div>
                    </button>
                </form>
            </div>
        </>
    )
}