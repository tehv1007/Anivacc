import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import InquiryTable from "./components/InquiryTable";
import { supabase } from "../../config/supabase";
import Pagination from "../product/components/Pagination";

const paginate = (array, page_size, page_number) => {
  return array.slice((page_number - 1) * page_size, page_number * page_size);
};

const InquiryList = () => {
  const [page, setPage] = useState(1);
  const ITEMS_PER_PAGE = 7;

  const { isLoading, data: inquiries } = useQuery({
    queryKey: ["inquiries"],
    queryFn: () =>
      supabase
        .from("inquire")
        .select()
        .order("created_at", { ascending: false }),
    select: (res) => {
      return res.data;
    },
  });

  if (isLoading) return <h1>Loading...</h1>;

  let totalItems = inquiries.length;
  const paginationParams = {
    currentPage: page,
    hasNextPage: ITEMS_PER_PAGE * page < totalItems,
    hasPreviousPage: page > 1,
    nextPage: page + 1,
    previousPage: page - 1,
    lastPage: Math.ceil(totalItems / ITEMS_PER_PAGE),
  };

  const paginatedArr = paginate(inquiries, ITEMS_PER_PAGE, page);

  return (
    <>
      <InquiryTable inquiries={paginatedArr} />
      <Pagination setPage={setPage} paginationParams={paginationParams} />
    </>
  );
};

export default InquiryList;
