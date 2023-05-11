import { useMemo } from "react";
import { useSelector } from "react-redux";

const Summary = () => {
  const { cartItems } = useSelector((state: any) => state.cart);

  const Subtotal = useMemo(() => {
    return cartItems.reduce(
      (total: any, val: any) => total + val.attributes.price,
      0
    );
  }, [cartItems]);


  return (
    <div>
      <div className="p-5 bg-gray-300 rounded-xl">
        <div className="flex justify-between items-center font-medium flex-col md:flex-row">
          <div>SUBTOTAL</div>
          <div className="text-sm"> MRP: ₹ {Subtotal}</div>
        </div>

        <p className="pt-6 text-sm">
          In India, people consider energy savings as the primary reason for
          switching to an electric vehicle. However, there are several factors
          of EV vs Fuel Vehicle that should be considered while purchasing an
          electric vehicle, include the cost of fuel and maintenance, as well as
          the overall
        </p>
      </div>
      <div className="bg-black text-white text-center py-3 rounded-full mt-4 cursor-pointer transition hover:bg-black/[0.9] active:scale-95">
        Checkout
      </div>
    </div>
  );
};

export default Summary;
