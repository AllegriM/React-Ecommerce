import { Container } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import './error.css'

// Error page when URL doesn't matc
export const PageNotFound = ( ) => {


    return (
        <>
            <Container className='error-bg' h='100vh' p='0' w='100%' maxW='100%'>
                <h1 className='error-number'>404</h1>
                <h3 className='error-title'>Pagina No Encontrada</h3>
                <p className='error-desc'>Parece que la pagina que estas buscando no existe</p>
                <Link to={"/"}><button className='error-btn'>Go Back Home</button></Link>
            </Container>
        </>
    )
}
