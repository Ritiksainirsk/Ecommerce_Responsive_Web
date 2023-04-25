import { RiDeleteBinLine } from "react-icons/ri";

const CartItem = () => {
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      {/* image part */}
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <img src="product-1.webp" />
      </div>
      {/* image part */}

      {/* Product Name start*/}
      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Product Name start*/}
          <h1 className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            Jorden Retro 6 G
          </h1>

          {/* Product Subtitle*/}
          <h1 className="text-sm font-medium text-black/[0.5] block md:hidden">
            Men's Golf Shoes
          </h1>

          {/* Product Price */}
          <h1 className="text-sm md:text-md font-bold mt-2 text-black/[0.5]">
            MRP: ₹ 19 695.00
          </h1>
        </div>

        {/* Product Subtitle*/}
        <h1 className="text-sm font-medium text-black/[0.5] hidden md:block">
          Men's Golf Shoes
        </h1>

        <div className=" flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
            <div className="flex items-center gap-1">
              <div className="font-semibold">Size:</div>
              <select className="hover:text-black">
                <option value={1}>UK-2</option>
                <option value={2}>UK-5</option>
                <option value={3}>UK-8</option>
                <option value={4}>UK-10</option>
                <option value={5}>UK-11</option>
                <option value={6}>UK-7</option>
                <option value={7}>UK-2</option>
                <option value={8}>UK-22</option>
              </select>
            </div>

            <div className="flex items-center gap-1">
              <div className="font-semibold">Quantity:</div>
              <select className="hover:text-black">
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
              </select>
            </div>
          </div>

          <RiDeleteBinLine className="transition text-black/[0.5] hover:text-black cursor-pointer text[16px] md:text-[20px]" />
        </div>
        
      </div>
      {/* Product Name end*/}
    </div>
  );
};

export default CartItem;
