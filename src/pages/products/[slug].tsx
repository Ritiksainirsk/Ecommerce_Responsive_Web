import React from "react";
import Wrapper from "../../../components/Wrapper";
import ProductDetailcarousel from "../../../components/ProductDetailcarousel";
import { AiOutlineHeart } from "react-icons/ai";
import Relaited_Products from "../../../components/Relaited_Products";

const ProductDetails = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left product start */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailcarousel />
          </div>
          {/* left product end */}

          {/* Right product start */}
          <div className="flex-[1] py-3">
            {/* product prices */}
            <div className="">
              <h1 className=" text-2xl font-bold">Jorden Retro 6 G</h1>
              <p className="font-bold pb-3">Men's Golf Shoes</p>
              <p className="font-bold">MRP: ₹ 19 695.00</p>
              <p className="text-gray-400">Incl of taxes</p>
              <p className="text-gray-400">{`(Also includes all applicaple duties)`}</p>
            </div>

            {/* Product size range  */}
            <div className="mb-10 mt-7">
              <div className="flex justify-between mb-2">
                <p className="font-semibold">Select Size</p>
                <p className="font-medium text-black/[0.5]">Select Guide</p>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {SizeCard({
                  hover: "hover:border-black",
                  cursor: "cursor-pointer",
                })}
                {SizeCard({
                  hover: "hover:border-black",
                  cursor: "cursor-pointer",
                })}
                {SizeCard({
                  hover: "hover:border-black",
                  cursor: "cursor-pointer",
                })}
                {SizeCard({
                  hover: "hover:border-black",
                  cursor: "cursor-pointer",
                })}
                {SizeCard({
                  hover: "hover:border-black",
                  cursor: "cursor-pointer",
                })}
                {SizeCard({
                  hover: "hover:border-black",
                  cursor: "cursor-pointer",
                })}
                {SizeCard({
                  hover: "hover:border-black",
                  cursor: "cursor-pointer",
                })}
                {SizeCard({
                  hover: "",
                  cursor: "cursor-not-allowed",
                  textColor: "text-black/[0.5]",
                  bg: "bg-gray-100",
                })}
                {SizeCard({
                  hover: "",
                  cursor: "cursor-not-allowed",
                  textColor: "text-black/[0.5]",
                  bg: "bg-gray-100",
                })}
                {SizeCard({
                  hover: "",
                  cursor: "cursor-not-allowed",
                  textColor: "text-black/[0.5]",
                  bg: "bg-gray-100",
                })}
              </div>

              <div className="text-red-500 mt-1">
                Size selection is required
              </div>

              <div className="flex flex-col gap-4 mt-5">
                <button className="bg-black rounded-full py-3 text-white hover:bg-black/[0.8] transition-all active:scale-90">
                  Add To Card
                </button>
                <button className=" rounded-full py-3 border-[2px] border-black flex items-center justify-center gap-2 transition-all active:scale-90">
                  WishList <AiOutlineHeart />
                </button>
              </div>

              <div className="mt-10">
                <p className="text-xl font-medium">Product Details</p>
                <p className="pt-4">
                  I don't have any time available to keep maintaining this
                  package. If you have any request, try to sort it within the
                  community. I'm able to merge pull requests that look safe from
                  time to time but no commitment on timelines here. Feel free to
                  fork it and publish under other name if you are in a hurry or
                  to use another component.
                </p>
                <p className="pt-4">
                  I don't have any time available to keep maintaining this
                  package. If you have any request, try to sort it within the
                  community. I'm able to merge pull requests that look safe from
                  time to time but no commitment on timelines here. Feel free to
                  fork it and publish under other name if you are in a hurry or
                  to use another component.
                </p>
                <p className="pt-4">
                  I don't have any time available to keep maintaining this
                  package. If you have any request, try to sort it within the
                  community. I'm able to merge pull requests that look safe from
                  time to time but no commitment on timelines here. Feel free to
                  fork it and publish under other name if you are in a hurry or
                  to use another component.
                </p>
              </div>

            </div>
          </div>
          {/* Right product end */}
        </div>


        <Relaited_Products/>
      </Wrapper>
    </div>
  );
};

const SizeCard = ({ hover, cursor, textColor, bg }: any) => {
  return (
    <>
      <div
        className={` border rounded text-center py-3 font-medium ${hover} ${cursor} ${textColor} ${bg}`}
      >
        Uk-2
      </div>
    </>
  );
};
export default ProductDetails;
