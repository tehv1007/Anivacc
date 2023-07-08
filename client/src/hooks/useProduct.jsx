import { useQuery } from "@tanstack/react-query";
import { supabase } from "../config/supabase";
import unidecode from "unidecode";

export const useProductsByCategory = (categoryType, lang_code) => {
  return useQuery(["products", { categoryType, lang_code }], async () => {
    const { data, error } = await supabase
      .from("product")
      .select("*")
      .contains("categories", [categoryType])
      .eq("lang_code", lang_code)
      .order("created_at", { ascending: false });

    if (error) {
      throw new Error(error.message);
    }
    return data;
  });
};

export const useSearchPosts = (keyword) => {
  const normalizedKeyword = unidecode(keyword?.toLowerCase());
  return useQuery(["products", { keyword }], async () => {
    const { data } = await supabase
      .from("product")
      .select()
      .ilike("title_deunicode", `%${normalizedKeyword}%`);
    // .range(0, 5);

    return data || [];
  });
};
