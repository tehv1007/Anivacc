import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../config/supabase";
import pagination from "../utils/pagination";

export const useGetSolutions = (page, limit = 7) => {
  const { FROM, LIMIT } = pagination(page, limit);

  return useQuery(
    ["solutions", { page, limit }],
    async () => {
      const { data, error } = await supabase
        .from("solutions")
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

export const useGetSolutionById = (id) => {
  return useQuery(
    ["solution", { id }],
    async () => {
      const { data, error } = await supabase
        .from("solutions")
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

export const useGetSolutionsByAuthor = (authorID, page = 1, limit = 7) => {
  const { FROM, LIMIT } = pagination(page, limit);

  return useQuery(
    ["solutions", { authorID, page, limit }],
    async () => {
      const { data, error } = await supabase
        .from("solutions")
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

export const useCountSolutions = () => {
  return useQuery(
    ["solutions_count"],
    async () => {
      const { count, error } = await supabase
        .from("solutions")
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

export const useCountSolutionsByAuthor = (authorID) => {
  return useQuery(
    ["solutions_count", { authorID }],
    async () => {
      const { count, error } = await supabase
        .from("solutions")
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

export const useSearchSolutions = (keyword) => {
  return useQuery(
    ["solutions", { keyword }],
    async () => {
      const { data } = await supabase
        .from("solutions")
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

export const useCreateSolution = (reset) => {
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
      await supabase.from("solutions").insert({
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
        queryClient.invalidateQueries(["solutions", "solutions_count"]);
        return navigate("/");
      },
    }
  );
};

export const useDeleteSolution = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (solutionID) => {
      const { error, data } = await supabase
        .from("solutions")
        .delete()
        .match({ id: solutionID });

      if (error) {
        throw error;
      }

      return data;
    },
    {
      onError: () => toast.error("Xoá bài viết thất bại!"),
      onSuccess: () => {
        toast.success("Xoá bài viết thành công!");
        queryClient.invalidateQueries(["solutions"]);
        queryClient.invalidateQueries(["solutions_count"]);
      },
    }
  );
};
