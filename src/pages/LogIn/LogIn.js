import { Box, Container, Img } from "@chakra-ui/react"
import { useState } from "react"
import { LogInForm } from "../../components/LogInForm"
import { RegisterForm } from "../../components/RegisterForm"
import logo from '../../imgs/logo__large_plus.png'
import './login.css'

export const LogIn = () => {

    const [accountCreated, setAccountCreated] = useState(false)

    return (
        <Container backgroundColor='#EBEBEB' h='100vh' w='100%' maxW='100%' p='0' position='relative'>
            <Box backgroundColor='#FFF059' h='250px'>
                <Img src={logo} ml='1em' mt='1em' />
                <Box textAlign='center' top='10%' left='30%' position='absolute' margin='0 auto' boxShadow='0 1px 2px 0 rgb(0 0 0 / 30%)' borderRadius='6px' flex backgroundColor='#FFFFFF' minH='34rem' w='300px' maxW='424px' padding='32px 64px'>
                {
                    accountCreated ?
                        <LogInForm
                            setAccountCreated={setAccountCreated}
                        />
                        :
                        <RegisterForm
                            setAccountCreated={setAccountCreated}
                        />
                }
            </Box>
            </Box>
        </Container>
    )
}
