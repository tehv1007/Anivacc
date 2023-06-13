import { memo } from "react";
import ReactPaginate from "react-paginate";
import { withErrorBoundary } from "react-error-boundary";

const ErrorComponent = () => {
  return (
    <div className="flex items-center justify-center w-full h-full p-2 text-white bg-red-500 rounded-md">
      Component Error
    </div>
  );
};

const PostPagination = ({ perPage = 5, changePage, count }) => {
  return (
    <ReactPaginate
      className="flex items-center justify-center gap-x-2 lg:gap-x-5"
      nextLabel="Next >"
      previousLabel="< Previous"
      pageRangeDisplayed={3}
      onPageChange={(e) => changePage(e.selected + 1)}
      activeClassName="bg-blue-900 text-white font-bold"
      pageLinkClassName="p-2 font-semibold"
      pageClassName="p-2 border rounded-lg max-w-10"
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
