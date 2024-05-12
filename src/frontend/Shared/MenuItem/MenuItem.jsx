import menuImg from "../../../assets/menu/menu-bg.png";
import { PropTypes } from "prop-types";

const MenuItem = ({ singlemenu }) => {
  let name = singlemenu?.name ? singlemenu?.name : "ROAST DUCK BREAST ------------------";
  let image = singlemenu?.image ? singlemenu?.image : menuImg;
  let price = singlemenu?.price ? singlemenu?.price : "0.00";
  let recipe = singlemenu?.recipe ? singlemenu?.recipe : "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce";
  return (
    <div className="flex justify-center items-center py-3 border rounded-md px-2 ">
      <img
        src={image}
        alt=""
        className="w-20 h-full rounded-tl-0 rounded-tr-full rounded-br-full rounded-bl-full"
      />
      <div className="pl-3 pr-3">
        <h1 className="text-dark01 text-lg pb-1">{name}</h1>
        <p className="text-dark03 text-sm">{recipe}</p>
      </div>
      <div className="text-yellowDark font-bold">
        <span>${price}</span>
      </div>
    </div>
  );
};

export default MenuItem;

MenuItem.propTypes = {
  singlemenu: PropTypes.object,
};
