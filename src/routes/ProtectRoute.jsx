import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";
import { PropTypes } from "prop-types";
import loaderImage from '../assets/loader.gif';

const ProtectRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  if (loader) {
    return (
      <div className="h-96 bg-white">
        <div className="flex justify-center items-center h-full ">
          <img className=" w-40" src={loaderImage} alt="image" />
        </div>
      </div>
    );
  }
  if (user) {
    return <Navigate to="/user/dashboard"></Navigate>;
  }
  return children;
};

export default ProtectRoute;

ProtectRoute.propTypes = {
  children: PropTypes.object,
};
