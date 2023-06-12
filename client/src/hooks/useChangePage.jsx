import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import useQuery from "./useQuery";

const useChangePage = (slug = "") => {
  const query = useQuery();
  const navigate = useNavigate();

  const pageQuery = query.get("page");

  const page = pageQuery ? parseInt(pageQuery) : 1;

  const changePage = useCallback(
    (pageToChange) => navigate(`${slug}?page=${pageToChange}`),
    [slug]
  );

  return { page, changePage };
};

export default useChangePage;
