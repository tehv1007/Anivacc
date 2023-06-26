import { useState } from "react";
import Card from "./components/Card";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { supabase } from "../../config/supabase";
import SideBar from "./components/SideBar";
import Pagination from "../../components/Common/Pagination";
import GlobalSpinner from "../../components/Common/loading/GlobalSpinner";

const paginate = (array, page_size, page_number) => {
  return array.slice((page_number - 1) * page_size, page_number * page_size);
};

const Products = () => {
  const { categoryId: type } = useParams();

  const [page, setPage] = useState(1);
  const ITEMS_PER_PAGE = 9;

  const {
    isLoading,
    isError,
    data: products,
    error,
  } = useQuery({
    queryKey: ["products", { type: type }],
    queryFn: () => {
      return supabase.from("product").select();
    },

    select: (res) => {
      if (type == "all") {
        return res.data;
      } else {
        return res.data.filter((product) => product.categories.includes(type));
      }
    },
  });

  if (isLoading || isError) return <></>;

  let totalItems = products.length;
  const paginationParams = {
    currentPage: page,
    hasNextPage: ITEMS_PER_PAGE * page < totalItems,
    hasPreviousPage: page > 1,
    nextPage: page + 1,
    previousPage: page - 1,
    lastPage: Math.ceil(totalItems / ITEMS_PER_PAGE),
  };

  const paginatedArr = paginate(products, ITEMS_PER_PAGE, page);

  return (
    <>
      <h1 className="text-gray-700 text-left pb-[15px]">
        <span className="text-[26px] font-medium text-left capitalize">
          {type != "all" ? type : "Tất cả sản phẩm"}
        </span>
      </h1>

      {/* Product Grid */}
      {isLoading || isError ? (
        <GlobalSpinner />
      ) : (
        <div className="w-full lg:grid lg:grid-cols-4 lg:gap-7">
          {/* Products */}
          <div className="flex flex-col items-center lg:col-span-3 mb-[30px]">
            <div className="grid grid-cols-2 gap-7 md:grid-cols-3 lg:col-span-3 lg:place-content-start relative h-fit mb-[20px]">
              {products.length == 0 ? (
                <div className="place-self-center col-span-3 uppercase text-lg text-center mt-10">
                  <div className="mb-5 text-blue-900">
                    Xin lỗi bạn, Chưa có sản phẩm nào trong danh mục này
                  </div>
                  <img
                    src="/images/index_main_im01.jpg"
                    alt="Not Found"
                    className="mb-10"
                  />
                </div>
              ) : (
                <>
                  {paginatedArr.map((product, index) => {
                    return <Card key={index} product={product} />;
                  })}
                </>
              )}
            </div>
            {products.length == 0 ? (
              ""
            ) : (
              <Pagination
                setPage={setPage}
                paginationParams={paginationParams}
              />
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <SideBar setPage={setPage} />
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
