import React from 'react'
import { Link } from 'react-router-dom'
import './error.css'

export const PageNotFound = () => {


    return (
        <>
            <section className='error-bg'>
                <h1 className='error-number'>404</h1>
                <h3 className='error-title'>Pagina No Encontrada</h3>
                <p className='error-desc'>Parece que la pagina que estas buscando no existe</p>
                <Link to={"/"}><button className='error-btn'>Go Back Home</button></Link>
            </section>
        </>
    )
}
