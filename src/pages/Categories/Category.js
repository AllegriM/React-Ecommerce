// import ProductSection from "../../components/Main/ProductSection"
import { Spinner, Stack } from "@chakra-ui/react"
import ProductSection from "../../components/Main/ProductSection"
import Navbar from "../../components/Nav/Navbar"
import { useCategoryProducts } from "../../hooks/useCategoryProducts"

function Category( {category, title}) {
    
    const [prods, loading] = useCategoryProducts(category)
    return (
        <>
            <Navbar />
            {
                !loading ? 
                <ProductSection products={prods} title={title}/>
                : 
                <Stack align='center' justify='center' height='80vh'>
                    <Spinner size='xl' />
                </Stack>
            }
            
        </>
    )
}

export default Category