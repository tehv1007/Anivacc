import { Link } from "react-router-dom";
import { formatDate } from "../../../utils/formatDate";
import parser from "html-react-parser";

const NewsItem = ({ post }) => {
  const date = formatDate(post.created_at);
  const parts = date.split("-");

  return (
    <div className="p-[10px] text-[16px] text-gray-500 text-left w-full">
      <div className="group hover:bg-blue-900 leading-7 mb-5 p-2 transition-all duration-500 ease-in-out flex flex-col md:flex-row items-center">
        {/* Time */}
        <div className="date w-[100px] flex-shrink-0 text-gray-800 text-center flex flex-col justify-center items-center leading-7 gap-1 group-hover:text-white">
          <div className="text-2xl leading-11">{parts[2]}</div>
          <div className="text-sm leading-6 uppercase">DATE</div>
          <div className="text-[18px] leading-8">
            <span className="month text-4xl leading-15">{parts[0]}</span>-
            {parts[1]}
          </div>
        </div>

        {/* Thumbnail */}
        <div className="">
          <div className="border border-gray-200 md:w-[388px] md:h-[255px] float-left w-full overflow-clip">
            <Link to={`/posts/${post.id}`} className="block">
              <img
                className="w-full h-full block object-cover"
                alt={post.title}
                src={post.thumbnail}
              />
            </Link>
          </div>
        </div>

        {/* Summary */}
        <div className="flex-grow pl-[15px] pr-3 pt-[18px] self-stretch h-full overflow-hidden">
          <div className="line-clamp-1 text-lg text-gray-900 leading-8 text-left mb-3 group-hover:text-white">
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </div>

          <div className="line-clamp-3 mb-[25px] text-gray-500 text-sm leading-6 group-hover:text-white hover:text-white">
            {parser(post.description)}
          </div>
          <div className="text-center">
            <Link
              to={`/posts/${post.id}`}
              className="border-gray-400 rounded border-solid border font-[FuturaLTMedium] text-gray-900 group-hover:text-white inline-block text-lg leading-7 text-center py-[5px] px-[15px]"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
