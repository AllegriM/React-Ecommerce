import { createContext, useContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import { auth } from "../firebase/config"

export const AuthContext = createContext([])

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) throw new Error("There is no auth provider")
    return context
}
export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const [loading, setLoading] = useState(true)

    const [log, setLog] = useState(false)

    const [emailError, setEmailError] = useState(false)

    const [passwordError, setPasswordError] = useState(false)

    const [errorMessage, setErrorMessage] = useState("")

    const [message, setMessage] = useState("")


    const signUp = async(email, password, firstName) => {
        try{
            await createUserWithEmailAndPassword(auth, email, password)
            .catch(
                (err) => console.log(err)
            );
            await updateProfile(auth.currentUser, { displayName: `${firstName}` } )
            .catch(
                (err) => console.log(err)
            );
        }
        catch (error){
            console.log(error)
        }
    }

    const logIn = async(email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            setLog(true)
        }
        catch (error){
            console.log(error.code)
            if (error.message.includes("invalid-email") ) return setEmailError(true)
            if (error.message.includes("wrong-password") ) return setPasswordError(true)
        }
    }

    const resetPassword = async(email) => {
        await sendPasswordResetEmail(auth, email)
            .then(()=>{
                setMessage("Revise su correo electronico para resetear su contraseña")
                return
            })
            .catch((error) => {
                console.log(error)
                setErrorMessage("La direccion de correo electronico no parece ser valida")
                return
            });
    }    

    const logOut = async() => await signOut(auth)

    useEffect(() => {
        onAuthStateChanged( auth, currentUser => setUser(currentUser) )
        setLoading(false)
    }, [])
    
    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                log,
                emailError,
                passwordError,
                errorMessage,
                message,
                signUp,
                logOut,
                logIn,
                resetPassword
            }}
        >
            {!loading && children}
        </AuthContext.Provider>
    )

}