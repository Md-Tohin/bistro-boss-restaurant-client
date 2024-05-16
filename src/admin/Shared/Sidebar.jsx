import { FaHome, FaMoneyBill, FaShoppingCart } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { FaList, FaPowerOff, FaUsers, FaUtensils } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAdmin from "../../hooks/useAdmin";

const Sidebar = () => {
  const { logOut } = useAuth();
  const [isAdmin] = useAdmin();
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
      <div className="flex flex-shrink-0 items-center mb-5">
        <img className="h-10 w-auto" src={logo} alt="logo" />
        <div className="text-dark01 leading-5 ms-2">
          <span className="font-bold tracking-widest">BISTRO BOSS</span> <br />
          <span className="tracking-[5px]">Restaurant</span>
        </div>
      </div>

      <div className="">
        <nav className="flex flex-col gap-1  pt-5 font-sans text-base font-normal ">
          {isAdmin ? (
            <>
              <NavLink to="/admin/dashboard">
                <div
                  role="button"
                  className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-yellowDark hover:bg-opacity-80 focus:bg-yellowDark focus:bg-opacity-80 active:bg-yellowDark active:bg-opacity-80 hover:text-white focus:text-white active:text-white outline-none"
                >
                  <div className="grid place-items-center mr-4">
                    <FaHome></FaHome>
                  </div>
                  Dashboard
                </div>
              </NavLink>
              <NavLink to="/admin/menu/add">
                <div
                  role="button"
                  className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-yellowDark hover:bg-opacity-80 focus:bg-yellowDark focus:bg-opacity-80 active:bg-yellowDark active:bg-opacity-80 hover:text-white focus:text-white active:text-white outline-none"
                >
                  <div className="grid place-items-center mr-4">
                    <FaUtensils></FaUtensils>
                  </div>
                  Add Items
                </div>
              </NavLink>
              <NavLink to="/admin/menu">
                <div
                  role="button"
                  className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-yellowDark hover:bg-opacity-80 focus:bg-yellowDark focus:bg-opacity-80 active:bg-yellowDark active:bg-opacity-80 hover:text-white focus:text-white active:text-white outline-none"
                >
                  <div className="grid place-items-center mr-4">
                    <FaList></FaList>
                  </div>
                  Manage Items
                </div>
              </NavLink>
              <NavLink to="/admin/users">
                <div
                  role="button"
                  className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-yellowDark hover:bg-opacity-80 focus:bg-yellowDark focus:bg-opacity-80 active:bg-yellowDark active:bg-opacity-80 hover:text-white focus:text-white active:text-white outline-none"
                >
                  <div className="grid place-items-center mr-4">
                    <FaUsers></FaUsers>
                  </div>
                  All Users
                </div>
              </NavLink>
            </>
          ) : (
            <>
            <NavLink to="/user/dashboard">
                <div
                  role="button"
                  className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-yellowDark hover:bg-opacity-80 focus:bg-yellowDark focus:bg-opacity-80 active:bg-yellowDark active:bg-opacity-80 hover:text-white focus:text-white active:text-white outline-none"
                >
                  <div className="grid place-items-center mr-4">
                    <FaHome></FaHome>
                  </div>
                  Dashboard
                </div>
              </NavLink>
              <NavLink to="/user/cart">
                <div
                  role="button"
                  className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-yellowDark hover:bg-opacity-80 focus:bg-yellowDark focus:bg-opacity-80 active:bg-yellowDark active:bg-opacity-80 hover:text-white focus:text-white active:text-white outline-none"
                >
                  <div className="grid place-items-center mr-4">
                    <FaShoppingCart></FaShoppingCart>
                  </div>
                  My Cart
                </div>
              </NavLink>
              <NavLink to="/user/orders">
                <div
                  role="button"
                  className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-yellowDark hover:bg-opacity-80 focus:bg-yellowDark focus:bg-opacity-80 active:bg-yellowDark active:bg-opacity-80 hover:text-white focus:text-white active:text-white outline-none"
                >
                  <div className="grid place-items-center mr-4">
                    <FaList></FaList>
                  </div>
                  My Order
                </div>
              </NavLink>
              <NavLink to="/user/payment">
                <div
                  role="button"
                  className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-yellowDark hover:bg-opacity-80 focus:bg-yellowDark focus:bg-opacity-80 active:bg-yellowDark active:bg-opacity-80 hover:text-white focus:text-white active:text-white outline-none"
                >
                  <div className="grid place-items-center mr-4">
                    <FaMoneyBill></FaMoneyBill>
                  </div>
                  Payment History
                </div>
              </NavLink>
            </>
          )}

          <NavLink>
            <div
              onClick={handleLogOut}
              role="button"
              className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-yellowDark hover:bg-opacity-80 focus:bg-yellowDark focus:bg-opacity-80 active:bg-yellowDark active:bg-opacity-80 hover:text-white focus:text-white active:text-white outline-none"
            >
              <div className="grid place-items-center mr-4">
                <FaPowerOff></FaPowerOff>
              </div>
              Log Out
            </div>
          </NavLink>

          <hr className="text-white my-3"></hr>

          <NavLink to="/">
            <div
              role="button"
              className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-yellowDark hover:bg-opacity-80 focus:bg-yellowDark focus:bg-opacity-80 active:bg-yellowDark active:bg-opacity-80 hover:text-white focus:text-white active:text-white outline-none"
            >
              <div className="grid place-items-center mr-4">
                <FaHome></FaHome>
              </div>
              Home
            </div>
          </NavLink>
          <NavLink to="/menu">
            <div
              role="button"
              className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-yellowDark hover:bg-opacity-80 focus:bg-yellowDark focus:bg-opacity-80 active:bg-yellowDark active:bg-opacity-80 hover:text-white focus:text-white active:text-white outline-none"
            >
              <div className="grid place-items-center mr-4">
                <FaHome></FaHome>
              </div>
              Our Menu
            </div>
          </NavLink>
          <NavLink to="/foods/popular">
            <div
              role="button"
              className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-yellowDark hover:bg-opacity-80 focus:bg-yellowDark focus:bg-opacity-80 active:bg-yellowDark active:bg-opacity-80 hover:text-white focus:text-white active:text-white outline-none"
            >
              <div className="grid place-items-center mr-4">
                <FaHome></FaHome>
              </div>
              Our Food
            </div>
          </NavLink>
          <NavLink to="/contact">
            <div
              role="button"
              className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-yellowDark hover:bg-opacity-80 focus:bg-yellowDark focus:bg-opacity-80 active:bg-yellowDark active:bg-opacity-80 hover:text-white focus:text-white active:text-white outline-none"
            >
              <div className="grid place-items-center mr-4">
                <FaHome></FaHome>
              </div>
              Contact
            </div>
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
