import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import Loader from "../../loader/Loader";


const HRRoute = ({ children }) => {
  const { user, loading, userInfo } = useContext(AuthContext);
  const location = useLocation();

  if (loading || !userInfo) return <Loader />;

  const allowedRoles = ['HR', 'Admin'];

  if (!user || !allowedRoles.includes(userInfo.role)) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};


export default HRRoute;
