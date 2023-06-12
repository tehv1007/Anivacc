import { Link } from "react-router-dom";
import NewsItem from "./Coponents/NewsItem";
import PostPagination from "./Coponents/PostPagination";
import GlobalSpinner from "../../components/Common/loading/GlobalSpinner";
import { useCountPosts, useGetPosts } from "../../hooks/usePost";
import useChangePage from "../../hooks/useChangePage";

const News = () => {
  const { page, changePage } = useChangePage("/posts");
  const { data: postList, isLoading } = useGetPosts(page);
  const { data: countPost } = useCountPosts();

  return (
    <div className="max-w-[1200px] mx-auto py-10">
      <div className="flex-col lg:max-w-[990px] xl:max-w-[1200px] mx-auto px-[10px]">
        {/* News category */}
        <ul className="leading-6 text-center flex justify-center gap-[10px]">
          <li className="inline-block bg-gray-200 text-gray-800">
            <Link
              to={`/posts/category/company`}
              className="table-cell w-[230px] h-[44px] border-solid border-0 rounded-none align-middle text-center transition-all duration-300 ease-in-out hover:text-white hover:bg-blue-900"
            >
              Company News
            </Link>
          </li>
          <li className="inline-block bg-gray-200 text-gray-800">
            <Link
              to={`/posts/category/industry`}
              className="table-cell w-[230px] h-[44px] border-solid border-0 rounded-none align-middle text-center transition-all duration-300 ease-in-out hover:text-white hover:bg-blue-900"
            >
              Industry News
            </Link>
          </li>
        </ul>
        <div className="resizee h-5" />

        {/* News List */}
        <div className="">
          {isLoading ? (
            <GlobalSpinner />
          ) : (
            postList.map((post) => {
              return (
                <div key={post.id}>
                  <NewsItem post={post} />
                </div>
              );
            })
          )}
        </div>
      </div>

      {countPost ? (
        <PostPagination changePage={changePage} count={countPost} />
      ) : null}
    </div>
  );
};

export default News;
