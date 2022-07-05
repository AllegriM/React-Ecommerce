import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Context/authContext";

const PrivateRoutes = () => {
    const { user } = useAuth()
    return (
        user !== null ? <Outlet /> : <Navigate to='/'/> 
    )
}
export default PrivateRoutes