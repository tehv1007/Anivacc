import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { supabase } from "../../../config/supabase";
import Loading from "../../../components/common/loading/Loading";
import parser from "html-react-parser";

const ProductDetail = () => {
  const { productId } = useParams();
  console.log(productId);

  const {
    isLoading,
    data: product,
    error,
  } = useQuery({
    queryKey: ["products", productId],
    queryFn: () =>
      supabase
        .from("product")
        .select("*, brand(name)")
        .eq("id", productId)
        .single(),
    select: (res) => {
      return {
        ...res.data,
        brand: res.data.brand.name,
      };
    },
  });

  if (isLoading) return <Loading />;
  // console.log(product);

  return (
    <>
      <section className="max-w-screen-lg mx-auto px-5 py-4">
        <h2 className="mb-[10px] font-medium sm:text-lg md:text-xl lg:text-2xl">
          Product Detail
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="w-full">
            <div>
              <img src={product.thumbnail} className="rounded-md" />
            </div>
          </div>
          <div>
            <div className="md:pl-6 md:w-[480px] lg:w-[500px] xl:w-[590px]">
              <span>
                <h4 className="mb-[10px] text-sm text-gray-500 uppercase">
                  {product.categories}
                </h4>
                <h2 className="mb-[10px] font-medium sm:text-lg md:text-xl lg:text-2xl">
                  {product.title}
                </h2>
                {/* <div className="flex gap-1.5">
                  <div className="mb-[10px] font-bold sm:text-xl lg:text-3xl">
                    {product.brand}
                  </div>
                </div> */}
              </span>

              <div>
                <div className="mb-[10px] font-[2px] text-gray-500">
                  {parser(`${product.short_desc}`)}
                </div>
              </div>

              {/* <Link to={"edit"}>
                <button type="submit" className="btn btn-primary mt-5">
                  <div className="flex items-center gap-2">
                    <span>Edit Product</span>
                  </div>
                </button>
              </Link> */}
            </div>
          </div>
        </div>
        <div>
          <div className="mb-[10px] font-[2px] text-gray-500">
            {parser(`${product.long_desc}`)}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
