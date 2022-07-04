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

    const signUp = async(email, password, firstName) => {
        try{
            await createUserWithEmailAndPassword(auth, email, password)
            // await navigate('/')
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
            setLog(true)
            navigate('/home')
        }
        catch (error){
            console.log(error)
        }
    }

    const logOut = () => signOut(auth)

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
                signUp,
                logOut,
                logIn
            }}
        >
            {children}
        </AuthContext.Provider>
    )

}