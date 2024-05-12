import ProductItem from "../../../Shared/ProductItem/ProductItem";
import SectionHeading from "../../../Shared/SectionHeading/SectionHeading";

const RecommendProduct = () => {
  return (
    <div>
      <div className="mb-5 mt-10 ">
        <SectionHeading
          title="CHEF RECOMMENDS"
          subTitle="--- Should Try ---"
        ></SectionHeading>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-x-3 gap-y-4 w-10/12 mx-auto pt-5 pb-5">
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
        </div>
        <div className="text-center">
          <button className="btn text-dark10 border-b-2 border-dark10">
            View Full Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecommendProduct;
