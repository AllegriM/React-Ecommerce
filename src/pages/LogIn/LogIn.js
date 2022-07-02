import { Box, Button, Container, FormControl, FormLabel, Input, Text } from "@chakra-ui/react"
import theme from '../../theme'
import './login.css'

export const LogIn = () => {

    return (
        <Container backgroundColor='#EBEBEB' h='100vh' maxW='90%'>
            <Box mt='5em' mx='auto' boxShadow='0 1px 2px 0 rgb(0 0 0 / 30%)' borderRadius='6px' flex backgroundColor='#FFFFFF' minH='34rem' w='300px' maxW='424px' padding='32px 64px 0px 64px'>
                <Box>
                    <Text color='rgba(0, 0, 0, 0.9)' fontSize='28px' fontWeight='600' textAlign='center' mb='0'>Completá tus datos</Text>
                    <Text color={theme.colors.blue} textAlign='center' fontSize='15px' mt='.5em'>O creá una cuenta de empresa</Text>
                </Box>
                <Box mt='2em'>
                    <FormControl variant="floating" id="first-name" isInvalid mt='2em'>
                        <Input className='form-input' borderColor='none' isInvalid='false' border='none' borderRadius='0' boxShadow='none' borderBottom='1px solid grey' placeholder=" " w='100%'/>
                        <FormLabel htmlFor='first-name'>Nombre</FormLabel>
                        {/* <FormErrorMessage>Your First name is invalid</FormErrorMessage> */}

                    </FormControl>
                    <FormControl variant="floating" id="last-name" isInvalid mt='2em'>
                        <Input className='form-input' borderColor='none' isInvalid='false' border='none' borderRadius='0' boxShadow='none' borderBottom='1px solid grey' placeholder=" " w='100%'/>
                        {/* It is important that the Label comes after the Control due to css selectors */}
                        <FormLabel htmlFor='last-name'>Apellido</FormLabel>
                        {/* <FormErrorMessage>Your First name is invalid</FormErrorMessage> */}

                    </FormControl>

                    <FormControl variant="floating" id="email" isInvalid mt='2em'>
                        <Input className='form-input' borderColor='none' isInvalid='false' border='none' borderRadius='0' boxShadow='none' borderBottom='1px solid grey' placeholder=" " w='100%'/>
                        {/* It is important that the Label comes after the Control due to css selectors */}
                        <FormLabel htmlFor='email'>Email</FormLabel>
                        {/* <FormErrorMessage>Your First name is invalid</FormErrorMessage> */}

                    </FormControl>

                    <FormControl variant="floating" id="password" isInvalid mt='2em'>
                        <Input className='form-input' borderColor='none' isInvalid='false' border='none' borderRadius='0' boxShadow='none' borderBottom='1px solid grey' placeholder=" " w='100%'/>
                        {/* It is important that the Label comes after the Control due to css selectors */}
                        <FormLabel htmlFor='password'>Clave</FormLabel>
                        {/* <FormErrorMessage>Your First name is invalid</FormErrorMessage> */}

                    </FormControl>
                </Box>
                <Box mt='1.5em' textAlign='center'>
                    <Button type="submit" className="btn-submit btn-azul" aria-disabled="false" h='48px' w='250px'>Crear cuenta</Button>
                </Box>
            </Box>
        </Container>
    )
}
