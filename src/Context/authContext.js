import { createContext, useContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import { auth } from "../firebase/config"
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext([])

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) throw new Error("There is no auth provider")
    return context
}
export const AuthContextProvider = ({ children }) => {

    const navigate = useNavigate()

    const [user, setUser] = useState(null)

    const [loading, setLoading] = useState(false)

    const [log, setLog] = useState(false)

    const [emailError, setEmailError] = useState(false)

    const [passwordError, setPasswordError] = useState(false)

    const signUp = async(email, password, firstName) => {
        try{
            await createUserWithEmailAndPassword(auth, email, password)
            // await navigate('./')
            .catch(
                (err) => console.log(err)
            );
            await updateProfile(auth.currentUser, { displayName: `${firstName}` })
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
            await navigate('/home')
            setLog(true)
        }
        catch (error){
            console.log(error.code)
            if (error.message.includes("invalid-email") ) return setEmailError(true)
            if (error.message.includes("wrong-password") ) return setPasswordError(true)
        }
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
                signUp,
                logOut,
                logIn
            }}
        >
            {children}
        </AuthContext.Provider>
    )

}