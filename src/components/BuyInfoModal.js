import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useCartContext } from "../Context/cartContext"
import { sendOrder } from "../helpers/createFbOrder"
import { useForm } from "react-hook-form";

function BuyInfoModal({ onClose, isOpen }) {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const { cart, setCart, setOrderId } = useCartContext()

    const [loader, setLoader] = useState(false)

    const navigate = useNavigate()
        
    // functions excuted when clicking buy cart
    const buyCartItems = async (userData) => {
        await sendOrder(cart, userData)
        .then(resp => setOrderId(resp.id))
        setLoader(true)
        setTimeout(() => {
            setCart([])
            navigate('/order-purchased')
        }, 1000)
    }

    const onSubmit = values => {
        if (values) {
            buyCartItems(values)
        }
    }

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Termine su compra!</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <form className="prebuy-form" onSubmit={handleSubmit(onSubmit)}>
                        <FormControl id='name' isInvalid={errors?.name}>
                            <FormLabel>Nombre</FormLabel>
                            <Input
                                isRequired
                                type='name'
                                {...register("name", { required: true, pattern: /^[a-zA-Z ]+$/ })}
                                placeholder='Nombre'
                                w='90%'
                            />
                        </FormControl>

                        <FormControl mt={4} id='lastname' isInvalid={errors?.lastname}>
                            <FormLabel>Apellido</FormLabel>
                            <Input
                                isRequired
                                type='lastname'
                                {...register("lastname", { required: true, pattern: /^[a-zA-Z ]+$/ })}
                                placeholder='Apellido'
                                w='90%'
                            />
                        </FormControl>

                        <FormControl mt={4} id='email' isInvalid={errors?.email}>
                            <FormLabel>Correo electrónico</FormLabel>
                            <Input
                                isRequired
                                // eslint-disable-next-line no-useless-escape
                                {...register("email", { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ })}
                                placeholder='Correo electrónico'
                                w='90%'
                            />
                        </FormControl>

                        <FormControl mt={4} id='phone' isInvalid={errors?.phone}>
                            <FormLabel>Telefono</FormLabel>
                            <Input
                                isRequired
                                type='phone'
                                // eslint-disable-next-line no-useless-escape
                                {...register("phone", { required: true, pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/ })}
                                placeholder='Teléfono'
                                w='90%'
                            />

                        </FormControl>
                        <Button
                            type='submit'
                            isLoading={loader}
                            colorScheme='blue'
                            textAlign='flex-end'
                            bg='darkgreen'
                            color='white'
                            mt='1em'
                        >
                            Comprar
                        </Button>
                    </form>
                </ModalBody>

                <ModalFooter>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default BuyInfoModal
