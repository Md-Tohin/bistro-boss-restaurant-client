import { FaEdit } from "react-icons/fa";
import { FaList } from "react-icons/fa6";
import { IoIosEye } from "react-icons/io";
import { Link } from "react-router-dom";

const Order = () => {
  return (
    <>
      <div className="flex  items-center text-stone-700 py-4 mb-2">
        <span className="font-bold text-2xl">
          <FaList />
        </span>
        <span className="font-bold text-3xl ms-2"> My Order</span>
      </div>
      <div className="py-4 pb-8 px-5 shadow-lg">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-4    ">
          <Link to="/user/orders" className="">
            <button
              className="middle none center w-full rounded-lg bg-gradient-to-br from-purple-700 to-blue-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              data-ripple-light="true"
            >
              Total Order
            </button>
          </Link>
          <Link to="/user/orders" className="">
            <button
              className="middle none center w-full rounded-lg bg-gradient-to-br from-pink-600 to-orange-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              data-ripple-light="true"
            >
              Approved Order
            </button>
          </Link>
          <Link to="/user/orders" className="">
            <button
              className="middle none center w-full rounded-lg bg-gradient-to-br from-blue-900 to-green-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              data-ripple-light="true"
            >
              Pending Order
            </button>
          </Link>
          <Link to="/user/orders" className="">
            <button
              className="middle none center w-full rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              data-ripple-light="true"
            >
              Rejected Order
            </button>
          </Link>
        </div>

        <div className="mt-8">
          <table className="border-collapse w-full">
            <thead>
              <tr>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                  Date
                </th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                  Amount
                </th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                  Payment
                </th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                  Invoice No
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
              <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                  <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                    Date
                  </span>
                  18 April 2024
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                  <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                    Amount
                  </span>
                  $ 32.98
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                  <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                    Payment
                  </span>
                  Stripe
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                  <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                    Invoice No
                  </span>
                  #invoice-000039
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                  <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                    Status
                  </span>
                  <span className="rounded bg-red-400 py-1 px-3 text-xs font-bold">
                    pending
                  </span>
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800  border border-b text-center block lg:table-cell relative lg:static">
                  <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                    Actions
                  </span>
                  <div className="flex justify-center items-center gap-4">
                    <button
                      className="flex select-none items-center gap-3 rounded-lg bg-pink-500 py-2 px-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                      data-ripple-light="true"
                    >
                      <span className="text-xl ">
                        <IoIosEye />
                      </span>
                    </button>
                    <button
                      className="flex select-none items-center gap-3 rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                      data-ripple-light="true"
                    >
                      <span className="text-xl">
                        <FaEdit />
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Order;
