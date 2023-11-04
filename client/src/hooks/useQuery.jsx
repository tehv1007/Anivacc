import { useMemo } from "react";
import { useLocation } from "react-router-dom";

const useQuery = () => {
  const { search } = useLocation();
  console.log(search);
  return useMemo(() => new URLSearchParams(search), [search]);
};

export default useQuery;
