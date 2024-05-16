import { Helmet } from "react-helmet-async";
import SectionHeading from "../../../frontend/Shared/SectionHeading/SectionHeading";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import noImage from "../../../assets/no-image.jpg";
import { FaTrashAlt } from "react-icons/fa";

const Dashboard = () => {
    const axiosSecure = useAxiosSecure();
    const {data: users=[] } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get("/api/users");
            return res.data;
        }
    });

    const handleUserDelete = (id) => {
        console.log(id);
    }
  return (
    <>
      <Helmet>
        <title>Admin Dashboard | Bistro Boss Restaurant </title>
      </Helmet>
      <div>
        <SectionHeading title="MANAGE ALL USERS" subTitle="--- How many? ---"></SectionHeading>
        <div className="bg-white mx-8 shadow-2xl border px-5 py-5">
            <div className="">
                <h1 className="text-2xl ">Total users: {users.length}</h1>                
            </div>
            <div className="mt-8">
          <table className="border-collapse w-full">
            <thead>
              <tr>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                  SL NO
                </th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                  Image
                </th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                  Name
                </th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                  Price
                </th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                  Quantity
                </th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((item, idx) => (
                <tr
                  key={idx}
                  className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
                >
                  <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                      SL NO.
                    </span>
                    {idx + 1}
                  </td>
                  <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                      Image
                    </span>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item && item?.image ? item.image : noImage}
                          alt="Image"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="w-full lg:w-auto p-3 text-gray-800 text-left border border-b block lg:table-cell relative lg:static">
                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                      Name
                    </span>
                    {item?.name}
                  </td>
                  <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                      Price
                    </span>
                    ${item?.price}
                  </td>
                  <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                      Quantity
                    </span>
                    <span className="rounded bg-red-400 py-1 px-3 text-xs font-bold">
                      1
                    </span>
                  </td>
                  <td className="w-full lg:w-auto p-3 text-gray-800  border border-b text-center block lg:table-cell relative lg:static">
                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                      Actions
                    </span>
                    <div className="flex justify-center items-center gap-4">
                      <button
                        onClick={() => handleUserDelete(item._id)}
                        className="flex select-none items-center gap-3 rounded-lg bg-pink-500 py-2 px-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-light="true"
                      >
                        <span className="text-xl">
                          <FaTrashAlt />
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
