import { Link } from "react-router-dom";
import Heading from "../../../components/Common/Heading";
import GlobalSpinner from "../../../components/Common/loading/GlobalSpinner";
import { supabase } from "../../../config/supabase";
import { useQuery } from "@tanstack/react-query";
import { formatDate } from "../../../utils/formatDate";
import { useTranslation } from "react-i18next";
import parser from "html-react-parser";

const NewsItem = ({ post }) => {
  return (
    <div className="group md:max-w-[376px] md:pt-10 ">
      {/* image */}
      <div className="overflow-hidden hidden md:block aspect-video">
        <div className="group-hover:scale-110 transition-all ease-linear duration-360">
          <Link to={`/posts/${post.id}`}>
            <picture className="w-full h-full">
              <img
                className="h-full w-full object-cover"
                src={post.thumbnail}
                alt={post.title}
              />
            </picture>
          </Link>
        </div>
      </div>
      {/* Content */}
      <div className="flex flex-col">
        <h5 className="mt-[40px] mb-[14px] line-clamp-1">
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </h5>
        <div className="timeTwo md:hidden">{formatDate(post.created_at)}</div>
        <div className="line-clamp-2 text-gray-500 text-[13px] leading-6 mb-[30px]">
          {parser(post.description)}
        </div>
        <div className="hidden md:block w-full h-[1.2px] bg-transparent transition-all duration-360 ease-in group-hover:bg-blue-900" />
        <div className="hidden md:flex border-gray-200 text-gray-600 text-xl leading-[70px] justify-between items-center group-hover:text-blue-900 border-t">
          {formatDate(post.created_at)}
          <div className="hidden text-blue-900 group-hover:inline leading-4 mr-5">
            <Link to={`/posts/${post.id}`}>
              <i className="fas fa-chevron-right"></i>
            </Link>
          </div>
        </div>
        <hr className="md:hidden" />
      </div>
    </div>
  );
};

const InformationCenter = ({ lang_code }) => {
  const { t } = useTranslation();

  const { isLoading, data: posts } = useQuery({
    queryKey: ["posts", { lang_code }],
    queryFn: () =>
      supabase
        .from("posts")
        .select("*")
        .eq("lang_code", lang_code)
        .order("created_at", { ascending: false })
        .limit(3),
    select: (res) => {
      return res.data;
    },
  });

  return (
    <section className="bg-white pt-[64px]">
      <div className="max-w-[1440px] mx-auto px-[10px] md:px-5 xl:px-10">
        <div className="py-5 px-[15px]">
          {/* Heading */}
          <div className="flex justify-between items-center">
            <Heading title={t("home_news")} />
            {/* Categories */}
            <div className="px-[5px] hidden md:block">
              <ul className="flex gap-[10px]">
                <li className="bg-blue-900 border text-white text-[13px] leading-7 text-left px-[22px] rounded-[30px] capitalize">
                  <Link to="/posts/category/company" title="Company News">
                    {t("home_news_cate1")}
                  </Link>
                </li>
                <li className="border-gray-500 border text-gray-600 hover:bg-blue-900 hover:text-white transition-all duration-360 ease-linear text-[13px] leading-7 text-left px-[22px] rounded-[30px] capitalize">
                  <Link to="/posts/category/industry" title="Industry News">
                    {t("home_news_cate2")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* News list */}
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
              {isLoading ? (
                <GlobalSpinner />
              ) : (
                posts.map((post) => {
                  return (
                    <div key={post.id}>
                      <NewsItem post={post} />
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InformationCenter;
