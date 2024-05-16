import useAuth from "../hooks/useAuth";
import { PropTypes } from 'prop-types';
import loaderImage from '../assets/loader.gif';
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({children}) => {
    const {user, loader} = useAuth();
    const {isAdmin, isAdminLoading} = useAdmin();
    const location = useLocation();
    if(loader || isAdminLoading) {
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
    if(user && isAdmin) {
        return children;
    }
   
    return <Navigate to="/login" state={{ from:location }} replace></Navigate>;
};

export default AdminRoute;

AdminRoute.propTypes = {
    children: PropTypes.object,
  };
  