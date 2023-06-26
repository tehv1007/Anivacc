import { Link } from "react-router-dom";

const Pagination = ({ paginationParams, setPage }) => {
  const {
    currentPage,
    previousPage,
    hasPreviousPage,
    hasNextPage,
    lastPage,
    nextPage,
  } = paginationParams;

  return (
    <section className="flex justify-center gap-1 text-sm font-medium mt-5">
      {currentPage !== 1 && previousPage !== 1 ? (
        <Link
          className="block h-8 w-8 rounded border border-gray-400 bg-white text-center leading-8 text-gray-900"
          to="?page=1"
          type="submit"
          onClick={() => setPage(1)}
        >
          1
        </Link>
      ) : (
        ""
      )}
      {hasPreviousPage ? (
        <Link
          className="block h-8 w-8 rounded border border-gray-400 bg-white text-center leading-8 text-gray-900"
          to={`?page=${previousPage}`}
          type="submit"
          onClick={() => setPage(previousPage)}
        >
          {previousPage}
        </Link>
      ) : (
        ""
      )}
      {currentPage ? (
        <Link
          to={`?page=${currentPage}`}
          className="block h-8 w-8 rounded border-blue-900 bg-blue-900 text-center leading-8 text-white"
          type="submit"
          onClick={() => setPage(currentPage)}
        >
          {currentPage}
        </Link>
      ) : (
        ""
      )}

      {hasNextPage ? (
        <Link
          className="block h-8 w-8 rounded border border-gray-400 bg-white text-center leading-8 text-gray-900"
          to={`?page=${nextPage}`}
          type="submit"
          onClick={() => setPage(nextPage)}
        >
          {nextPage}
        </Link>
      ) : (
        ""
      )}
      {lastPage !== currentPage && nextPage !== lastPage && lastPage != 0 ? (
        <Link
          className="block h-8 w-8 rounded border border-gray-400 bg-white text-center leading-8 text-gray-900"
          to={`?page=${lastPage}`}
          type="submit"
          onClick={() => setPage(lastPage)}
        >
          {lastPage}
        </Link>
      ) : (
        ""
      )}
    </section>
  );
};

export default Pagination;
