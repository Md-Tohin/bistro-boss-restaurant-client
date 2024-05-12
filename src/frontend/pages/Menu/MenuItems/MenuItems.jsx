import MenuHeading from "../../../Shared/MenuHeading/MenuHeading";
import menuItemImage from "../../../../assets/menu/pizza-bg.jpg";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import { PropTypes } from "prop-types";
import useMenu from "../../../../hooks/useMenu";
import SectionHeading from "../../../Shared/SectionHeading/SectionHeading";
import { Link } from "react-router-dom";

const MenuItems = ({ category }) => {
  const categoryName = category;
  const [menu] = useMenu(categoryName);
  const firstCategory = "offered";
  return (
    <>
      <div className="py-5">
        {categoryName == firstCategory ? (
          <SectionHeading
            title="TODAY'S OFFER"
            subTitle="--- Don't miss ---"
          ></SectionHeading>
        ) : (
          <MenuHeading
            image={menuItemImage}
            title={categoryName}
            subTitle={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."
            }
          ></MenuHeading>
        )}        
        <div className="grid md:grid-cols-2 gap-2 w-10/12 mx-auto pt-8 pb-5">
          {menu.map((item) => (
            <MenuItem key={item._id} singlemenu={item}></MenuItem>
          ))}
        </div>
        <div className="text-center">
          <Link to={`/foods/${categoryName}`}>
          <button className="uppercase text-sm font-semibold px-5 py-3 bg-dark06 rounded-md border-b-2 border-yellowDark text-yellowDark hover:bg-dark01 duration-300 hover:border-none">
            Order your favorite food
          </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MenuItems;

MenuItems.propTypes = {
  category: PropTypes.string,
};
