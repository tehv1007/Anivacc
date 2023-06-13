import { useState } from "react";
import Card from "./components/Card";
import { ClipLoader } from "react-spinners";
import Pagination from "./components/Pagination";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { supabase } from "../../config/supabase";

const Products = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const queryObject = Object.fromEntries(searchParams.entries());
  const type = queryObject.type;

  const [pagin, setPagin] = useState([0, 8]);
  const {
    isLoading,
    isError,
    data: products,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => supabase.from("product").select(),

    select: (res) => {
      if (Object.keys(queryObject).length == 0) {
        return res.data;
      } else {
        return res.data.filter((product) => product.categories.includes(type));
      }
    },
  });

  if (isLoading || isError) {
    return (
      <ClipLoader
        loading={isLoading}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
        className="lg:col-span-4 mx-auto"
      />
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-7 md:grid-cols-3 lg:col-span-3 lg:place-content-start relative h-fit">
        {Object.keys(products).length == 0 ? (
          <div className="place-self-center col-span-3 italic ">
            No items found
          </div>
        ) : (
          <>
            {products.map((product, index) => {
              const { id, title, isNew, hot, like, preSale, thumbnail } =
                product;
              if (index >= pagin[0] && index <= pagin[1]) {
                return <Card key={id} product={product} />;
              }
            })}
          </>
        )}
        <Pagination newProducts={products} pagin={pagin} setPagin={setPagin} />
      </div>
    </>
  );
};

export default Products;
