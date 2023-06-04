import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Loading from "../../common/components/Loading";
import { supabase } from "../../../config/supabase";

const ProductDetail = () => {
  const { productId } = useParams();

  const {
    isLoading,
    data: product,
    error,
  } = useQuery({
    queryKey: ["products", productId],
    queryFn: () =>
      supabase
        .from("product")
        .select("*, category (name), brand(name)")
        .eq("id", productId)
        .single(),
    select: (res) => {
      return {
        ...res.data,
        category: res.data.category.name,
        brand: res.data.brand.name,
      };
    },
  });

  if (isLoading) return <Loading />;
  console.log(product);

  return <div>ProductDetail {productId}</div>;
};

export default ProductDetail;
