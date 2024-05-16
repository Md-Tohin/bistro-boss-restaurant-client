import { Helmet } from "react-helmet-async";
import SectionHeading from "../../../frontend/Shared/SectionHeading/SectionHeading";
import { IoIosEye } from "react-icons/io";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
// import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import noImage from "../../../assets/no-image.jpg";
import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
// import loaderImage from '../../../assets/loader.gif';

const Menu = () => {
  const [menu, , refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  const handleMenuDelete = (id) => {
    Swal.fire({
      title: "Do you want to delete the menu?",
      showCancelButton: true,
      confirmButtonText: "Yes, Delete",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        axiosSecure.delete(`/api/menu/${id}`).then((res) => {
          if (res.data?.deletedCount > 0) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Menu item deleted successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            Swal.fire({
              title: "Failed!",
              text: "Menu item deleted failed!",
              icon: "error",
            });
          }
        });
      } 
    });
  };
  // if (loader) {
  //     return (
  //         <div className="h-96 bg-white">
  //         <div className="flex justify-center items-center h-full ">
  //           <img
  //             className=" w-40"
  //             src={loaderImage}
  //             alt="image"
  //           />
  //         </div>
  //       </div>
  //     )
  //   }
  // const axiosSecure = useAxiosSecure();
  // const {data: menu=[]} = useQuery({
  //     queryKey: ["menu"],
  //     queryFn: async () => {
  //         const res = await axiosSecure.get("/api/menu");
  //         return res.data;
  //     }
  // });

  return (
    <>
      <Helmet>
        <title>Menu Manage | Bistro Boss Restaurant </title>
      </Helmet>
      <div>
        <SectionHeading
          title="MANAGE ALL ITEMS"
          subTitle="--- Hurry Up! ---"
        ></SectionHeading>
        <div className="bg-white mx-8 shadow-2xl border px-5 py-5 mb-16">
          <div className="">
            <h1 className="text-2xl ">Total Menu: {menu.length}</h1>
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
                    Category
                  </th>
                  <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                    Status
                  </th>
                  <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {menu.map((item, idx) => (
                  <tr
                    key={idx}
                    className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
                  >
                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                      <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                        SL NO
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
                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
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
                        Category
                      </span>
                      {item?.category}
                    </td>
                    <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                      <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                        Status
                      </span>
                      <span className="rounded bg-red-400 py-1 px-3 text-xs font-bold">
                        {item?.status == "active" ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td className="w-full lg:w-auto p-3 text-gray-800  border border-b text-center block lg:table-cell relative lg:static">
                      <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                        Actions
                      </span>
                      <div className="flex justify-center items-center gap-2">
                        <button
                          className="flex select-none items-center gap-1 rounded-lg bg-pink-500 py-2 px-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                          data-ripple-light="true"
                        >
                          <span className="text-xl ">
                            <IoIosEye />
                          </span>
                        </button>
                        <Link to={`/admin/menu/edit/${item?._id}`}
                          className="flex select-none items-center gap-1 rounded-lg bg-gradient-to-tr from-green-600 to-green-400 py-2 px-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                          data-ripple-light="true"
                        >
                          <span className="text-xl">
                            <FaEdit />
                          </span>
                        </Link>
                        <button
                          onClick={() => handleMenuDelete(item._id)}
                          className="flex select-none items-center gap-1 rounded-lg bg-red-500 py-2 px-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
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

export default Menu;
