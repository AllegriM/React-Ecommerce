import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Context/authContext";

// Routes that are going to be unreachable without login in
const PrivateRoutes = () => {
    const { user } = useAuth()
    return (
        user !== null ? <Outlet /> : <Navigate to='/'/> 
    )
}
export default PrivateRoutes