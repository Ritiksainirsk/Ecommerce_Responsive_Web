import { useEffect, useState } from "react";
import HeroBenner from "../../components/HeroBenner";
import ProductCard from "../../components/ProductCard";
import Wrapper from "../../components/Wrapper";
import { fetchDataFromApi } from "../../utils/api";
import Image from "next/image";

export default function Home({ products }: any) {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   // fetchProduct();
  // }, []);

  // const fetchProduct = async () => {
  //   const products = await fetchDataFromApi("/api/produts");
  //   setData(products);
  // };

  return (
    <>
      <main className="">
        <Wrapper>
          <HeroBenner />
          {/* heading start */}
          <div className="text-center my-[50px] mx-auto max-w-[800px] md:my-[80px]">
            <h1 className="text-[28] md:text-[34px] capitalize pb-5 font-semibold leading-tight">
              cushioning for your miles.
            </h1>
            <p className="text-md md:text-xl">
              It took me around one month to bring you this fully functional,
              fully responsive and beautiful looking full stack e-commerce
              project with the latest trending top notch technologies,
            </p>
          </div>
          {/* heading End */}

          {/* product list start */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
            {products?.data?.map((product:any) => {
              return (
                <>
                  <ProductCard key={product?.id} data={product}/>
                </>
              );
            })}
          </div>
          {/* product list End */}
        </Wrapper>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const products = await fetchDataFromApi("/api/produts?populate=*");

  return {
    props: { products },
  };
}
