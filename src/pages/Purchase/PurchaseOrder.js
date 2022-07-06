import { Box, Button, Container, Image, Img, Text, ListItem, UnorderedList, CircularProgress } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../Context/cartContext"
import logo from '../../imgs/logo__large_plus.png'
import orderIcon from '../../imgs/order-purchased.png'
import { getOrder } from '../../helpers/getFbOrder'


export const PurchaseOrder = () => {

    const [orderData, setOrderData] = useState([])
    const [loading, setLoading] = useState(true)
    const { orderId } = useCartContext()


    useEffect(() => {
        getOrder()
            .then(snapshot => {
                setTimeout(() => {
                    const orders = []
                    snapshot.docs.forEach((doc) => {
                        orders.push({ ...doc.data(), id: doc.id })
                    })
                    setOrderData(orders.find(order => order.id === orderId))
                    setLoading(false)
                }, 2500)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        loading ?
            <Container minH='100vh' h='100%' className="preparing-order" display='flex' justifyContent='center' alignItems='center'>
                <Box display='flex' flexDirection='column' alignItems='center' h='100%'>
                    <Text m='0' fontSize='42px'>Preparando la orden...</Text>
                    <CircularProgress isIndeterminate color='green.300' />
                </Box>
            </Container>
            :

            <Container bg='#EBEBEB' minH='100vh' h='100%' w='100%' maxW='100%' p='0' position='relative'>
                <Box bg='#FFF059' h='60px' w='100%'>
                    <Img src={logo} ml='1em' mt='1em' />
                </Box>
                <Box bg='#26B46A' h='50%' w='100%' display='flex' pt='5em' flexDirection='column' alignItems='center' position='relative' pb='2em'>
                    <Image src={orderIcon} />
                    <Text m='0' fontSize='32px' color='white' fontWeight='600'>¡Listo! Se acreditó tu pago</Text>
                    <Text m='0' fontSize='24px' color='white' fontWeight='400'>Operación: {orderId}</Text>
                </Box>
                <Box mt='1em' width='100%' display='flex' justifyContent='center'>
                    <Box margin='0 auto' boxShadow='0 1px 2px 0 rgb(0 0 0 / 30%)' borderRadius='6px' flex bg='#FFFFFF' h='auto' minH='20rem' w='500px' maxW='700px' textAlign='center' >
                        <Text fontSize='24px' fontWeight='600' >Te avisaremos cuando puedas retirarla</Text>
                        <Text fontSize='16px' px='50px'>Un resumen de la compra fue enviado al email de {orderData.buyer?.name}: {orderData.buyer?.email}</Text>
                        <Text mt='5em' fontSize='15px' fontWeight='600' color='#8d8d8d'>Detalles de tu compra:</Text>
                        <UnorderedList>
                            {
                                orderData.items?.map((item, index) => {
                                    return (
                                        <ListItem key={index} px='20px' fontSize='13px' w='auto'>
                                            {item?.title} <strong>({item?.quantity > 1 ? `${item?.quantity} unidades` : "1 unidad"})</strong>
                                        </ListItem>
                                    )
                                })
                            }
                        </UnorderedList>
                        <Button mt='2em' className="btn-submit btn-azul" w='250px' mb='1em'>
                            <Link to='/home' style={{ textDecoration: 'none', color: "white" }}>Volver a comprar</Link>
                        </Button>
                    </Box>
                </Box>
            </Container>

    )
}
