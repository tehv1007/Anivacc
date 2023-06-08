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
    <section className="flex justify-center items-center mt-6 gap-4">
      {currentPage !== 1 && previousPage !== 1 ? (
        <Link
          className="bg-gray-400 text-white px-3 py-2 rounded-md"
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
          className="bg-gray-400 text-white px-3 py-2 rounded-md"
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
          className="bg-black text-white px-3 py-2 rounded-md"
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
          className="bg-gray-400 text-white px-3 py-2 rounded-md"
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
          className="bg-gray-400 text-white px-3 py-2 rounded-md"
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
