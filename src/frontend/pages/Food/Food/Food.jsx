import { Helmet } from "react-helmet-async";
import PageBreadCrumb from "../../../Shared/PageBreadCrumb/PageBreadCrumb";
import breadCrumbImg from "../../../../assets/food/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import FoodContent from "../FoodContent/FoodContent";
import './Food.css';
import { useState } from "react";
import { useParams } from "react-router-dom";

const Food = () => {
  const {category} = useParams();
  const menuCategories = [
    "offered",
    "popular",
    "dessert",
    'soups',
    "pizza",
    "salad",
    "drinks",
  ];
  const categoryIndex = menuCategories.indexOf(category);
  const [active, setActive] = useState(categoryIndex);
  const [selectMenu, setSelectMenu] = useState(category);
  return (
    <>
      <Helmet>
        <title>Food | Bistro Boss Restaurant </title>
      </Helmet>
      <div className="pb-10">
        <PageBreadCrumb
          title="OUR Foods"
          subTitle="Would you like to try a dish?"
          image={breadCrumbImg}
        ></PageBreadCrumb>
        <div className="mb-5 mt-14">
          
        </div>
        <Tabs defaultIndex={active} onSelect={(index) => setActive(index)} className="text-center">
          <TabList>
            {menuCategories.map((category, idx) => (
              <Tab onClick={() => setSelectMenu(category)}  key={idx}><span className={`${selectMenu == category ? "selectMenu" : "" } uppercase text-dark01 text-sm font-semibold`}>{category}</span></Tab>
            ))}
          </TabList>
          {menuCategories.map((category, idx) => (
            <TabPanel key={idx}><FoodContent category={category}></FoodContent></TabPanel>
          ))}
        </Tabs>
      </div>
    </>
  );
};

export default Food;
