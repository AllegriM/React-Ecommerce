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

    const isLogged = JSON.parse(localStorage.getItem("log"));
    const userLogged = JSON.parse(localStorage.getItem("userLog"))
    // States
    const [user, setUser] = useState(null)
        
    const [log, setLog] = useState(isLogged)
    
    const [emailError, setEmailError] = useState(false)
    
    const [passwordError, setPasswordError] = useState(false)
    
    const [errorMessage, setErrorMessage] = useState("")
    
    const [message, setMessage] = useState("")
    
    // Sign up firebase function
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

    // Log in firebase function
    const logIn = async(email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            localStorage.setItem("userLog",JSON.stringify(user))
            JSON.stringify(localStorage.setItem("log", true))
            setLog(isLogged)
        }
        catch (error){
            console.log(error.code)
            if (error.message.includes("invalid-email") ) return setEmailError(true)
            if (error.message.includes("wrong-password") ) return setPasswordError(true)
        }
    }

    // Reset password firebase function
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

    // Log out firebase function
    const logOut = async() => {
        await signOut(auth);
        localStorage.setItem("userLog", JSON.stringify(null))
        JSON.stringify(localStorage.setItem("log", false))
        setLog(isLogged)
    }

    // Check when first render if there is a user logged
    useEffect(() => {
        onAuthStateChanged( auth, currentUser => setUser(currentUser) )
    }, [])
    
    return (
        <AuthContext.Provider
            value={{
                user,
                log,
                emailError,
                passwordError,
                errorMessage,
                message,
                userLogged,
                signUp,
                logOut,
                logIn,
                resetPassword
            }}
        >
            {children}
        </AuthContext.Provider>
    )

}