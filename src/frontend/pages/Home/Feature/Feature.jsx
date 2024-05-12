import SectionHeading from "../../../Shared/SectionHeading/SectionHeading";
import featureImg from "../../../../assets/home/featured.jpg";
import  "./feature.css";

const Feature = () => {
  return (
    <div className="feature-image bg-fixed">
      <div className="mb-5 mt-10 pt-5 pb-10  bg-black bg-opacity-50">       
        <SectionHeading
        color="white"
          title="FROM OUR MENU"
          subTitle="--- Check it out ---"
        ></SectionHeading>
        <div className="md:flex justify-between items-center w-10/12 mx-auto pt-5 pb-5 md:space-x-7">
          <div className="w-1/2">
            <img className="w-full h-64 object-fill" src={featureImg} alt="" />
          </div>
          <div className="w-1/2 text-white">
            March 20, 2023 <br />
            <h1 className="pt-1 pb-2 font-semibold"> WHERE CAN I GET SOME? </h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur. <br />
            <button className="mt-2 uppercase text-sm font-semibold px-5 py-2 bg-dark06 rounded-md border-b-2 border-yellowDark text-yellowDark hover:bg-dark01 duration-300 hover:border-none">
            Read More
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Feature;
