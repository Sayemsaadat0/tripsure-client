import { RotatingLines } from 'react-loader-spinner'
import { Navigate, useLocation } from "react-router";
import useAuth from "../../Hooks/useAuth";
// import Loader from "../components/Loader";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth();

    const location = useLocation();

    if (loading) {
        return <div className="flex h-screen w-full justify-center items-center">
            <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
            />
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;