import { Box, Container, Text } from "@chakra-ui/react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { LogInForm } from "../../components/LogInForm"
import { RegisterForm } from "../../components/RegisterForm"
import { useAuth } from "../../Context/authContext"
import './login.css'

export const LogIn = () => {

    const { user } = useAuth()
    const navigate = useNavigate()
    const [accountCreated, setAccountCreated] = useState(false)

    return (
        <>
            {
                user !== null ? navigate("/home")
                    :
                    <Container backgroundColor='#EBEBEB' h='100%' minH='100vh' w='100%' maxW='100%' p='0' position='relative' display='flex' justifyContent='center' >
                        <Box backgroundColor='#FFF059' h='250px' w='100%'>
                            <Text fontWeight='900' m='0' color='#28317E'>CadoMerLibre</Text>
                        </Box>
                        <Box top='10%' position='absolute' margin='0 auto' boxShadow='0 1px 2px 0 rgb(0 0 0 / 30%)' borderRadius='6px' flex backgroundColor='#FFFFFF' minH='34rem' w='300px' maxW='424px' padding='32px 64px'>
                            {
                                accountCreated ?
                                    <RegisterForm
                                        setAccountCreated={setAccountCreated}
                                    />
                                    :
                                    <LogInForm
                                        setAccountCreated={setAccountCreated}
                                    />
                            }
                        </Box>
                    </Container>
            }

        </>
    )
}
