import React, { useState } from "react";
import Wrapper from "../../../components/Wrapper";
import ProductDetailcarousel from "../../../components/ProductDetailcarousel";
import { AiOutlineHeart } from "react-icons/ai";
import Relaited_Products from "../../../components/Relaited_Products";
import { fetchDataFromApi } from "../../../utils/api";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../../store/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = ({ product, products }: any) => {
  const p = product?.data?.[0]?.attributes;

  const [selectedSize, setSelectedSize] = useState();
  const [ShowError, setShowError] = useState(false);
  const dispatch = useDispatch();

  const notify = () => {
    toast.success("Successfully add, check your cart", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className="w-full md:py-20">
      <ToastContainer />
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left product start */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailcarousel images={p.image.data} />
          </div>
          {/* left product end */}

          {/* Right product start */}
          <div className="flex-[1] py-3">
            {/* product prices */}
            <div className="">
              <h1 className=" text-2xl font-bold">{p.name}</h1>
              <p className="font-bold pb-3">{p.subtitle}</p>
              <p className="font-bold">MRP: ₹ {p.price}</p>
              <p className="text-gray-400">Incl of taxes</p>
              <p className="text-gray-400">{`(Also includes all applicaple duties)`}</p>
            </div>

            {/* Product size range  */}
            <div className="mb-10 mt-7">
              <div className="flex justify-between mb-2">
                <p className="font-semibold">Select Size</p>
                <p className="font-medium text-black/[0.5]">Select Guide</p>
              </div>

              <div id="sizesGrid" className="grid grid-cols-3 gap-2">
                {p.size.data.map((item: any, i: any) => {
                  return (
                    <div
                      key={i}
                      className={` border rounded text-center py-3 font-medium ${
                        item.enabled
                          ? "hover:border-black cursor-pointer"
                          : "cursor-not-allowed bg-gray-100 text-black/[0.5] border-none"
                      } ${selectedSize === item.size ? "border-black" : ""}`}
                      onClick={() => {
                        setSelectedSize(item.size);
                        setShowError(false);
                      }}
                    >
                      {item.size}
                    </div>
                  );
                })}
              </div>

              {ShowError && (
                <div className="text-red-500 mt-1">
                  Size selection is required
                </div>
              )}

              <div className="flex flex-col gap-4 mt-5">
                <button
                  className="bg-black rounded-full py-3 text-white hover:bg-black/[0.8] transition-all active:scale-90"
                  onClick={() => {
                    if (!selectedSize) {
                      setShowError(true);
                      document.getElementById("sizesGrid")?.scrollIntoView({
                        block: "center",
                        behavior: "smooth",
                      });
                    } else {
                      dispatch(
                        addToCart({
                          ...product?.data?.[0],
                          selectedSize,
                          oneQuitityPrice:p.price,
                        })
                      );
                      notify()
                    }
                  }}
                >
                  Add To Card
                </button>
                <button className=" rounded-full py-3 border-[2px] border-black flex items-center justify-center gap-2 transition-all active:scale-90">
                  WishList <AiOutlineHeart />
                </button>
              </div>

              <div className="mt-10">
                <p className="text-xl font-medium">Product Details</p>
                <p className="pt-4">{p.description}</p>
              </div>
            </div>
          </div>
          {/* Right product end */}
        </div>

        <Relaited_Products products={products} />
      </Wrapper>
    </div>
  );
};

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const products = await fetchDataFromApi("/api/produts?populate=*");

  // Get the paths we want to pre-render based on posts
  const paths = products?.data?.map((p: any) => ({
    params: {
      slug: p.attributes.slug,
    },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params: { slug } }: any) {
  const product = await fetchDataFromApi(
    `/api/produts?populate=*&[filters][slug][$eq]=${slug}`
  );
  const products = await fetchDataFromApi(
    `/api/produts?populate=*&[filters][slug][$ne]=${slug}`
  );

  return {
    props: {
      product,
      products,
    },
  };
}

export default ProductDetails;
