import React from "react";
import Image from "next/image";

import Wrapper from "../../components/Wrapper";
import CartItem from "../../components/CartItem";
import Summary from "../../components/Summary";
import Link from "next/link";
import { useSelector } from "react-redux";

const Cart = () => {
  
  const { cartItems } = useSelector((state: any) => state.cart);

  return (
    <div className="w-full md:my-20">
      <Wrapper>
        {cartItems.length > 0 && (
          <>
            <div className="text-center font-bold text-[28px] md:text-[34px] max-w-[800px] mx-auto leading-tight">
              Shopping Cart
            </div>
            {/* Heading End */}

            <div className="flex flex-col md:flex-row gap-12 py-10">
              {/* cart items start*/}
              <div className="flex-[2]">
                <div className="text-lg font-bold">Cart Items </div>
                {cartItems.map((item: any) => {
                  return <CartItem key={item.id} data={item} />;
                })}
              </div>
              {/* cart items end */}

              {/* Summary start*/}
              <div className="flex-[1]">
                <div className="text-lg font-bold pb-5">Summary</div>
                <Summary />
              </div>
              {/* Summary end */}
            </div>
          </>
        )}

        {/* Error image */}
        {cartItems.length < 1 && (
          <div className=" flex-[2] flex-col flex items-center pb-[50px] md:-mt-14">
            <Image
              src={"/empty-cart.jpg"}
              alt={"..."}
              width={300}
              height={300}
            />
            <span className="text-xl font-bold">Your card is empty</span>
            <Link
              href={"/"}
              className="bg-black py-3 text-white mt-4 px-10 rounded-full active:scale-95 hover:bg-black/[0.9]"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </Wrapper>
    </div>
  );
};

export default Cart;
