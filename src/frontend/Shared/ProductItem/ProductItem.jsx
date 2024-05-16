import productImg from "../../../assets/menu/menu-bg.png";
import { PropTypes } from "prop-types";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";

const ProductItem = ({ item }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddToCart = (item) => {
    if (user && user.email) {
      const email = user.email;
      const name = item?.name;
      const price = item?.price;
      const image = item?.image;
      const recipe = item?.recipe;
      const _id = item?._id;
      const cartItem = {
        email,
        menuId: _id,
        name,
        price,
        recipe,
        image,
      };
      axiosSecure.post('/api/carts', cartItem)
      .then(res => {
        console.log(res.data);
        if(res.data.insertedId){
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to cart!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch(error => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      })
    } else {
      Swal.fire({
        title: "Are you not logged in?",
        text: "Please login to add to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div>
      <div className="border bg-dark07 rounded-md relative">
        <img
          src={item?.image ? item?.image : productImg}
          alt=""
          className="w-full h-[175px] object-fill"
        />
        <div className="px-3 py-5 text-center">
          <h1 className="text-lg font-bold text-dark01">
            {item?.name ? item?.name : "Caeser Salad"}
          </h1>
          <p className="h-[73px] overflow-hidden text-sm tracking-[1px] pt-2 pb-5">
            {item?.recipe
              ? item?.recipe
              : "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets."}
          </p>
          <button
            onClick={() => handleAddToCart(item)}
            className="uppercase text-sm font-semibold px-5 py-3 mt-5 bg-dark06 rounded-md border-b-2 border-yellowDark text-yellowDark hover:bg-dark01 duration-300 hover:border-none"
          >
            add to cart
          </button>
        </div>
        <div className="absolute top-5 right-3 bg-dark01 bg-opacity-60 w-16 py-1 text-white font-medium text-sm rounded-lg">
          ${item?.price ? item?.price : "0.00"}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

ProductItem.propTypes = {
  item: PropTypes.object,
};
