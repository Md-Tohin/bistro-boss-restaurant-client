import SectionHeading from "../../../Shared/SectionHeading/SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';


const ReviewSection = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        axios
            .get("/reviews.json")
            .then((response) => {
                setReviews(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="mb-12">
            <SectionHeading
                title="TESTIMONIALS"
                subTitle="--- What Our Clients Say ---"
            ></SectionHeading>
            <div className="w-10/12 mx-auto  pb-5">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {reviews.map((review) => {
                        return (
                            <SwiperSlide key={review._id}>
                                <div
                                    className="text-center w-3/4 mx-auto flex flex-col justify-center items-center"
                                    key={review._id}
                                >
                                    <div className="mt-2 mb-5">
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        readOnly
                                    />
                                    </div>
                                    <div>{review.details}</div>
                                    <div className="text-yellowDark text-xl font-semibold mt-3">
                                        {review.name}
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
};

export default ReviewSection;
