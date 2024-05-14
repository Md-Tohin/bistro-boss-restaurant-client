import { FaTrashAlt } from "react-icons/fa";
import { FaList } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useCart from "../../../hooks/useCart";
import noImage from "../../../assets/no-image.jpg";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const Cart = () => {
  const [cart, refetch] = useCart();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const totalCartItem = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCartDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      confirmButtonColor: "green",
      cancelButtonColor: "red",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/api/cart/${id}/${user?.email}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Cart item has been deleted.",
                icon: "success",
                timer: 1500,
              });
            }
          })
          .catch((error) => {
            console.log(error);
            Swal.fire({
              title: "Cancelled",
              text: "Cart item is safe :)",
              icon: "error",
            });
          });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire({
          title: "Cancelled",
          text: "Cart item is safe :)",
          icon: "error",
          timer: 1500,
        });
      }
    });
  };
  return (
    <>
      <div className="flex  items-center text-stone-700 py-4 mb-2">
        <span className="font-bold text-2xl">
          <FaList />
        </span>
        <span className="font-bold text-3xl ms-2"> My Cart</span>
      </div>
      <div className="py-4 pb-8 px-5 shadow-lg">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-4">
          <Link className="">
            <button
              className="middle none center w-full rounded-lg bg-gradient-to-br from-purple-700 to-blue-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              data-ripple-light="true"
            >
              Cart Items: {cart.length}
            </button>
          </Link>
          <Link className="">
            <button
              className="middle none center w-full rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              data-ripple-light="true"
            >
              Cart Quantity: 999
            </button>
          </Link>
          <Link className="">
            <button
              className="middle none center w-full rounded-lg bg-gradient-to-br from-pink-600 to-orange-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              data-ripple-light="true"
            >
              Total Price: ${totalCartItem}
            </button>
          </Link>
          <Link to="/user/payment" className="">
            <button
              className="middle none center w-full rounded-lg bg-gradient-to-br from-blue-900 to-green-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              data-ripple-light="true"
            >
              Pay
            </button>
          </Link>
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
              {cart.map((item, idx) => (
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
                        onClick={() => handleCartDelete(item._id)}
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
    </>
  );
};

export default Cart;
