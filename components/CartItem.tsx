import { RiDeleteBinLine } from "react-icons/ri";
import Image from "next/image";
import { updateCart, removeFromCart } from "../store/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ data }: any) => {
  const p = data.attributes;

  const Quantityval = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const dispatch = useDispatch();

  const updateCartItem = (e: any, key: any) => {
    let payload = {
      key,
      val: key === "quantity" ? parseInt(e.target.value) : e.target.value,
      id: data.id,
    };
    dispatch(updateCart(payload));
  };

  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      {/* image part */}
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <Image
          src={p?.thumbnail?.data?.attributes?.url}
          alt={"..."}
          width={300}
          height={300}
        />
      </div>
      {/* image part */}

      {/* Product Name start*/}
      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Product Name start*/}
          <h1 className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            {p?.name}
          </h1>

          {/* Product Subtitle*/}
          <h1 className="text-sm font-medium text-black/[0.5] block md:hidden">
            {p?.subtitle}
          </h1>

          {/* Product Price */}
          <h1 className="text-sm md:text-md font-bold mt-2 text-black/[0.5]">
            MRP: ₹ {p.price}
          </h1>
        </div>

        {/* Product Subtitle*/}
        <h1 className="text-sm font-medium text-black/[0.5] hidden md:block">
          {p?.subtitle}
        </h1>

        <div className=" flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
            <div className="flex items-center gap-1">
              <div className="font-semibold">Size:</div>
              <select
                className="hover:text-black"
                onChange={(e) => {
                  updateCartItem(e, "selectedSize");
                }}
              >
                {p.size.data.map((item: any, i: any) => {
                  return (
                    <option
                      key={i}
                      value={item.size}
                      disabled={item.enabled ? false : true}
                      selected={data.selectedSize === item.size}
                    >
                      {item.size}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="flex items-center gap-1">
              <div className="font-semibold">Quantity:</div>
              <select
                className="hover:text-black"
                onChange={(e) => {
                  updateCartItem(e, "quantity");
                }}
              >
                {Quantityval.map((q, i) => {
                  return (
                    <option key={i} value={q} selected={data.quantity === q}>
                      {q}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <RiDeleteBinLine
            onClick={() => dispatch(removeFromCart({ id: data.id }))}
            className="transition text-black/[0.5] hover:text-black cursor-pointer text[16px] md:text-[20px]"
          />
        </div>
      </div>
      {/* Product Name end*/}
    </div>
  );
};

export default CartItem;
