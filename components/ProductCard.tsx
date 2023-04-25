import Link from "next/link";
import React from "react";

const Product = () => {
  return (
    <div>
      <Link href={`/products/pc`}>
        <div className="transform overflow-hidden bg-white duration-200 cursor-pointer hover:scale-105">
          <img src="/product-1.webp" className="w-full" />
          <div className="p-4 text-black/[0.9]">
            <h2 className="text-lg font-medium">Product Name</h2>
            <div className="flex items-center text-black/[0.5]">
              <p className="mr-2 text-lg font-semibold">$200.00 </p>
              <p className="mr-2 text-lg font-semibold line-through">$25.00 </p>
              <p className="ml-auto text-base font-medium text-green-500">
                20% off
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
