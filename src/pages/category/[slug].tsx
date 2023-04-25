import Product from "../../../components/ProductCard";
import Wrapper from "../../../components/Wrapper";

const Category = () => {
  return (
      <div className=" w-full my-20">
        <Wrapper>
          <div className="text-center max-w-[800px] mx-auto my-8 md:my-0">
            <div className=" text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
              Running Shoes
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </Wrapper>
      </div>
  );
};

export default Category;
