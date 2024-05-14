import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="flex  items-center text-stone-700 py-4 mb-2">
        <span className="font-bold text-3xl">
          <FaHome />
        </span>
        <span className="font-bold text-3xl ms-2"> Dashboard</span>
      </div>
      <div className="py-4 pb-8 px-5 shadow-lg">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-4    ">
          <Link
            to="/user/dashboard"
            className="px-5 py-4 transition-all rounded-xl duration-1000 bg-gradient-to-br from-purple-700 to-blue-400 hover:bg-blue-500  hover:shadow-xl  group  "
          >
            <div className="py-1 relative  ">
              <h3 className="text-lg font-semibold text-white group-hover:text-gray-900 ">
                <span>0</span> <br />
                Total Order
              </h3>
            </div>
          </Link>
          <Link
            to="/user/dashboard"
            className="px-5 py-4 transition-all rounded-xl duration-1000 bg-gradient-to-br from-pink-600 to-orange-500 hover:bg-blue-500  hover:shadow-xl  group  "
          >
            <div className="py-1 relative  ">
              <h3 className="text-lg font-semibold text-white group-hover:text-gray-900 ">
                <span>0</span> <br />
                Approved Order
              </h3>
            </div>
          </Link>
          <Link
            to="/user/dashboard"
            className="px-5 py-4 transition-all rounded-xl duration-1000 bg-gradient-to-br from-blue-900 to-green-400 hover:bg-blue-500  hover:shadow-xl  group  "
          >
            <div className="py-1 relative  ">
              <h3 className="text-lg font-semibold text-white group-hover:text-gray-900 ">
                <span>0</span> <br />
                Pending Order
              </h3>
            </div>
          </Link>
          <Link
            to="/user/dashboard"
            className="px-5 py-4 transition-all rounded-xl duration-1000 bg-gradient-to-br from-purple-600 to-pink-600 hover:bg-blue-500  hover:shadow-xl  group  "
          >
            <div className="py-1 relative  ">
              <h3 className="text-lg font-semibold text-white group-hover:text-gray-900 ">
                <span>0</span> <br />
                Rejected Order
              </h3>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
