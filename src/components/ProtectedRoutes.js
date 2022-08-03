import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Context/authContext";
import { Stack, Spinner } from "@chakra-ui/react"
// Routes that are going to be unreachable without login in
const PrivateRoutes = () => {
    const { user } = useAuth()

    return (
        user !== null ? <Outlet /> 
        :  
        <Stack minH='100vh' justify='center' align='center'>
            <Spinner size='xl' margin='0 auto'>
                <Navigate to='/'/>
            </Spinner>
        </Stack>
    )
}
export default PrivateRoutes