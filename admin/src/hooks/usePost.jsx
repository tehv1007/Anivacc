import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../config/supabase";
import pagination from "../utils/pagination";

export const useGetPosts = (page, limit = 7) => {
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

export const useGetPostsByAuthor = (authorID, page = 1, limit = 7) => {
  const { FROM, LIMIT } = pagination(page, limit);

  return useQuery(
    ["posts", { authorID, page, limit }],
    async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*, user:user(uuid)")
        .eq("author_id", authorID)
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

export const useCountPostsByAuthor = (authorID) => {
  return useQuery(
    ["posts_count", { authorID }],
    async () => {
      const { count, error } = await supabase
        .from("posts")
        .select("id", { count: "exact" })
        .eq("author_id", authorID);

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

export const useCreatePost = (reset) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation(
    async ({
      lang_code,
      author_id,
      content,
      description,
      thumbnail,
      title,
      category,
    }) => {
      await supabase.from("posts").insert({
        title,
        thumbnail,
        description,
        content,
        author_id,
        category,
        lang_code,
      });
    },
    {
      onError: () => {
        toast.error("Đăng bài viết thất bại!");
        return navigate("/");
      },
      onSuccess: () => {
        toast.success("Tạo bài viết thành công!");
        reset();
        queryClient.invalidateQueries(["posts", "posts_count"]);
        return navigate("/");
      },
    }
  );
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (postID) => {
      const { error, data } = await supabase
        .from("posts")
        .delete()
        .match({ id: postID });

      if (error) {
        throw error;
      }

      return data;
    },
    {
      onError: () => toast.error("Xoá bài viết thất bại!"),
      onSuccess: () => {
        toast.success("Xoá bài viết thành công!");
        queryClient.invalidateQueries(["posts"]);
        queryClient.invalidateQueries(["posts_count"]);
      },
    }
  );
};

export const useGetUserByID = (userID) => {
  return useQuery(
    ["user", { userID }],
    async () => {
      const { data, error } = await supabase
        .from("user")
        .select("*")
        .eq("uuid", userID)
        .single();

      if (error) throw error;

      return data;
    },
    {
      onError: () => toast.error("Lấy thông tin người dùng thất bại!"),
    }
  );
};
