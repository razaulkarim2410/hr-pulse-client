import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import Loader from "../../loader/Loader";


const EmployeeRoute = ({ children }) => {
  const { user, loading, userInfo } = useContext(AuthContext); // userInfo contains role etc.
  const location = useLocation();

  if (loading || !userInfo) return <Loader />;

  if (!user || userInfo.role !== "Employee") {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default EmployeeRoute;
