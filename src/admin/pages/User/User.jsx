import { Helmet } from "react-helmet-async";
import SectionHeading from "../../../frontend/Shared/SectionHeading/SectionHeading";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import noImage from "../../../assets/no-image.jpg";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { createRef } from "react";

const User = () => {
  const roleRef = createRef(null);
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/api/users");
      return res.data;
    },
  });

  const handleUserDelete = (id) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be delete this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "green",
        cancelButtonColor: "red",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            axiosSecure.delete(`/api/users/${id}`)
            .then((res) => {
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire("User deleted successfully!");
                }
            })
            .catch((error) => {
                console.log(error);
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
            });          
        }
      });
  };

  const handleChangeRole = (id, role) => {
    // const role = roleRef.current.value;
    Swal.fire({
      title: "Do you want to update the user role?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Update",
      denyButtonText: `Don't update`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        const userInfo = {role};
        axiosSecure.patch(`/api/users/${id}`, userInfo)
        .then((res) => {
            if(res.data?.modifiedCount > 0){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Role changed successfully!",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  Swal.fire("Role updated successfully!", "", "success");
            }
            else{
                Swal.fire({
                    title: "Failed!",
                    text: "User role updated failed!",
                    icon: "error"
                  });
            }
        });        
      } else if (result.isDenied) {
        Swal.fire("User role are not updated", "", "error");
      }
    });    
  }
  return (
    <>
      <Helmet>
        <title>Admin Dashboard | Bistro Boss Restaurant </title>
      </Helmet>
      <div>
        <SectionHeading
          title="MANAGE ALL USERS"
          subTitle="--- How many? ---"
        ></SectionHeading>
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
                    Email
                  </th>
                  <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                    Role
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
                            src={item && item?.photo ? item.photo : noImage}
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
                        Email
                      </span>
                      {item?.email}
                    </td>
                    <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                      <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                        Role
                      </span>
                    <form >
                      <select
                        onChange={(e) => handleChangeRole(item?._id, e.target.value)}
                        defaultValue={item?.role}
                        ref={roleRef}
                        id="role"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option value="">Choose a role</option>
                        <option value="Super Admin">Super Admin</option>
                        <option value="Admin">Admin</option>
                        <option value="User">User</option>
                        <option value="Visitor">Visitor</option>
                      </select>
                      </form>
                      
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

export default User;
