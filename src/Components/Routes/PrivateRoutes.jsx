import { Navigate, useLocation } from "react-router";
import useAuth from "../../Hooks/useAuth";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth();

    const location = useLocation();

    if (loading) {
        return <div className="flex h-screen w-full justify-center items-center">
        <img className='w-28' src="https://i.ibb.co/5B7qR4q/Studio.gif" alt="" />
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;