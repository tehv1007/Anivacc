import { useQuery } from "@tanstack/react-query";
import { supabase } from "../config/supabase";
import { toast } from "react-toastify";

export const useProductsByCategory = (categoryType) => {
  return useQuery(
    ["products", { categoryType }],
    async () => {
      const { data, error } = await supabase
        .from("product")
        .select("*")
        .contains("categories", [categoryType])
        .order("created_at", { ascending: false });

      if (error) {
        throw new Error(error.message);
      }
      return data;
    },
    {
      onError: () => toast.error("Lấy thông tin sản phẩm thất bại!"),
      refetchOnWindowFocus: false,
    }
  );
};
