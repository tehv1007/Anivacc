import { Link } from "react-router-dom";
import Heading from "../../../components/Common/Heading";
import GlobalSpinner from "../../../components/Common/loading/GlobalSpinner";
import { supabase } from "../../../config/supabase";
import { useQuery } from "@tanstack/react-query";
import { formatDate } from "../../../utils/formatDate";

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
        <p className="line-clamp-2 text-gray-500 text-xs leading-6 mb-[30px]">
          {post.description}
        </p>
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

const InformationCenter = () => {
  const {
    isLoading,
    data: posts,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      supabase
        .from("posts")
        .select("*")
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
            <Heading title="Tin tức" />
            {/* Categories */}
            <div className="px-[5px] hidden md:block">
              <ul className="flex gap-[10px]">
                <li className="bg-blue-900 border text-white text-xs leading-7 text-left px-[22px] rounded-[30px] capitalize">
                  <Link to="/posts/category/company" title="Company News">
                    Tin tức công ty
                  </Link>
                </li>
                <li className="border-gray-500 border text-gray-600 hover:bg-blue-900 hover:text-white transition-all duration-360 ease-linear text-xs leading-7 text-left px-[22px] rounded-[30px] capitalize">
                  <Link to="/posts/category/industry" title="Industry News">
                    Tin trong ngành
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