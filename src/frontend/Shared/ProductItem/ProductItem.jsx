import productImg from "../../../assets/menu/menu-bg.png";
import { PropTypes } from 'prop-types';

const ProductItem = ({item}) => {
  return (
    <div>
      <div className="border bg-dark07 rounded-md relative">
        <img src={ item?.image ? item?.image : productImg } alt="" className="w-full h-full object-fill" />
        <div className="px-3 py-5 text-center">
          <h1 className="text-lg font-bold text-dark01">{item?.name ? item?.name : 'Caeser Salad' }</h1>
          <p className="h-[73px] overflow-hidden text-sm tracking-[1px] pt-2 pb-5">{item?.recipe ? item?.recipe : "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets." }</p>
          <button className="uppercase text-sm font-semibold px-5 py-3 mt-5 bg-dark06 rounded-md border-b-2 border-yellowDark text-yellowDark hover:bg-dark01 duration-300 hover:border-none">add to cart</button>
        </div>
        <div className="absolute top-5 right-3 bg-dark01 bg-opacity-60 w-16 py-1 text-white font-medium text-sm rounded-lg">${item?.price ? item?.price : '0.00' }</div>
      </div>
    </div>
  );
};

export default ProductItem;

ProductItem.propTypes = {
  item: PropTypes.object,
};