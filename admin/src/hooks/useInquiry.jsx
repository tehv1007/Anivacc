import { supabase } from "../config/supabase";
import { useEffect, useState } from "react";

// export const useGetInquiryById = (id) => {
//   return useQuery(
//     ["inquiry", { id }],
//     async () => {
//       const { data, error } = await supabase
//         .from("inquire")
//         .select("*")
//         .eq("id", id)
//         .limit(1)
//         .single();

//       if (error) throw error;

//       return data;
//     },
//     {
//       onError: () => toast.error("Lấy thông tin inquiry thất bại!"),
//       refetchOnWindowFocus: false,
//     }
//   );
// };

export const getInquiryById = async (id) => {
  try {
    const { data, error } = await supabase
      .from("inquire")
      .select("*")
      .eq("id", id)
      .limit(1)
      .single();

    if (error) throw error;

    return data;
  } catch (error) {
    console.error("Lỗi khi lấy thông tin inquiry:", error);
    throw error;
  }
};

export const useGetInquiryById = (id) => {
  const [inquiry, setInquiry] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInquiry = async () => {
      try {
        const data = await getInquiryById(id);
        setInquiry(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchInquiry();
  }, [id]);

  return { inquiry, isLoading, error };
};

export const getBrandById = async (id) => {
  try {
    const { data, error } = await supabase
      .from("brand")
      .select("*")
      .eq("id", id)
      .limit(1)
      .single();

    if (error) throw error;

    return data;
  } catch (error) {
    console.error("Lỗi khi lấy thông tin brand:", error);
    throw error;
  }
};
