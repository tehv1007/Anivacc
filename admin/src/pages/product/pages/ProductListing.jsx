import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
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
  // const [isLoading, setIsLoading] = useState(true);
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchProductsData = async () => {
  //     const data = await fetchProducts();
  //     if (data) {
  //       setProducts(data);
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchProductsData();
  // }, []);

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
      return res.data?.map((product) => ({
        ...product,
        brand: product?.brand?.name,
      }));
    },
  });

  // const fetchProducts = async () => {
  //   try {
  //     const { data, error } = await supabase
  //       .from("product")
  //       .select(
  //         "id,title,product_code,long_desc, short_desc, thumbnail, categories, brand(name)"
  //       )
  //       .order("created_at", { ascending: false });

  //     if (error) {
  //       throw new Error(error.message);
  //     }

  //     const modifiedData = data.map((product) => ({
  //       ...product,
  //       brand: product?.brand?.name,
  //     }));

  //     return modifiedData;
  //   } catch (error) {
  //     console.error("Error fetching products: ", error);
  //     return null;
  //   }
  // };

  if (isLoading) return <GlobalSpinner />;
  console.log(products);

  let totalItems = products?.length;
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
      <h2 className="text-xl font-semibold text-center md:text-left uppercase py-2 pl-2">
        Danh sách sản phẩm hiện có
      </h2>
      <ProductTable products={paginatedArr} />
      <Pagination setPage={setPage} paginationParams={paginationParams} />
    </>
  );
};

export default ProductListing;
