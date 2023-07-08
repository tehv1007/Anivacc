import { memo } from "react";
import ReactPaginate from "react-paginate";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../components/ErrorComponent";

const PostPagination = ({ perPage = 8, changePage, count }) => {
  return (
    <ReactPaginate
      className="flex items-center justify-center gap-x-2 lg:gap-x-5"
      nextLabel="Next >"
      previousLabel="< Previous"
      pageRangeDisplayed={3}
      onPageChange={(e) => changePage(e.selected + 1)}
      activeClassName="bg-green-500 text-black font-bold rounded-lg"
      pageLinkClassName="p-2 font-semibold"
      pageClassName="p-2 border"
      breakLabel="..."
      disabledClassName="opacity-40"
      pageCount={Math.ceil(count / perPage)}
    />
  );
};

export default memo(
  withErrorBoundary(PostPagination, {
    FallbackComponent: ErrorComponent,
  })
);
