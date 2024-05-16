import { Outlet } from "react-router-dom";
import Sidebar from "../Shared/Sidebar";

const AdminLayout = () => {
  return (
    <>
      <div>
        <div className="flex text-dark01">
            <div className="w-1/5 bg-golden min-h-screen px-5 py-10">
                <Sidebar></Sidebar> 
            </div>
            <div className="flex-1 border bg-[#F3F3F3]">                
            <Outlet></Outlet>
            </div>
        </div>
        
      </div>
    </>
  );
};

export default AdminLayout;
