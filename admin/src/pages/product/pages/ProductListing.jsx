import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { supabase } from "../../../config/supabase";
import Pagination from "../components/Pagination";
import ProductTable from "../components/ProductTable";
import GlobalSpinner from "../../../components/common/loading/GlobalSpinner";

const paginate = (array, page_size, page_number) => {
  return array.slice((page_number - 1) * page_size, page_number * page_size);
};

const ProductListing = () => {
  const [page, setPage] = useState(1);
  const ITEMS_PER_PAGE = 7;

  const { isLoading, data: products } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      supabase
        .from("product")
        .select(
          "id,title,product_code,long_desc, short_desc, thumbnail, categories, brand(name)"
        )
        .order("created_at", { ascending: false }),
    select: (res) => {
      return res.data.map((product) => ({
        ...product,
        brand: product.brand.name,
      }));
    },
  });

  if (isLoading) return <GlobalSpinner />;

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
      <ProductTable products={paginatedArr} />
      <Pagination setPage={setPage} paginationParams={paginationParams} />
    </>
  );
};

export default ProductListing;
