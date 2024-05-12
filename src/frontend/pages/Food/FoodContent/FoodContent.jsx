import useMenu from "../../../../hooks/useMenu";
import { PropTypes } from "prop-types";
import ProductItem from "../../../Shared/ProductItem/ProductItem";

const FoodContent = ({ category }) => {
  const [menu] = useMenu(category);
  return (
    <>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-x-3 gap-y-4 w-10/12 mx-auto pt-5 pb-5">
        {menu.map((item) => (
          <ProductItem key={item._id} item={item}></ProductItem>
        ))}
      </div>
      <div className="text-center">
        <button className="btn text-dark10 border-b-2 border-dark10">
          View Full Menu
        </button>
      </div>
    </>
  );
};

export default FoodContent;

FoodContent.propTypes = {
  category: PropTypes.string,
};
