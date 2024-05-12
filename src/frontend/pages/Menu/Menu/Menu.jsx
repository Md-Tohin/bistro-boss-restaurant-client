import breadCrumbImg from "../../../../assets/menu/banner3.jpg";
import PageBreadCrumb from "../../../Shared/PageBreadCrumb/PageBreadCrumb";
import { Helmet } from "react-helmet-async";
import MenuItems from "../MenuItems/MenuItems";

const Menu = () => {
    const menuCategories = [ 'offered', 'popular', 'dessert', 'pizza', 'salad', 'drinks', ];
  return (
    <>
      <Helmet>
        <title>Menu | Bistro Boss Restaurant </title>
      </Helmet>
      <div className="pb-10">
        <PageBreadCrumb image={breadCrumbImg} title="OUR MENU" subTitle="Would you like to try a dish?"></PageBreadCrumb>        
        {
            menuCategories.map((category, idx) => <MenuItems key={idx} category={category}></MenuItems>)
        }
      </div>
    </>
  );
};

export default Menu;
