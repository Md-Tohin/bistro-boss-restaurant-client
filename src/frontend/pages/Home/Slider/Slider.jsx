import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Slider.css";
import slider1 from "../../../../assets/home/01.jpg";
import slider2 from "../../../../assets/home/02.jpg";
import slider3 from "../../../../assets/home/03.png";
import slider4 from "../../../../assets/home/04.jpg";
import slider5 from "../../../../assets/home/05.png";
import slider6 from "../../../../assets/home/06.png";

const Slider = () => {
  return (
    <div className="mb-7">
      <Carousel className="carousel-container" autoPlay={true}>
        <div className="carousel-item relative">
          <img src={slider1} />
        </div>
        <div className="carousel-item relative">
          <img src={slider2} />
        </div>
        <div className="carousel-item relative">
          <img src={slider3} />
        </div>
        <div className="carousel-item relative">
          <img src={slider4} />
        </div>
        <div className="carousel-item relative">
          <img src={slider5} />
        </div>
        <div className="carousel-item relative">
          <img src={slider6} />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
