import SectionHeading from "../../../Shared/SectionHeading/SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Category from "../Category/Category";

import category1 from '../../../../assets/home/slide1.jpg';
import category2 from '../../../../assets/home/slide2.jpg';
import category3 from '../../../../assets/home/slide3.jpg';
import category4 from '../../../../assets/home/slide4.jpg';
import category5 from '../../../../assets/home/slide5.jpg';

const Categories = () => {
    const categories = [ 
        { _id: "01", name: "Salads", image: category1 },
        { _id: "02", name: "Soups", image: category2 },
        { _id: "03", name: "Pizzas", image: category3 },
        { _id: "04", name: "Desserts", image: category4 },
        { _id: "05", name: "Drinks", image: category5 },
    ]
  return (
    <>
      <SectionHeading title="ORDER ONLINE" subTitle="--- From 11:00am to 10:00pm ---"></SectionHeading>
      <div className="w-10/12 mx-auto pt-5 ">
        <>
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {
                categories.map(category => {
                    return (
                        <SwiperSlide key={category._id}>
                            <Category category={category}></Category>
                        </SwiperSlide>
                    )
                })
            }
          </Swiper>
        </>
      </div>
    </>
  );
};

export default Categories;
