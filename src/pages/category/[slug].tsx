import { useEffect, useState } from "react";
import ProductCard from "../../../components/ProductCard";
import Wrapper from "../../../components/Wrapper";
import { fetchDataFromApi } from "../../../utils/api";
import useSWR from "swr";
import { useRouter } from "next/router";

const maxResult = 3;

const Category = ({ category, products, slug }: any) => {
  const [pageIndex, setPageIndex] = useState(1);
  const {query} = useRouter();

  useEffect(()=>{
    setPageIndex(1)
  },[query])

  const { data, error, isLoading } = useSWR(
    `/api/produts?populate=*&[filters][categories][slug][$eq]=${slug}&pagination[page]=${pageIndex}&pagination[pageSize]=${maxResult}`,
    fetchDataFromApi,
    {
      fallbackData: products,
    }
  );

  return (
    <div className=" w-full my-20">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto my-8 md:my-0">
          <div className=" text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            {category?.data?.[0]?.attributes?.name}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {data?.data?.map((product: any) => {
            return (
              <>
                <ProductCard key={product?.id} data={product} />
              </>
            );
          })}
        </div>

        {/* PAGINATION BUTTONS START */}
        {data?.meta?.pagination?.total > maxResult && (
          <div className="flex gap-3 items-center justify-center my-16 md:my-0">
            <button
              className={`rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500`}
              disabled={pageIndex === 1}
              onClick={() => setPageIndex(pageIndex - 1)}
            >
              Previous
            </button>

            <span className="font-bold">{`${pageIndex} of ${
              data && data.meta.pagination.pageCount
            }`}</span>

            <button
              className={`rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500`}
              disabled={pageIndex === (data && data.meta.pagination.pageCount)}
              onClick={() => setPageIndex(pageIndex + 1)}
            >
              Next
            </button>
          </div>
        )}
        {/* PAGINATION BUTTONS END */}
        {isLoading && (
          <div className="absolute top-0 left-0 w-full h-full bg-white/[0.5] flex flex-col gap-5 justify-center items-center">
            <img src="/logo.svg" width={150} />
            <span className="text-2xl font-medium">Loading...</span>
          </div>
        )}
      </Wrapper>
    </div>
  );
};

export default Category;

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const catogory = await fetchDataFromApi("/api/categories?populate=*");

  // Get the paths we want to pre-render based on posts
  const paths = catogory.data.map((c: any) => ({
    params: {
      slug: c.attributes.slug,
    },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params: { slug } }: any) {
  const category = await fetchDataFromApi(
    `/api/categories?filters[slug][$eq]=${slug}`
  );
  const products = await fetchDataFromApi(
    `/api/produts?populate=*&[filters][categories][slug][$eq]=${slug}&pagination[page]=1&pagination[pageSize]=${maxResult}`
  );

  return {
    props: {
      category,
      products,
      slug,
    },
  };
}
