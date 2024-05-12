import Categories from "../Categories/Categories";
import Feature from "../Feature/Feature";
import Menu from "../Menu/Menu";
import RecommendProduct from "../RecommendProduct/RecommendProduct";
import ReviewSection from "../ReviewSection/ReviewSection";
import Slider from "../Slider/Slider";
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
      <>
        <Helmet>
          <title>Home | Bistro Boss Restaurant </title>
        </Helmet>
        <Slider></Slider>
        <Categories></Categories>
        <Menu></Menu>
        <RecommendProduct></RecommendProduct>
        <Feature></Feature>
        <ReviewSection></ReviewSection>
      </>
    );
};

export default Home;