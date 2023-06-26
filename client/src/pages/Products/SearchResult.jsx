import { useState } from "react";
import Card from "./components/Card";
import { useLocation, useParams } from "react-router-dom";
import SideBar from "./components/SideBar";
import Pagination from "../../components/Common/Pagination";
import GlobalSpinner from "../../components/Common/loading/GlobalSpinner";
import { useSearchPosts } from "../../hooks/useProduct";

const paginate = (array, page_size, page_number) => {
  return array.slice((page_number - 1) * page_size, page_number * page_size);
};

const SearchResult = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("query");

  const [page, setPage] = useState(1);
  const ITEMS_PER_PAGE = 9;

  const { data: products, isLoading } = useSearchPosts(searchTerm);

  if (isLoading) return <></>;
  console.log(products);

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
        <span className="text-[26px] font-medium text-left">
          {totalItems} kết quả tìm thấy cho từ khóa "{searchTerm}"
        </span>
      </h1>

      {/* Product Grid */}
      {isLoading ? (
        <GlobalSpinner />
      ) : (
        <div className="w-full lg:grid lg:grid-cols-4 lg:gap-7">
          {/* Products */}
          <div className="flex flex-col items-center lg:col-span-3 mb-[30px]">
            <div className="grid grid-cols-2 gap-7 md:grid-cols-3 lg:col-span-3 lg:place-content-start relative h-fit mb-[20px]">
              {products.length == 0 ? (
                ""
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

export default SearchResult;
