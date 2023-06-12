import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "../config/supabase";
import pagination from "../utils/pagination";

export const useGetPosts = (page = 1, limit = 5) => {
  const { FROM, LIMIT } = pagination(page, limit);

  return useQuery(
    ["posts", { page, limit }],
    async () => {
      const { data, error } = await supabase
        .from("posts")
        .select()
        .order("created_at", { ascending: false })
        .range(FROM, LIMIT);

      if (error) throw error;

      return data;
    },
    {
      onError: () => toast.error("Lấy bài viết thất bại!"),
      refetchOnWindowFocus: false,
    }
  );
};

export const useCountPosts = () => {
  return useQuery(
    ["posts_count"],
    async () => {
      const { count, error } = await supabase
        .from("posts")
        .select("id", { count: "exact" });

      if (error) throw error;

      return count;
    },
    {
      onError: () => toast.error("Có lỗi xảy ra khi lấy số lượng bài viết!"),
      refetchOnWindowFocus: false,
    }
  );
};

export const useGetPostsByCategory = (categoryType, page = 1, limit = 5) => {
  const { FROM, LIMIT } = pagination(page, limit);

  return useQuery(
    ["posts", { categoryType, page, limit }],
    async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("category", categoryType)
        .order("created_at", { ascending: false })
        .range(FROM, LIMIT);

      if (error) throw error;

      return data;
    },
    {
      onError: () => toast.error("Lấy thông tin bài đăng thất bại!"),
      refetchOnWindowFocus: false,
    }
  );
};

export const useCountPostsByCategory = (categoryType) => {
  return useQuery(
    ["posts_count", { categoryType }],
    async () => {
      const { count, error } = await supabase
        .from("posts")
        .select("id", { count: "exact" })
        .eq("category", categoryType);

      if (error) throw error;

      return count;
    },
    {
      onError: () => toast.error("Có lỗi xảy ra khi lấy số lượng bài viết!"),
      refetchOnWindowFocus: false,
    }
  );
};

export const useSearchPosts = (keyword) => {
  return useQuery(
    ["posts", { keyword }],
    async () => {
      const { data } = await supabase
        .from("posts")
        .select("title, id")
        .ilike("title", `%${keyword.toLowerCase()}%`)
        .range(0, 5);

      return data || [];
    },
    {
      onError: () => toast.error("Tìm kiếm thất bại!"),
      refetchOnWindowFocus: false,
    }
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
    },
    {
      onError: () => toast.error("Lấy thông tin bài đăng thất bại!"),
      refetchOnWindowFocus: false,
    }
  );
};
