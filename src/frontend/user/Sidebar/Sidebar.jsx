import { FaHome, FaShoppingCart, FaUserEdit } from "react-icons/fa";
import { FaList } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import profileImage from "../../../assets/users/profile.png";
import Swal from "sweetalert2";

const Sidebar = () => {
  const { user, logOut } = useAuth();
  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User logout successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };
  return (
    <>
      <aside className="">
        <div className="stats stats-vertical shadow w-full font-semibold">
          <div className="stat bg-orange-500">
            <div className="stat-title text-center">
              <img
                src={user && user?.photoURL ? user.photoURL : profileImage}
                alt="Image"
                className="w-16 mx-auto border border-red-500 rounded-md pb-1"
              />
              <span className="text-lg font-bold text-stone-700 mr-2">
                <span> Md. Tohin</span>
              </span>
            </div>
          </div>
          <Link to="/user/dashboard">
            <div className="stat">
              <div className="stat-title flex">
                {" "}
                <span className="text-xl font-bold text-stone-800 mr-2">
                  <FaHome />
                </span>{" "}
                Dashboard
              </div>
            </div>
          </Link>
          <Link to="/user/cart">
            <div className="stat">
              <div className="stat-title flex">
                {" "}
                <span className="text-xl font-bold text-stone-800 mr-2">
                  <FaShoppingCart />
                </span>{" "}
                My Cart
              </div>
            </div>
          </Link>
          <Link to="/user/orders">
            <div className="stat">
              <div className="stat-title flex">
                {" "}
                <span className="text-xl font-bold text-stone-800 mr-2">
                  <FaList />
                </span>{" "}
                My Orders
              </div>
            </div>
          </Link>
          <Link to="/user/profile">
            <div className="stat">
              <div className="stat-title flex">
                {" "}
                <span className="text-xl font-bold text-stone-800 mr-2">
                  <FaUserEdit />
                </span>{" "}
                Profile
              </div>
            </div>
          </Link>
          <Link to="/user/dashboard">
            <div className="stat">
              <div className="stat-title flex">
                {" "}
                <span className="text-xl font-bold text-stone-800 mr-2">
                  <FaHome />
                </span>{" "}
                Change Password
              </div>
            </div>
          </Link>
          <Link onClick={handleLogOut}>
            <div className="stat">
              <div className="stat-title flex">
                {" "}
                <span className="text-xl font-bold text-stone-800 mr-2">
                  <FaHome />
                </span>{" "}
                Logout
              </div>
            </div>
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
