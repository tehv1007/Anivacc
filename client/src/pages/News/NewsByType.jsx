import { Link, useParams } from "react-router-dom";
import NewsItem from "./Components/NewsItem";
import useChangePage from "../../hooks/useChangePage";
import {
  useCountPostsByCategory,
  useGetPostsByCategory,
} from "../../hooks/usePost";
import GlobalSpinner from "../../components/Common/loading/GlobalSpinner";
import PostPagination from "./Components/PostPagination";
import Header from "../../components/Feature/Header";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const NewsByType = ({ lang_code }) => {
  const { t } = useTranslation();
  const { categoryType } = useParams();

  const { page, changePage } = useChangePage(`/posts/category/${categoryType}`);
  const { data: postList, isLoading: getPostsLoading } = useGetPostsByCategory(
    categoryType,
    lang_code,
    page
  );
  const { data: countPost, isLoading: getCountLoading } =
    useCountPostsByCategory(categoryType, lang_code);

  useEffect(() => {
    changePage(1); // Reset giá trị page về 1 khi lang_code thay đổi
  }, [lang_code]);

  return (
    <>
      <Header imgUrl={"/images/background/news-bg.webp"} />
      <div className="max-w-[1200px] mx-auto py-10">
        <div className="flex-col lg:max-w-[990px] xl:max-w-[1200px] mx-auto px-[10px]">
          <h1 className="text-gray-700 text-center">
            <span className="text-4xl font-medium text-left capitalize">
              {t("home_news")}
            </span>
          </h1>
          {/* News category */}
          <ul className="leading-6 text-center flex justify-center gap-[10px]">
            <li
              className={`inline-block ${
                categoryType === "company"
                  ? "text-white bg-blue-900"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              <Link
                to={`/posts/category/company`}
                className="table-cell w-[230px] h-[44px] border-solid border-0 rounded-none align-middle text-center transition-all duration-300 ease-in-out hover:text-white hover:bg-blue-900"
              >
                {t("home_news_cate1")}
              </Link>
            </li>
            <li
              className={`inline-block ${
                categoryType === "industry"
                  ? "text-white bg-blue-900"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              <Link
                to={`/posts/category/industry`}
                className="table-cell w-[230px] h-[44px] border-solid border-0 rounded-none align-middle text-center transition-all duration-300 ease-in-out hover:text-white hover:bg-blue-900"
              >
                {t("home_news_cate2")}
              </Link>
            </li>
          </ul>
          <div className="resizee h-5" />
          {/* News List */}
          <div className="">
            {getPostsLoading || getCountLoading ? (
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
          {countPost ? (
            <PostPagination changePage={changePage} count={countPost} />
          ) : (
            <div>
              <p className="text-center">{t("home_news_info")}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NewsByType;
