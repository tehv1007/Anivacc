import useChangePage from "../../hooks/useChangePage";
import { useCountSolutions, useGetSolutions } from "../../hooks/useSolution";
import PostPagination from "../news/post/PostPagination";
import PostTable from "./components/PostTable";

const Solutions = () => {
  const { page, changePage } = useChangePage("/solutions");
  const { data: postList, isLoading } = useGetSolutions(page);
  const { data: countPost } = useCountSolutions();

  return (
    <div className="flex flex-col mt-4 gap-y-5 lg:gap-y-10">
      <section className="flex flex-col gap-y-5">
        <h2 className="font-semibold text-[16px] lg:text-[24px] flex items-baseline gap-x-3">
          {`Danh sách bài đăng trang ${page}`}
        </h2>

        {postList && postList.length === 0 ? (
          <h4 className="mt-10 mb-10 text-lg font-semibold text-center">
            Danh sách bài viết trống
          </h4>
        ) : null}

        <PostTable posts={postList} isLoading={isLoading} />

        {countPost ? (
          <PostPagination changePage={changePage} count={countPost} />
        ) : null}
      </section>
    </div>
  );
};

export default Solutions;
