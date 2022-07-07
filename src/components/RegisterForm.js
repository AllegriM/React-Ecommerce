import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input, Text } from "@chakra-ui/react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/authContext";
import theme from "../theme";

export const RegisterForm = ({ setAccountCreated }) => {

    const { signUp } = useAuth();
    const navigate = useNavigate()

    // States storing register data
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // States storing errors in register fields
    const [nameError, setNameError] = useState(false);
    const [lastNameError, setLastError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    // Register input regex to prevent errors when registering 
    let namesReg = /^(?!\s)([a-z ,.'-]+)$/i
    // eslint-disable-next-line no-useless-escape
    let emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g
    //Minimum eight characters, at least one CAP letter  and one number:
    let passwordReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g


    // General verification of regexs on each input when pressing register button
    const createUserBtn = async () => {
        let isError = false
        if (!namesReg.test(firstName)) { setNameError(true); isError = true } else { setNameError(false) }
        if (!namesReg.test(lastName)) { setLastError(true); isError = true } else { setLastError(false) }
        if (!emailReg.test(email)) { setEmailError(true); isError = true } else { setEmailError(false) }
        if (!passwordReg.test(password)) { setPasswordError(true); isError = true } else { setPasswordError(false) }
        if (!isError) {
            await setAccountCreated(false)
            await signUp(email, password, firstName, lastName);
            navigate("/")
        }
    }

    // Input handlers 
    const handleName = (e) => {
        setFirstName(e.target.value)
        setNameError(false)
    }

    const handleLastName = (e) => {
        setLastName(e.target.value)
        setLastError(false)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
        setEmailError(false)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
        setPasswordError(false)
    }

    return (
        <Box>
            <Box>
                <Text color='rgba(0, 0, 0, 0.9)' fontSize='28px' fontWeight='600' textAlign='center' mb='0'>Completá tus datos</Text>
                <Text color={theme.colors.blue} textAlign='center' fontSize='15px' mt='.5em'>O creá una cuenta de empresa</Text>
            </Box>
            <Box mt='2em'>
                <FormControl variant="floating" id="first-name" isInvalid mt='2em'>
                    <Input
                        value={firstName}
                        onChange={handleName}
                        className='form-input'
                        borderColor='none'
                        isInvalid={nameError}
                        border='none'
                        borderRadius='0'
                        boxShadow='none'
                        borderBottom='1px solid grey'
                        placeholder=" "
                        w='auto'
                    />
                    <FormLabel htmlFor='first-name'>Nombre</FormLabel>
                    {
                        nameError ?

                            <FormErrorMessage>Asegurate de que no contenga numeros ni caracteres especiales.</FormErrorMessage>
                            :
                            null
                    }

                </FormControl>
                <FormControl variant="floating" id="last-name" isInvalid mt='2em'>
                    <Input
                        value={lastName}
                        onChange={handleLastName}
                        className='form-input'
                        borderColor='none'
                        isInvalid={lastNameError}
                        border='none'
                        borderRadius='0'
                        boxShadow='none'
                        borderBottom='1px solid grey'
                        placeholder=" "
                        w='auto'
                    />
                    <FormLabel htmlFor='last-name'>Apellido</FormLabel>
                    {
                        lastNameError ?
                            <FormErrorMessage>Asegurate de que no contenga numeros ni caracteres especiales.</FormErrorMessage>
                            :
                            null
                    }

                </FormControl>

                <FormControl variant="floating" id="email" isInvalid mt='2em'>
                    <Input
                        value={email}
                        type="email"
                        onChange={handleEmail}
                        className='form-input'
                        borderColor='none'
                        isInvalid={emailError}
                        border='none'
                        borderRadius='0'
                        boxShadow='none'
                        borderBottom='1px solid grey'
                        placeholder=" "
                        w='auto'
                    />
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    {
                        emailError ?
                            <FormErrorMessage>{`Email invalido. Asegurate que contenga "@" y finalice con ".com"`}</FormErrorMessage>
                            :
                            null
                    }

                </FormControl>

                <FormControl variant="floating" id="password" isInvalid mt='2em'>
                    <Input
                        value={password}
                        type='password'
                        onChange={handlePassword}
                        className='form-input'
                        borderColor='none'
                        isInvalid={passwordError}
                        border='none'
                        borderRadius='0'
                        boxShadow='none'
                        borderBottom='1px solid grey'
                        placeholder=" "
                        w='auto'
                    />
                    <FormLabel htmlFor='password'>Clave</FormLabel>
                    {
                        passwordError ?

                            <FormErrorMessage>Minimo ocho caracteres, una letra mayúscula y un numero.</FormErrorMessage>
                            :
                            null
                    }

                </FormControl>
            </Box>
            <Box mt='1.5em' textAlign='center'>
                <Button onClick={createUserBtn} type="submit" className="btn-submit btn-azul" aria-disabled="false" h='48px' w='250px'>Crear cuenta</Button>
            </Box>
            <Box mt='1em' textAlign='center'>
                <Button onClick={() => setAccountCreated(false)} type="submit" className="btn-submit btn-azulaseo" aria-disabled="false" h='48px' w='250px'>Iniciar sesion</Button>
            </Box>
        </Box>
    )
}
