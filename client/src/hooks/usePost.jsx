import { useQuery } from "@tanstack/react-query";
import { supabase } from "../config/supabase";
import pagination from "../utils/pagination";

export const useGetPosts = (page, lang_code, limit = 4) => {
  const { FROM, LIMIT } = pagination(page, limit);
  return useQuery(
    ["posts", { page, limit, lang_code }],
    async () => {
      const { data, error } = await supabase
        .from("posts")
        .select()
        .eq("lang_code", lang_code) // Thêm điều kiện lang_code
        .order("created_at", { ascending: false })
        .range(FROM, LIMIT);

      if (error) throw error;

      return data;
    }
    // {
    //   onError: () => toast.error("Lấy bài viết thất bại!"),
    //   refetchOnWindowFocus: false,
    // }
  );
};

export const useCountPosts = (lang_code) => {
  return useQuery(
    ["posts_count", { lang_code }],
    async () => {
      const { count, error } = await supabase
        .from("posts")
        .select("id", { count: "exact" })
        .eq("lang_code", lang_code); // Thêm điều kiện lang_code;

      if (error) throw error;

      return count;
    }
    // {
    //   onError: () => toast.error("Có lỗi xảy ra khi lấy số lượng bài viết!"),
    //   refetchOnWindowFocus: false,
    // }
  );
};

export const useGetPostsByCategory = (
  categoryType,
  lang_code,
  page = 1,
  limit = 5
) => {
  const { FROM, LIMIT } = pagination(page, limit);
  return useQuery(
    ["posts", { categoryType, page, lang_code, limit }],
    async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("category", categoryType)
        .eq("lang_code", lang_code)
        .order("created_at", { ascending: false })
        .range(FROM, LIMIT);

      if (error) throw error;

      return data;
    }
    // {
    //   onError: () => toast.error("Lấy thông tin bài đăng thất bại!"),
    //   refetchOnWindowFocus: false,
    // }
  );
};

export const useCountPostsByCategory = (categoryType, lang_code) => {
  return useQuery(
    ["posts_count", { categoryType, lang_code }],
    async () => {
      const { count, error } = await supabase
        .from("posts")
        .select("id", { count: "exact" })
        .eq("category", categoryType)
        .eq("lang_code", lang_code);

      if (error) throw error;

      return count;
    }
    // {
    //   onError: () => toast.error("Có lỗi xảy ra khi lấy số lượng bài viết!"),
    //   refetchOnWindowFocus: false,
    // }
  );
};

export const useGetPostById = (id) => {
  return useQuery(
    ["post", { id }],
    async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("id", id)
        .limit(1)
        .single();

      if (error) throw error;

      return data;
    }
    // {
    //   onError: () => toast.error("Lấy thông tin bài đăng thất bại!"),
    //   refetchOnWindowFocus: false,
    // }
  );
};

export const useGetNextPost = (id, lang_code) => {
  return useQuery(
    ["nextPost", { id }],
    async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .gt("id", id)
        .eq("lang_code", lang_code) // Thêm điều kiện lang_code
        .order("id", { ascending: true })
        .limit(1);

      if (error) throw error;

      return data;
    }
    // {
    //   onError: () => toast.error("Lấy thông tin bài đăng thất bại!"),
    //   refetchOnWindowFocus: false,
    // }
  );
};

export const useGetPrevPost = (id, lang_code) => {
  return useQuery(
    ["prevPost", { id }],
    async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .lt("id", id)
        .eq("lang_code", lang_code) // Thêm điều kiện lang_code
        .order("id", { ascending: false })
        .limit(1);

      if (error) throw error;

      return data;
    }
    // {
    //   onError: () => toast.error("Lấy thông tin bài đăng thất bại!"),
    //   refetchOnWindowFocus: false,
    // }
  );
};
