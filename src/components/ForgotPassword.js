import { Box, Button, FormControl, FormLabel, Input, Text, Container, Img } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import theme from "../theme";
import logo from '../imgs/logo__large_plus.png'
import { useState } from "react";
import { useAuth } from "../Context/authContext";


export default function ForgotPassword() {

    const { resetPassword, errorMessage, message } = useAuth()
    const [ loading, setLoading ] = useState(false)
    const [ email, resetEmail] = useState("");

    // Executes a restore email function on useAuth Context
    const submitEmail = async (e) => {
        e.preventDefault()
        setLoading(true)
        try{
            setLoading(false)
            resetPassword(email)
        }
        catch(error){
            console.log(error)
        }
    }
    
    // handle email data to passit to above function
    const handleEmail = (e) => {
        resetEmail(e.target.value)
    }

    const navigate = useNavigate()
    return (
        <>
            <Container backgroundColor='#EBEBEB' h='100vh' w='100%' maxW='100%' p='0' position='relative' display='flex' justifyContent='center'>
                <Box backgroundColor='#FFF059' h='250px' w='100%'>
                    <Img src={logo} ml='1em' mt='1em' />
                </Box>
                <Box top='10%' position='absolute' margin='0 auto' boxShadow='0 1px 2px 0 rgb(0 0 0 / 30%)' borderRadius='6px' flex backgroundColor='#FFFFFF' minH='28rem' w='300px' maxW='424px' padding='32px 64px'>
                    <Box>
                        <Text color='rgba(0, 0, 0, 0.9)' fontSize='28px' fontWeight='600' textAlign='center' mb='0'>¡Hola! Ingresá tu teléfono, e‑mail o usuario</Text>
                    </Box>
                    <Box mt='2em'>
                        {
                            errorMessage ? <Text fontWeight='600' fontSize='14px' color='red'>{errorMessage}</Text> : <Text fontWeight='600' fontSize='14px'>{message}</Text>
                        }
                        <FormControl variant="floating" id="email" mt='2em' width='100%'>
                            <Input
                                value={email}
                                type="email"
                                onChange={handleEmail}
                                border="1px solid grey"
                                _focus={{ border: `2px solid ${theme.colors.blue}` }}
                                borderRadius='.375rem'
                                placeholder=" "
                                maxW='260px'
                                borderColor='#bebebe'
                            />
                            {/* It is important that the Label comes after the Control due to css selectors */}
                            <FormLabel htmlFor='email'>Email</FormLabel>
                        </FormControl>
                    </Box>
                    <Box mt='1.5em' textAlign='center'>
                        <Button onClick={submitEmail} disabled={loading} type="submit" className="btn-submit btn-azul" aria-disabled="false" h='48px' w='250px'>Resetear Contraseña</Button>
                    </Box>
                    <Box mt='1em' textAlign='center'>
                        <Button onClick={() => navigate("/")} className="btn-submit btn-azulaseo" aria-disabled="false" h='48px' w='250px'>Entrar</Button>
                    </Box>
                </Box>
            </Container>
        </>
    )
}
