import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/authContext";
import theme from "../theme";

export const LogInForm = ({ setAccountCreated }) => {
    
    // Firebase login functionality

    const { logIn, emailError, passwordError } = useAuth()
    const navigate = useNavigate()

    const [logInemail, setLogInEmail] = useState("");
    const [logInpassword, setLogInPassword] = useState("");

    // handlers for input info
    const handleEmail = (e) => {
        setLogInEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setLogInPassword(e.target.value)
    }

    // function passed email & password from above states to execute on context
    const verifyLogIn = async (e) => {
        e.preventDefault()
        await logIn(logInemail, logInpassword)
        navigate('/home')
    }

    // Guest user

    const guestUser = {
        user: "guest@gmail.com",
        password: "Guest1234"
    }
    
    // Send guestUser as params to pre-created firebase guest user acc
    const enterAsGuest = async() =>{
        await logIn(guestUser.user, guestUser.password)
        navigate('/home')
    }

    return (
        <>
            <Box>
                <Text color='rgba(0, 0, 0, 0.9)' fontSize='28px' fontWeight='600' textAlign='center' mb='0'>¡Hola! Ingresá tu teléfono, e‑mail o usuario</Text>
            </Box>
            <Box mt='2em'>
                <FormControl variant="floating" id="email" mt='2em' width='100%'>
                    <Input
                        required
                        value={logInemail}
                        type="email"
                        onChange={handleEmail}
                        border="1px solid grey"
                        _focus={{ border: `2px solid ${theme.colors.blue}` }}
                        isInvalid={emailError}
                        borderRadius='.375rem'
                        placeholder=" "
                        maxW='260px'
                        borderColor='#bebebe'
                    />
                    {/* It is important that the Label comes after the Control due to css selectors */}
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <FormErrorMessage>{emailError ? "Ese email no existe, o no es valido." : null}</FormErrorMessage>
                </FormControl>

                <FormControl variant="floating" id="password" mt='2em'>
                    <Input
                        required
                        value={logInpassword}
                        type='password'
                        onChange={handlePassword}
                        border="1px solid grey"
                        _focus={{ border: `2px solid ${theme.colors.blue}` }}
                        isInvalid={passwordError}
                        borderRadius='.375rem'
                        placeholder=" "
                        maxW='260px'
                        borderColor='#bebebe'
                    />
                    {/* It is important that the Label comes after the Control due to css selectors */}
                    <FormLabel htmlFor='password'>Clave</FormLabel>
                    <FormErrorMessage>{passwordError ? "Esa contraseña no existe, o no es valida" : null}</FormErrorMessage>

                </FormControl>
            </Box>
            <Link to='/forgot-password'>
                <Text textAlign='center' color={theme.colors.blue}>¿Olvidaste tu contraseña?</Text>
            </Link>
            <Box mt='1.5em' textAlign='center'>
                <Button onClick={verifyLogIn} type="submit" className="btn-submit btn-azul" aria-disabled="false" h='48px' w='250px'>Ingresar</Button>
            </Box>
            <Box mt='1em' textAlign='center'>
                <Button onClick={() => setAccountCreated(true)} type="submit" className="btn-submit btn-azul" aria-disabled="false" h='48px' w='250px'>Crear cuenta</Button>
            </Box>
            <Box mt='1em' textAlign='center'>
                <Button onClick={() => enterAsGuest("/home")} className="btn-submit btn-azulaseo" aria-disabled="false" h='48px' w='250px'>Ingresar como invitado</Button>
            </Box>
        </>
    )
}

