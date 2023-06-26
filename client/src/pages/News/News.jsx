import { Link } from "react-router-dom";
import NewsItem from "./Components/NewsItem";
import PostPagination from "./Components/PostPagination";
import GlobalSpinner from "../../components/Common/loading/GlobalSpinner";
import { useCountPosts, useGetPosts } from "../../hooks/usePost";
import useChangePage from "../../hooks/useChangePage";
import Header from "../../components/Feature/Header";

const News = () => {
  const { page, changePage } = useChangePage("/posts");
  const { data: postList, isLoading } = useGetPosts(page);
  const { data: countPost } = useCountPosts();

  return (
    <>
      <Header imgUrl={"/images/news-bg.webp"} />
      <div className="max-w-[1200px] mx-auto py-10">
        <div className="flex-col mx-auto px-[10px]">
          <h1 className="text-gray-700 text-center">
            <span className="text-4xl font-medium text-left capitalize">
              Tin tức
            </span>
          </h1>
          {/* News category */}
          <ul className="leading-6 text-center flex justify-center gap-[10px]">
            <li className="inline-block bg-gray-200 text-gray-800">
              <Link
                to={`/posts/category/company`}
                className="table-cell w-[230px] h-[44px] border-solid border-0 rounded-none align-middle text-center transition-all duration-300 ease-in-out hover:text-white hover:bg-blue-900"
              >
                Tin tức công ty
              </Link>
            </li>
            <li className="inline-block bg-gray-200 text-gray-800">
              <Link
                to={`/posts/category/industry`}
                className="table-cell w-[230px] h-[44px] border-solid border-0 rounded-none align-middle text-center transition-all duration-300 ease-in-out hover:text-white hover:bg-blue-900"
              >
                Tin trong ngành
              </Link>
            </li>
          </ul>
          <div className="resizee h-5" />

          {/* News List */}
          <div className="">
            {isLoading ? (
              <GlobalSpinner />
            ) : postList ? (
              postList.map((post) => {
                return (
                  <div key={post.id}>
                    <NewsItem post={post} />
                  </div>
                );
              })
            ) : null}
          </div>
        </div>
        {countPost ? (
          <PostPagination changePage={changePage} count={countPost} />
        ) : null}
      </div>
    </>
  );
};

export default News;
