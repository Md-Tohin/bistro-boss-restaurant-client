import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { PropTypes } from "prop-types";
import loaderImage from '../assets/loader.gif';

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();
  if (loader) {
    return (
        <div className="h-96 bg-white">
        <div className="flex justify-center items-center h-full ">
          <img
            className=" w-40"
            src={loaderImage}
            alt="image"
          />
        </div>
      </div>
    )
  }
  if (user) {
    return children;
  } 
  return <Navigate to="/login" state={{ from: location }} replace={true}></Navigate>;  
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.object,
};
