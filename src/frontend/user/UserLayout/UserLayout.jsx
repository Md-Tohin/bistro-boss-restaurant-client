import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const UserLayout = () => {
  return (
    <>
      <Helmet>
        <title> User Cart | Bistro Boss Restaurant </title>
      </Helmet>

      <div className="w-[87%] mx-auto px-2 pb-16 pt-32  flex flex-col md:flex-row">
        <div className="w-full md:w-1/4">
          <Sidebar></Sidebar>
        </div>
        <div className="w-full md:w-3/4 md:ml-5 md:mt-0 mt-5">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default UserLayout;
