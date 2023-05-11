import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import Image from "next/image";
import getDiscountedPricePercentage from "../utils/helper";
import ProductCard from "./ProductCard";

const Relaited_Products = ({ products }: any) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="mt-[50px] md:mt-[100px] mb-[100px] md:mb-0 ">
      <div className="text-2xl font-bold mb-5">You might also like</div>
      <Carousel
        responsive={responsive}
        containerClass="-mx-[10px]"
        itemClass="px-[10px]"
      >
        {products?.data?.map((product: any) => {
          return (
            <>
              <div>
                <Link href={`/products/${product?.attributes?.slug}`}>
                  <div className="transform overflow-hidden bg-white duration-200 cursor-pointer hover:scale-105">
                    <Image
                      width={500}
                      height={500}
                      src={product?.attributes?.thumbnail?.data?.attributes?.url}
                      alt={product?.attributes?.name}
                    />
                    <div className="p-4 text-black/[0.9]">
                      <h2 className="text-lg font-medium">
                        {product?.attributes?.name}
                      </h2>
                      <div className="flex items-center text-black/[0.5]">
                        <p className="mr-2 text-lg font-semibold">
                          &#8377;{product?.attributes?.price}{" "}
                        </p>

                        {product?.attributes?.original_price && (
                          <>
                            <p className="mr-2 text-lg font-semibold line-through">
                              &#8377;{product?.attributes?.original_price}
                            </p>
                            <p className="ml-auto text-base font-medium text-green-500">
                              {getDiscountedPricePercentage(
                                product?.attributes?.original_price,
                                product?.attributes?.price
                              )}
                              %
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Relaited_Products;
