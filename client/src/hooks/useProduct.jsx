import { useQuery } from "@tanstack/react-query";
import { supabase } from "../config/supabase";

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
    }
  );
};

export const useSearchPosts = (keyword) => {
  return useQuery(
    ["products", { keyword }],
    async () => {
      const { data } = await supabase
        .from("product")
        .select()
        .ilike("title", `%${keyword.toLowerCase()}%`)
        .range(0, 5);

      return data || [];
    }
  );
};
