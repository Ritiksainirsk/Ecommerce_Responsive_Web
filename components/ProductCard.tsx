import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";

import getDiscountedPricePercentage from "../utils/helper";

const ProductCard = ({ data,id}:any) => {
  return (
    <div>
      <Link href={`/products/${data?.attributes?.slug}`}>
        <div className="transform overflow-hidden bg-white duration-200 cursor-pointer hover:scale-105">
          <Image
            width={500}
            height={500}
            src={data?.attributes?.thumbnail?.data?.attributes?.url}
            alt={data?.attributes?.name}
          />
          <div className="p-4 text-black/[0.9]">
            <h2 className="text-lg font-medium">{data?.attributes?.name}</h2>
            <div className="flex items-center text-black/[0.5]">
              <p className="mr-2 text-lg font-semibold">&#8377;{data?.attributes?.price} </p>

              {data?.attributes?.original_price && (
                <>
                  <p className="mr-2 text-lg font-semibold line-through">
                    &#8377;{data?.attributes?.original_price}
                  </p>
                  <p className="ml-auto text-base font-medium text-green-500">
                    {getDiscountedPricePercentage(data?.attributes?.original_price, data?.attributes?.price)}%
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
