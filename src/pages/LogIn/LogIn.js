import { Box, Container } from "@chakra-ui/react"
import { useState } from "react"
import { LogInForm } from "../../components/LogInForm"
import { RegisterForm } from "../../components/RegisterForm"
// import logo from '../../imgs/logo__large_plus.png'
import './login.css'

export const LogIn = () => {

    const [accountCreated, setAccountCreated] = useState(false)

    return (
        <>
            <Container backgroundColor='#EBEBEB' h='100%' minH='100vh' w='100%' maxW='100%' p='0' position='relative' display='flex' justifyContent='center' >
                <Box backgroundColor='#FFF059' h='250px' w='100%'>
                    {/* <Img src={logo} ml='1em' mt='1em' /> */}
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
        </>
    )
}
